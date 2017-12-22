<template>
  <transition name="document">
    <div class="main">
      <div class="header">
        <i @click="goBack" class="fa fa-arrow-left"></i>
        <div>{{$route.params.tab}}</div>
      </div>
      <div class="data-container">
        <input v-if="cate === 'name'" type="text" v-model="name" />
        <cube-checkbox-group v-if="cate === 'sex'" v-model="sex">
          <cube-checkbox label="0">女</cube-checkbox>
          <cube-checkbox label="1">男</cube-checkbox>
        </cube-checkbox-group>
        <input v-if="cate === 'job'" type="text" v-model="job" />
        <input v-if="cate === 'school'" type="text" v-model="school" />
        <input type="text" v-model="company" v-if="cate === 'company'" />
        <cube-checkbox-group v-if="cate === 'emotion'" v-model="emotion">
          <cube-checkbox label="0">已婚</cube-checkbox>
          <cube-checkbox label="1">单身</cube-checkbox>
          <cube-checkbox label="2">交往中</cube-checkbox>
        </cube-checkbox-group>
        <input v-if="cate === 'ill'" type="text" v-model="ill" />
        <input v-if="cate === 'hobby'" type="text" v-model="hobby" />
        <input v-if="cate === 'warning'" type="text" v-model="warning" />
        <textarea class="area" v-if="cate === 'note'" type="text" v-model="note"></textarea>
        <cube-button :primary="true" @click="save">完成</cube-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
        sex: [],
        emotion: [],
        name: "",
        job: "",
        school: "",
        company: "",
        ill: "",
        hobby: "",
        warning: "",
        note: "",
        _id: undefined
    };
  },
  methods: {
    save() {
      let add = {
        sex: this.sex,
        emotion: this.emotion,
        name: this.name,
        job: this.job,
        school: this.school,
        company: this.company,
        ill: this.ill,
        hobby: this.hobby,
        warning: this.warning,
        note: this.note
      }

      this._id ? add._id = this._id : '';

      this.setDoc(add);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
    },
    ...mapMutations({
      setDoc: "SET_DOC"
    })
  },
  created() {
    this.cate = this.$route.params.data;
    let add = this.getDoc;
    this.sex = add.sex;
    this.emotion = add.emotion;
    this.name = add.name;
    this.job = add.job;
    this.school = add.school;
    this.company = add.company;
    this.ill = add.ill;
    this.hobby = add.hobby;
    this.warning = add.warning;
    this.note = add.note;
    this._id = add._id ? add._id : '';
  },
  watch: {
    sex(newVal) {
      if (newVal.length > 1) {
        this.sex = newVal.slice(1);
      }
    },
    emotion(newVal) {
      if (newVal.length > 1) {
        this.emotion = newVal.slice(1);
      }
    }
  },
  computed: {
    ...mapGetters(['getDoc'])
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/css/index';
.document-enter-active,.document-leave-active
  transition: all 0.3s;
.document-enter,.document-leave-to
  transform: translate3d(100%, 0, 0);
.main
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .header
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: $default_blue;
    color: #fff;
    i
      position: absolute;
      top: 15px;
      left: 15px;
      font-size: 25px;
  .data-container
    padding: 10px 5px;
    box-sizing: border-box;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    input
      normal-input();
    .area
      width: 100%;
      height: 100px;
      font-size: 20px;
      padding: 0 15px;
      box-sizing: border-box;
      border: 1px solid #ddd;
</style>
