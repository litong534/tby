<template>
  <div class="scroll_container">
    <cube-scroll>
      <div class="detail" v-if="getDetail">
        <div class="header">
          <i @click="goBack" class="fa fa-arrow-left goback"></i>
          {{getDetail.name}} 的档案
          <i @click="toggleStars" class="star fa" :class="getDetail.collect ? 'fa-star':'fa-star-o'"></i>
        </div>
        <div class="container">
          <div class="title">性别</div>
          <div class="content">{{getDetail.sex | sexFilter | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">职业</div>
          <div class="content">{{getDetail.job | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">学校</div>
          <div class="content">{{getDetail.school | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">公司</div>
          <div class="content">{{getDetail.company | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">感情状况</div>
          <div class="content">{{getDetail.sex | emotionFilter | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">病史</div>
          <div class="content">{{getDetail.ill | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">兴趣爱好</div>
          <div class="content">{{getDetail.hobby | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">禁忌</div>
          <div class="content">{{getDetail.warning | isNull}}</div>
        </div>
        <div class="container">
          <div class="title">备注</div>
          <div class="content" style="width: 50px;">{{getDetail.note | isNull}}</div>
        </div>
      </div>
    </cube-scroll>
    <div class="btn">
      <cube-button :primary="true" @click="modify">修改</cube-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { toggleCollect } from "@/api/document/document";
export default {
  computed: {
    ...mapGetters(["getDetail"])
  },
  methods: {
    toggleStars() {
      const currentCollect = this.getDetail.collect;
      const toast = this.$createToast({
        txt: "收藏成功",
        mask: true,
        type: "correct",
        time: 1000
      });
      toggleCollect(!currentCollect, this.getDetail._id).then(res => {
        if (res.data.code === 0) {
          this.toggleCollect(!currentCollect);
          toast.show();
          if (!currentCollect) {
          } else {
            this.$createToast({
              txt: "已取消",
              mask: true,
              type: "correct",
              time: 1000
            }).show();
          }
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    modify() {
      this.setModify(this.getDetail);
      this.modifyStatus(true);
      this.$router.push("/add");
    },
    ...mapMutations({
      toggleCollect: "TOGGLE_COLLECT",
      setModify: "SET_DETAIL_TO_ADD",
      modifyStatus: "SET_MODIFY_STATUS"
    })
  },
  created() {
    if (!this.getDetail) {
      this.$router.replace("/home");
    }
  },
  filters: {
    isNull(val) {
      if (val === undefined || val === null || val === "") {
        return "未添加";
      } else return val;
    },
    emotionFilter(val) {
      if (typeof val !== "number") return;
      return val === 0 ? "已婚" : val === 1 ? "单身" : "交往中";
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
.btn
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
.scroll_container
  position: absolute;
  top: 15px;
  left: 15px;
  bottom: 60px;
  right: 15px;
  overflow: hidden;
  .detail
    .header
      border: 1px solid $default_blue;
      background: $default_blue;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
      .goback
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 25px;
      .star
        color: $star_color;
        font-size: 30px;
        position: absolute;
        top: 10px;
        right: 10px;
    .container
      width: 100%;
      padding: 15px 30px;
      box-sizing: border-box;
      color: $default_blue;
      border: 1px solid $default_blue;
      border-bottom: 0;
      display: flex;
      align-items: center;
      overflow: hidden;
      justify-content: space-between;
      &:last-child
        border: 1px solid $default_blue;
      .title
        width: 100px;
        text-align: right;
        padding-right: 30px;
        box-sizing: border-box;
      .content
        flex: 1;
        white-space: normal;
        word-break: break-all;
        word-wrap: break-word;
</style>
