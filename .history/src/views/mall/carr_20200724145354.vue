<template>
  <div>
    <div class="car">购物车</div>
    <!--<div>  
      <div class="carr"><img src="../../../img/shop.png" alt /></div>
      <div class="carrr">你的购物车还是空的</div>
      <div class="carrrr" @click="shopping">去购物</div>
    </div>-->
    <div v-for="(item,index) in shopList" :key="index" class="commodity">
      <div><img :src="item.image_path" alt width="100px" /></div>
      <div class="Prices">
        <div>{{item.name}}</div>
        <div>
            <div class="Price">￥{{item.mallPrice}}</div><div>11</div>
        </div>
      </div>
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
      shopList: "",
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
}
.Prices{
    margin: 20px 0 0 20px;
}
.Prices>div:nth-child(2){
    display: flex;
}
.Price{
    color: red;
    margin: 20px 30px 0 3;
}
</style>