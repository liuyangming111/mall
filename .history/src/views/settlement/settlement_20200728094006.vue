<template>
 <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="settlement">订单结算</div>
    <div class="add_to" @click="addressr"><u>点击添加收货地址</u></div>
    <div>
      <div><van-icon name="location-o" /></div>
      <div class="harvest">
        <div>收货人：{{defaultAdd.name}}</div>
        <div>{{defaultAdd.tel}}</div>
      </div>  
    </div>
    <img src="../../../img/caitiao.jpg" alt="" style="width:100%">
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
       defaultAdd:{},
     }
   },
   methods: {
       returns() {
      this.$router.go(-1);
    },
    addressr(){
        this.$router.push('/address')
    }
   },
   mounted() {
     this.$api.getDefaultAddress().then(res=>{
       //默认收获地址
       this.defaultAdd=res.defaultAdd
       console.log(this.defaultAdd)
     }).catch(err=>{
       console.log(err)
     })
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
.settlement {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.add_to{
    text-align: center;
    margin: 30px 0;
}
.harvest{
  d
}
</style>