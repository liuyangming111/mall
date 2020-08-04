<template>
  <div style="background-color: rgb(238,238,238)">
    <div class="top">
      <div class="city">s</div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="slides.length>0">
      <van-swipe-item><img :src="slides[0].image" alt=""></van-swipe-item>
      <van-swipe-item><img :src="slides[1].image" alt=""></van-swipe-item>
      <van-swipe-item><img :src="slides[2].image" alt=""></van-swipe-item>
    </van-swipe>
    <div class="category">
      <div v-for="(item, index) in category" :key="index">
        <div><img :src="item.image"></div>
        <div>{{item.mallCategoryName}}</div>
      </div>
    </div>
    <div><img :src="advertesPicture.PICTURE_ADDRESS" alt="" class="picture"></div><br>
    <div class="recommend">
        <h3>推荐商品</h3>
        <div class="recommend_1">
            <div v-for="(item, index) in recommend" :key="index">
              <div><img :src="item.image" alt=""></div>
              <div>{{item.goodsName}}</div>
              <div>
                <span>￥{{item.mallPrice}}</span>
                <span class="original_price"><s>￥{{item.price}}</s></span>
              </div>
              <div></div>
            </div>
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
      value: "",
      category: [],
      slides:[],
      advertesPicture:"",
      recommend:''
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
          this.advertesPicture=res.data.advertesPicture;
          // console.log(this.advertesPicture)
          this.recommend=res.data.recommend
          console.log(this.recommend)
          // console.log(res)
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
  height: 160PX;
}
.my-swipe img{
  width: 100%;
}
.category{
  width: 95%;
  margin: 10px auto;
  background-color: white;
  font-size: 14px;
  padding-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
}
.category img{
  width:55px; 
  margin-top:10px
}
.city{
  width: 100px;
}
.picture{
  width: 100%;
}
.recommend{
  background-color: white;
}
.recommend_1{
  display: flex;
}
.original_price{
  color: #999;
}
</style>