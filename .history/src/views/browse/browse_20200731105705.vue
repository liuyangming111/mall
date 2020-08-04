<template>
 <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="browse">最近浏览</div>
    <div v-for="(item, index) in browse" :key="index" class="browses">
      <div><img :src="item.image" alt="" class="img"></div>
      <div>
        <div class="centen">{{item.name}}</div>
        <div class="Price">
          <div>￥{{item.present_price}}</div>
          <div><s>{{item.orl_price}}</s></div>
        </div>
      </div>
      <div class="delete"><van-icon name="close" /></div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {
     
   },
   data () {
     return {
       browse:[]
     }
   },
   methods: {
       returns() {
      this.$router.go(-1);
    },
   },
   mounted() {
     this.browse=JSON.parse(localStorage.getItem("browses"))
     console.log(this.browse)
   },
   watch: {

   },
   computed: {

   }
 }
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
.browse{
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.browses{
  display: flex;
}
.img{
  width: 100px;
  margin: 10px;
  border: 1px solid #eee;
}
.centen{
  margin: 10px 0;
  font-size: 14px;
  width: 1;
}
.Price{
  display: flex;
}
.Price>div:nth-child(1){
  color: red;
}
.Price>div:nth-child(2){
  margin: 3px 8px;
  color: #999;
}
.delete{
  margin: 50px 10px 0 0;
}
</style>