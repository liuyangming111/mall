<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in arr" :key="index">
          <img :src="item" @click="getImg(images, index)" />
        </van-swipe-item>
      </van-swipe>
      <div class="center">{{goodsOne.name}}</div>
      <div class="Price">￥{{goodsOne.present_price}}</div>
      <div class="introduce">
        <div>运费：{{goodsOne.__v}}</div>
        <div>剩余：{{goodsOne.amount}}</div>
        <div v-if="user===null" @click="$Pop_up">
          收藏：
          <van-icon name="like" />
        </div>
        <div v-else>
          <div @click="Collection">
            收藏：
            <van-icon name="like" />
          </div>
        </div>
      </div>
    </div>
    <div class="Fabulous">
      <div>
        <van-icon name="shop-collect-o" class="Fabulous1" />
        <span>有赞商店</span>
        <span class="Fabulous2">官方</span>
      </div>
      <div>
        进入店铺
        <van-icon name="arrow" class="Fabulous3" />
      </div>
    </div>
    <br />
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <div v-html="goodsOne.detail"></div>
      </van-tab>
      <van-tab title="商品评论">商品评论</van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button v-if="user===null" type="warning" text="加入购物车" @click="$Pop_up" />
      <van-goods-action-button v-else type="warning" text="加入购物车" @click="$Cart(goodsOne.id)" />
      <van-goods-action-button type="danger" text="立即购买" @click="showPopup"/>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%'}" style="z-index:999;" overlay=f/>
    </van-goods-action>
    
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      goodsOne: "",
      active: 0,
      arr: [],
      images: [],
      user: JSON.parse(localStorage.getItem("user")),
      show: false
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    getImg(images, index) {
      this.arr.map((item) => {
        ImagePreview({
          images: this.arr,
          showIndex: true,
          loop: false,
          startPosition: index,
        });
      });
    },
    Collection() {
      // this.$api.postcollection({
      // }).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
    },
    showPopup() {
      this.show = true;
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then((res) => {
        this.goodsOne = res.goods.goodsOne;
        this.arr = [this.goodsOne.image, this.goodsOne.image_path];
        console.log(this.goodsOne);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
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
  color: white;
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
  color: #999;
}
.Fabulous {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.Fabulous1 {
  margin: 0 6px;
  font-size: 18px;
  position: relative;
  top: 3px;
}
.Fabulous2 {
  color: white;
  background-color: red;
  border-radius: 4px;
  margin-left: 6px;
}
.Fabulous3 {
  color: #999;
  margin: 0 10px 0 6px;
  position: relative;
  top: 3px;
}
</style>