<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="order">我的订单</div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">全部</van-tab>
      <van-tab title="标签 2">待支付</van-tab>
      <van-tab title="标签 3">待发货</van-tab>
      <van-tab title="标签 4">待收货</van-tab>
      <van-tab title="标签 5">yi'wan</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 5,
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.return {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
}
.order {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
</style>