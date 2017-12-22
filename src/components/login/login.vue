<template>
  <div class="webname">
    <div class="title">tby--人生档案</div>
    <div class="form">
      <input class="input" type="text" v-model="username" placeholder="username" />
      <input class="input" type="text" v-model="password" placeholder="password" />
      <cube-button :primary="true" @click="login">登录</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/css/index';
.webname
  margin-top: 60px;
  font-size: 24px;
  text-align: center;
  .title
    color: $default_blue;
  .form
    width: 70%;
    margin: 0 auto;
    margin-top: 40px;
    .input
      normal-input()
</style>
