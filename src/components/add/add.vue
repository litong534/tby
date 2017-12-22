<template>
  <div>
    <div class="header">
      <i @click="goBack" class="fa fa-arrow-left"></i>
      <div v-if="!getModify">添加档案</div>
      <div v-else>修改档案</div>
    </div>
    <div class="profile" ref="profile">
      <cube-scroll>
        <router-link tag="div" to="/doc/name/姓名" class="container">
          <div class="title">姓名</div>
          <div class="content">{{getDoc.name | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/sex/性别" class="container">
          <div class="title">性别</div>
          <div class="content">{{parseInt(getDoc.sex[0]) | sexFilter | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/job/职业" class="container top30">
          <div class="title">职业</div>
          <div class="content">{{getDoc.job | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/school/学校" class="container">
          <div class="title">学校</div>
          <div class="content">{{getDoc.school | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/company/公司" class="container">
          <div class="title">公司</div>
          <div class="content">{{getDoc.company | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/emotion/感情状况" class="container top30">
          <div class="title">感情状况</div>
          <div class="content">{{parseInt(getDoc.emotion[0]) | emotionFilter | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/ill/病史" class="container">
          <div class="title">病史</div>
          <div class="content">{{getDoc.ill | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/hobby/兴趣爱好" class="container">
          <div class="title">兴趣爱好</div>
          <div class="content">{{getDoc.hobby | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/warning/禁忌" class="container">
          <div class="title">禁忌</div>
          <div class="content">{{getDoc.warning | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
        <router-link tag="div" to="/doc/note/备注" class="container">
          <div class="title">备注</div>
          <div class="content">{{getDoc.note | isNull}}</div>
          <div class="arrow">
            <i class="fa fa-chevron-right"></i>
          </div>
        </router-link>
      </cube-scroll>
    </div>
    <div class="btn-group">
      <cube-button style="margin-right: 15px;" @click="goBack">取消</cube-button>
      <cube-button v-if="!getModify" :primary="true" @click="commit">提交</cube-button>
      <cube-button v-else :primary="true" @click="modify">修改</cube-button>
    </div>
  </div>
</template>

<script>
import { addDoc, modifyDoc } from "@/api/document/document.js";
import { prefixStyle } from "@/common/js/index.js";
import { mapMutations, mapGetters } from "vuex";
// const transform = prefixStyle("transform");
import { SET_MODIFY_STATUS } from '../../store/mutation-type';
export default {
  data() {
    return {
      reset: {
        sex: [],
        emotion: [],
        name: "",
        job: "",
        school: "",
        company: "",
        ill: "",
        hobby: "",
        warning: "",
        note: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      resetDoc: "RESET_DOC",
      setModify:"SET_MODIFY_STATUS"
    }),
    goBack() {
      this.resetDoc(this.reset);
      this.$router.replace("/home");
    },
    commit() {
      this.$createToast({
        time: 0,
        txt: "请稍等...",
        mask: true
      }).show();
      addDoc({
        sex: parseInt(this.getDoc.sex[0]),
        emotion: parseInt(this.getDoc.emotion[0]),
        name: this.getDoc.name === '' ? '佚名' : this.getDoc.name,
        job: this.getDoc.job,
        school: this.getDoc.school,
        company: this.getDoc.company,
        ill: this.getDoc.ill,
        hobby: this.getDoc.hobby,
        warning: this.getDoc.warning,
        note: this.getDoc.note
      }).then(res => {
        if (res.data.code === 0) {
          this.$createToast({
            txt: "成功",
            mask: true,
            type: "correct",
            time: 1000
          }).show();
          this.resetDoc(this.reset);
        }
      });
    },
    modify() {
      this.$createToast({
        time: 0,
        txt: "请稍等...",
        mask: true
      }).show();
      modifyDoc( this.getDoc ).then(res => {
        if (res.data.code === 0) {
          this.$createToast({
            txt: "成功",
            mask: true,
            type: "correct",
            time: 1000
          }).show();

          setTimeout(() => {
            this.$router.replace('/list');
            this.setModify(false);
            this.resetDoc(this.reset);
          },1000);
        }
      });      
    }
  },
  computed: {
    ...mapGetters(["getDoc", "getModify"])
  },
  filters: {
    isNull(val) {
      if (val === undefined || val === null || val === "") {
        return "未添加";
      } else return val;
    },
    emotionFilter(val) {
      if (typeof val !== "number") return;
      return val === 0 ? "已婚" : val === 1 ? "单身" : val === 2 ? "交往中" : "";
    },
    sexFilter(val) {
      if (typeof val !== "number") return;
      return val === 0 ? "女" : val === 1 ? "男" : "";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/css/index';
.header
  position: relative;
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
.profile
  position: fixed;
  top: 50px;
  bottom: 70px;
  left: 0;
  right: 0;
  overflow: hidden;
  .cube-scroll-wrapper
    background-color: $dark;
  .container
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #aaa;
    &.top30
      margin-top: 30px;
      border-top: 1px solid #aaa;
    &:first-child
      border-top: 1px solid #aaa;
    .title
      width: 100px;
      margin-left: 10px;
    .content
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    .arrow
      width: 40px;
      display: flex;
      justify-content: flex-end;
      i
        margin-right: 10px;
        color: #aaa;
    .area
      width: 100%;
      height: 100px;
      font-size: 20px;
      padding: 0 15px;
      box-sizing: border-box;
      border: 1px solid #ddd;
.btn-group
  position: fixed;
  height: 60px;
  bottom: 0;
  width: 100%;
  padding: 0 15px 5px 15px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
</style>
