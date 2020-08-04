<template>
  <div>
    <div class="return">
      <van-icon name="arrow-left" />
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img :src="goodsOne.image" alt=""></van-swipe-item>
      <van-swipe-item><img :src="goodsOne.image_path" alt=""></van-swipe-item>
    </van-swipe>
    <div class="center">{{goodsOne.name}}</div>
    <div class="Price">￥{{goodsOne.present_price}}</div>
    <div>
        <div></div>
        <div></div>
        <div></div>
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
      id: "",
      goodsOne: "",
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then(res => {
        this.goodsOne = res.goods.goodsOne;
        console.log(this.goodsOne);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
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
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    width: 100%;
    height: 360px;
    border-bottom: 1px solid #eee;
}
.my-swipe img{
    width: 100%;
    height: 360px;
    border-bottom: 1px solid #eee;
}
.center{
    margin: 10px;
    font-size: 18px;
}
.Price{
    margin: 10px;
    color: red;
}
</style>