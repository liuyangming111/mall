<template>
  <div>
    <div class="car">购物车</div>
    <div v-if='shopList.length===0'>  
      <div class="carr"><img src="../../../img/shop.png" alt /></div>
      <div class="carrr">你的购物车还是空的</div>
      <div class="carrrr" @click="shopping">去购物</div>
    </div>
    <div v-for="(item,index) in shopList" :key="index" class="commodity" v-else>
       <van-checkbox v-model="checked">复选框</van-checkbox>
      <div class="border"><img :src="item.image_path" alt width="100px" /></div>
      <div class="Prices">
        <div>{{item.name}}</div>
        <div>
            <div class="Price">￥{{item.mallPrice}}</div>
            <div class="count"> <van-stepper v-model="value" /></div>
        </div>
      </div>
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      shopList: "",
      value: 1,
    };
  },
  methods: {
    shopping() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.$api
      .postcar_data({})
      .then((res) => {
        this.shopList = res.shopList;
        console.log(this.shopList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped >
.car {
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
.carr {
  text-align: center;
  margin: 30px auto;
  width: 170px;
  height: 170px;
  background-color: rgb(229, 226, 226);
  border-radius: 50%;
}
.carr img {
  margin-top: 30px;
  width: 70%;
}
.carrr {
  text-align: center;
  font-size: 18px;
  color: #999;
}
.carrrr {
  width: 120px;
  height: 40px;
  border: solid 2px #999;
  text-align: center;
  line-height: 40px;
  margin: 30px auto;
  border-radius: 20px;
}
.commodity {
  display: flex;
  position: relative;
}
.border{
    border: 2px solid #eee;
    margin: 10px 10px 0 10px;
}
.Prices{
    margin: 20px 0 0 20px;
}
.Prices>div:nth-child(1){
    width:200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.Prices>div:nth-child(2){
    display: flex;
}
.Price{
    color: red;
    margin-top: 30px;
}
.count{
    position: absolute;
    top: 70px;
   right: 40px;
}
</style>