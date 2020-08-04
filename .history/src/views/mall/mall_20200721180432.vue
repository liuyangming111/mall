<template>
  <div style="background-color: rgb(238,238,238)">
    <div class="top">
      <div class="city">s</div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="slides.length>0">
      <van-swipe-item>
        <img :src="slides[0].image" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="slides[1].image" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="slides[2].image" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="category">
      <div v-for="(item, index) in category" :key="index">
        <div>
          <img :src="item.image" />
        </div>
        <div>{{item.mallCategoryName}}</div>
      </div>
    </div>
    <div>
      <img :src="advertesPicture.PICTURE_ADDRESS" alt class="picture" />
    </div>
    <br />
    <div class="recommend">
      <h3 style="margin:10px">推荐商品</h3>
      <div class="recommend_1">
        <div v-for="(item, index) in recommend" :key="index">
          <div>
            <img :src="item.image" alt />
          </div>
          <div class="center">{{item.goodsName}}</div>
          <div style="margin:6px">
            <span>￥{{item.mallPrice}}</span>
            <span class="original_price"><s>￥{{item.price}}</s></span>
          </div>
          <div class="details">
            <div>
              <van-icon name="cart" />
            </div>
            <div>查看详情</div>
          </div>
        </div>
      </div>
    </div>
    <malll></malll>
  </div>
</template>

<script>
import { Toast } from "vant";
import BScroll from "better-scroll";
import malll from "../../components/mall/malll";
export default {
  name: "",
  props: {},
  components: {
    malll
  },
  data() {
    return {
      value: "",
      category: [],
      slides: [],
      advertesPicture: "",
      recommend: ""
    };
  },
  methods: {
    getData() {
      this.$api
        .gethome_page()
        .then(res => {
          this.category = res.data.category;
          // console.log(this.category);
          this.slides = res.data.slides;
          // console.log(this.slides)
          this.advertesPicture = res.data.advertesPicture;
          // console.log(this.advertesPicture)
          this.recommend = res.data.recommend;
          // console.log(this.recommend)
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.top {
  display: flex;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  width: 100%;
  height: 160px;
}
.my-swipe img {
  width: 100%;
}
.category {
  width: 95%;
  margin: 10px auto;
  background-color: white;
  font-size: 14px;
  padding-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
}
.category img {
  width: 55px;
  margin-top: 10px;
}
.city {
  width: 100px;
}
.picture {
  width: 100%;
}
.recommend {
  background-color: white;
  border-top: 1px solid white;
}
.recommend_1 {
  display: flex;
}
.recommend_1 > div {
  border: 1px solid #eee;
}
.recommend_1 img {
  width: 125px;
}
.original_price {
  color: #999;
}
.details {
  display: flex;
  height: 30px;
  width: 110px;
  background-color: red;
  border-radius: 10px;
  margin: 10px auto;
}
.details div:nth-child(1) {
  background-color: olive;
  color: white;
  text-align: center;
  line-height: 34px;
  font-size: 20px;
  width: 40px;
  border-radius: 10px 0 0 10px;
}
.details div:nth-child(2) {
  margin-left: 10px;
  font-size: 12px;
  line-height: 30px;
  color: white;
}
.center {
  font-size: 14px;
  width: 125px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.recommend{
    display: flex;
    overflow: hidden;
     background-color: #fff;
}
.cont{
    display: flex;
    flex:1;
    border-top:1px solid #eee;
}
</style>