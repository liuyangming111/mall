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
          点击收藏：
          <van-icon name="like" />
        </div>
        <div v-else>
          <div>
            <div @click="Collection" v-if="sum===0">
              点击收藏：
              <van-icon name="like" />
            </div>
            <div @click="cancel" v-if="sum===1">
              取消收藏：
              <van-icon name="like" class="cancel" />
            </div>
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
      <van-tab title="商品评论">
        <div v-for="(item, index) in comment" :key="index">
          <div class="time">
            <van-icon name="friends" color="red" size="20px"/>
            <van-rate v-model="item.rate" disabled disabled-color="#ffd21e"/>
            <div class="time">时间:{{item.comment_time}}</div>
          </div>
          <div>{{brr}}</div>
          <div>内容:{{item.content}}</div>
        </div>
      </van-tab>
      <br><br><br>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button v-if="user===null" type="warning" text="加入购物车" @click="$Pop_up" />
      <van-goods-action-button v-else type="warning" text="加入购物车" @click="$Cart(goodsOne.id)" />
      <van-goods-action-button type="danger" text="立即购买" @click="showPopup" />
    </van-goods-action>
    <van-popup
      v-model="show"
      position="bottom"
      closeable
      close-icon="close"
      :style="{ height: '40%'}"
    >
      <div style="display: flex; border-bottom:1px solid #eee">
        <img :src="goodsOne.image" alt class="images" />
        <div>
          <div class="Pricer">{{goodsOne.name}}</div>
          <div class="Price">￥{{goodsOne.present_price}}</div>
        </div>
      </div>
      <div style="display: flex;">
        <div class="number">
          <div>购买数量：</div>
          <div class="Limit">
            <div>剩余{{goodsOne.amount}}件</div>
            <div>每人限购50件</div>
          </div>
        </div>
        <div class="count">
          <div @click="reduce">-</div>
          <div>{{count}}</div>
          <div @click="plus">+</div>
        </div>
      </div>
      <van-button v-if="user===null" type="danger" class="purchase" @click="$Pop_up">立即购买</van-button>
      <van-button v-else type="danger" class="purchase" @click="showPopups">立即购买</van-button>
    </van-popup>
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
      goodsOne: {},
      active: 0,
      arr: [],
      images: [],
      user: JSON.parse(localStorage.getItem("user")),
      show: false,
      count: 1,
      sum: 0,
      comment:[],
      brr:''
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
    //点击收藏请求
    Collection() {
      this.$api
        .postcollection(this.goodsOne)
        .then((res) => {
          this.sum = 1;
          this.$toast(res.msg)
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //删除收藏请求
    cancel() {
      this.$api
        .postCollectionss({
          id:this.id
        })
        .then((res) => {
          this.sum = 0;
          this.$toast(res.msg)
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showPopup() {
      this.show = true;
    },
    plus() {
      if (this.count < 50) {
        this.count++;
      }
    },
    reduce() {
      if (this.count > 1) {
        this.count--;
      }
    },
    showPopups() {
      //发送去结算请求
      let arr = [];
      arr.push({
        name: this.goodsOne.name,
        count: this.count,
        present_price: this.goodsOne.present_price,
        image: this.goodsOne.image,
        id:this.id,
        idDirect:true
      });
      this.$router.push("/settlement");
      sessionStorage.setItem("rues", JSON.stringify(arr));
      // console.log(arr)
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then((res) => {
        this.goodsOne = res.goods.goodsOne;
        this.comment=res.goods.comment
        this.comment.map(item=>{
          if(item.anonymous===true){
            this.brr='匿名人士'
          }else{
            this.brr=item.user.nickname
          }
        })
        this.arr = [this.goodsOne.image, this.goodsOne.image_path];
        console.log(this.comment);
      })
      .catch((err) => {
        console.log(err);
      });
      //默认显示有没有收藏
    this.$api.postCollections({
        id:this.id
      }).then(res=>{
        if(res.code===200){
          this.sum=res.isCollection
        }
        // console.log(res)
      }).catch(err=>{
        console.log(err)
      })
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
.images {
  width: 100px;
  border: 1px solid #eee;
  margin: 10px;
}
.Pricer {
  margin: 30px 0 20px 10px;
}
.number {
  margin: 10px 20px;
}
.Limit {
  display: flex;
  margin-top: 10px;
  color: #999;
}
.Limit div:nth-child(2) {
  margin-left: 10px;
  color: red;
}
.count {
  display: flex;
  margin-top: 20px;
}
.count div {
  width: 30px;
  height: 30px;
  background-color: #eee;
  text-align: center;
  line-height: 30px;
  margin-left: 5px;
}
.purchase {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.cancel {
  color: red;
}
.time{
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
}
</style>