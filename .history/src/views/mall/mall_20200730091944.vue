<template>
  <div style="background-color: rgb(238,238,238)">
    <div class="top">
      <div class="city">s</div>
      <div>
        <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @change="Search">
          <template #action>
            <div>搜索</div>
          </template>
        </van-search>
      </div> 
    </div>
    <div v-for="(item,index) in arr" :key="index" class="search"  @click="$toDetails(item.id)">{{item.name}}</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="slides.length>0">
      <van-swipe-item>
        <img :src="slides[0].image" alt  @click="$toDetails(slides[0].goodsId)"/>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="slides[1].image" alt  @click="$toDetails(slides[1].goodsId)"/>
      </van-swipe-item>
      <van-swipe-item>
        <img :src="slides[2].image" alt  @click="$toDetails(slides[2].goodsId)"/>
      </van-swipe-item>
    </van-swipe>
    <div class="category">
      <div v-for="(item, index) in category" :key="index">
        <div>
          <img :src="item.image" @click="clickbtn(index)"/>
        </div>
        <div>{{item.mallCategoryName}}</div>
      </div>
    </div>
    <div>
      <img :src="advertesPicture.PICTURE_ADDRESS" alt class="picture" />
    </div>
    <br />
    <div class="recommends">
      <h3 style="margin:10px">推荐商品</h3>
      <div class="recommend" ref="container">
        <div class="recommend_1">
          <div v-for="(item, index) in recommend" :key="index">
            <div>
              <img :src="item.image" @click="$toDetails(item.goodsId)" />
            </div>
            <div class="center">{{item.goodsName}}</div>
            <div style="margin:6px">
              <span>￥{{item.mallPrice}}</span>
              <span class="original_price">
                <s>￥{{item.price}}</s>
              </span>
            </div>
            <div class="details">
              <div v-if="user===null" @click="$Pop_up">
                <van-icon name="cart" />
              </div>
              <div v-else>
                <van-icon name="cart" @click="Cart(item)"/>
              </div>
              <div @click="$toDetails(item.goodsId)">查看详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <malll name="1F" :floorName="floorName.floor1" :floor="floor1"></malll>
    <malll name="2F" :floorName="floorName.floor2" :floor="floor2"></malll>
    <malll name="3F" :floorName="floorName.floor3" :floor="floor3"></malll>
    <mallll name="热销商品" :hotGoods="hotGoods"></mallll>
  </div>
</template>

<script>
import { Toast } from "vant";
import BScroll from "better-scroll";
import malll from "../../components/mall/malll";
import mallll from "../../components/mall/mallll";
export default {
  name: "",
  props: {},
  components: {
    malll,
    mallll
  },
  data() {
    return {
      value: "",
      category: [],
      slides: [],
      advertesPicture: "",
      recommend: "",
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: [],
      user:JSON.parse(localStorage.getItem('user')),
      arr:[]
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
          this.floor1 = res.data.floor1;
          this.floor2 = res.data.floor2;
          this.floor3 = res.data.floor3;
          this.floorName = res.data.floorName;
          // console.log(this.recommend)
          this.hotGoods = res.data.hotGoods;
          // console.log(this.hotGoods);
          // console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickbtn(index){
      this.$router.push({
        path:'/classification',
        query:{
          index:index
        }
       })
    },
    //获取购物车数据
    Cart(item){
      this.$Cart(item.goodsId)
      this.$api.postcar_data(this.id).then(res=>{
        if(res.code===200){
          this.$store.commit("setName", res.shopList.length)
        }
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    Search(){
      this.$api.postkey_word(this.value).then(res=>{
        if(res.code===200){
          this.arr=res.data.list
        }
        console.log(this.arr)
      }).catch(err=>{
        console.log(err)
      })
    }
    
  },
  mounted() {
    this.getData();
    new BScroll(this.$refs.container, {
      scrollX: true,
      click: true
    });
    //页面已加载获取购物车数据
    this.$api.postcar_data(this.id).then(res=>{
        if(res.code===200){
          this.$store.commit("setName", res.shopList.length)
        }
        // console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.top {
  display: flex;
  background-color: white;
  position: fixed;
  z-index: 5;
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
.recommends {
  background-color: white;
  border-top: 1px solid white;
}
.recommend_1 {
  display: flex;
  display: flex;
  flex: 1;
  border-top: 1px solid #eee;
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
  background-color: rgb(233, 233, 23);
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
.recommend {
  display: flex;
  overflow: hidden;
  background-color: #fff;
}
.search{
  margin: 10px;
}
</style>