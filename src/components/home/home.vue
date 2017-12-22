<template>
  <div>
    <div class="header">我是tby</div>
    <Tab></Tab>
    <router-view></router-view>
    <func-btn @click="add"></func-btn>
  </div>
</template>

<script>
import Tab from "components/base/tab/tab";
import FuncBtn from "components/base/func-button/func-button";
export default {
  components: {
    Tab,
    FuncBtn
  },
  methods: {
    add() {
      this.$router.push('/add');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~common/css/index";
.header
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  background: $default_blue;
  color: #fff;
</style>
