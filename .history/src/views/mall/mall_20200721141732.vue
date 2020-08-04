<template>
  <div>
    <div class="top">
      <div>s</div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {
   
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top{
  display: flex;
}
</style>