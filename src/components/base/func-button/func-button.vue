<template>
  <div class="funcbtn" @click.stop="handleClick">
    <i class="fa fa-plus"></i>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
}
</script>

<style lang="stylus" scoped>
.funcbtn 
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #2472c8;
  position: fixed;
  right: 15px;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 999999;
  i 
    font-size: 20px;
</style>
