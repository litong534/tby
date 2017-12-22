<template>
  <div class="tab">
    <router-link tag="div" to="watched" class="tabitem">常查看的</router-link>
    <router-link tag="div" to="list" class="tabitem">名单</router-link>
    <router-link tag="div" to="liked" class="tabitem">收藏</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import "~common/css/index";
.tab
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  .tabitem
    flex: 1;
    color: #666;
    text-align: center;
    line-height: 30px;
    &.router-link-active
      color: $default_blue;
      border-bottom: 2px solid $default_blue;
</style>
