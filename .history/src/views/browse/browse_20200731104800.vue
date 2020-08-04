<template>
 <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="browse">最近浏览</div>
    <div v-for="(item, index) in browse" :key="index">
      <div><img :src="item.image" alt="" class="img"></div>
      <div>
        <div>{{item.name}}</div>
        <div>
          <div>{{item.present_price}}</div>
          <div>{{item.orl_price}}</div>
        </div>
      </div>
      <div></div>
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
.img{
  
}
</style>