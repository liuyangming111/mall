<template>
  <div>
    <div class="top">商品分类</div>
    <div class="top_1">
      <div>
        
      </div>
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "a",
      activeKey: 0
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #999;
}
.top_1{
  display: flex;
}
</style>