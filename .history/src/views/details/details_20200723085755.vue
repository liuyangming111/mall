<template>
  <div>
    <div class="return">
      <van-icon name="arrow-left" />
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="goodsOne.image" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="goodsOne.image_path" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="center">{{goodsOne.name}}</div>
      <div class="Price">￥{{goodsOne.present_price}}</div>
      <div class="introduce">
        <div>运费：{{goodsOne.__v}}</div>
        <div>剩余：{{goodsOne.amount}}</div>
        <div>收藏：<van-icon name="like" /></div>
      </div>
    </div>
    <div>
      div
    </div>



    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
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
      goodsOne: ""
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
.my-swipe img {
  width: 100%;
  height: 360px;
  border-bottom: 1px solid #eee;
}
.center {
  margin: 10px;
  font-size: 18px;
}
.Price {
  margin: 10px;
  color: red;
}
.introduce {
  display: flex;
  justify-content: space-around;
}
</style>