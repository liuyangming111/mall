<template>
  <div>
    <div class="top">购物车</div>
    <div class="center"><img src="../../../img/order.gif" alt=""></div>
    <div class="center">登陆后才能查看订单</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top{
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
.center img{
  width: 100%;
}
</style>