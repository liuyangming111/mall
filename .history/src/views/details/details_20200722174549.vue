<template>
  <div>
    <div class="return">
      <van-icon name="arrow-left" />
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img :src="goodsOne.image" alt=""></van-swipe-item>
      <van-swipe-item><img src="" alt=""></van-swipe-item>
    </van-swipe>
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
    this.id = "d0fabe0c966043cb8313fa55de9c555b"; //this.$route.query.id;
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
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
</style>