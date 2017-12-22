<template>
  <div class="container">
    <cube-scroll>
      <div class="wrapper" v-if="collect.length !== 0">
        <div class="card" v-for="c in collect" :key="c._id" @click="showDetail(c)">
          <div class="bubble">
            <div>{{c.name.slice(0,1)}}</div>
          </div>
          <div class="intro">
            <div class="name">{{c.name}}</div>
            <div class="sex">性别: {{c.sex | sexFilter | isNull}}</div>
            <div class="school">学校: {{c.school | isNull}}</div>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
import { getCollect } from "@/api/document/document";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      collect: []
    };
  },
  created() {
    this.getCollect();
  },
  methods: {
    getCollect() {
      getCollect().then(res => {
        if (res.data.code === 0) {
          this.collect = res.data.collect;
        }
      });
    },
    showDetail(c) {
      this.setDetail(c);
      this.$router.push(`/detail/${c._id}`);
    },
    ...mapMutations({
      setDetail: "SET_DETAIL"
    })
  },
  filters: {
    isNull(val) {
      if (val === undefined || val === null || val === "") {
        return "未添加";
      } else return val;
    },
    sexFilter(val) {
      if (typeof val !== "number") return;
      return val === 0 ? "女" : "男";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/css/index';
.container
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 15px;
  right: 15px;
  overflow: hidden;
  .wrapper
    .card
      width: 100%;
      height: 120px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 20px 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      .bubble
        height: 60px;
        width: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 24px;
        background: $light_blue;
      .intro
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        height: 80px;
        padding-left: 20px;
        box-sizing: border-box;
</style>
