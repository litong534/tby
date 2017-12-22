<template>
  <div class="content">
    <div class="scroll-wrapper" v-if="cityData.length !== 0">
    <cube-index-list :data="cityData" @select="selectItem" :title="'列表'"></cube-index-list>
    </div>
  </div>
</template>

<script>
import { getDoc } from "@/api/document/document.js";
import { formatDocs } from "@/common/js/index.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      cityData: () => []
    };
  },
  methods: {
    selectItem(item) {
      this.setDetail(item);
      this.$router.push(`/detail/${item._id}`);
    },
    ...mapMutations({
      setDetail: "SET_DETAIL"
    })
  },
  created() {
    getDoc().then(res => {
      this.cityData = formatDocs(res.data);
    });
  }
};
</script>

<style lang="stylus" scoped>
.content
  position: fixed;
  top: 80px;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  .scroll-wrapper
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
</style>
