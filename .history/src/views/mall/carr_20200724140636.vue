<template>
 <div>
    <div class="car">购物车</div>
    <div class="carr"><img src="../../../img/shop.png" alt=""></div>
    <div class="carrr">你的购物车还是空的</div>
    <div class="carrrr">去购物</div>
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

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.car{
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
.carr{
    text-align: center;
    margin: 30px auto;
    width: 170px;
    height: 170px;
        background-color: rgb(229, 226, 226);
        border-radius: 50%;
    img{
        margin-top: 30px;
        width: 70%;
    }
}
.carrr{
    text-align: center;
    font-size: 18px;
    color: #999;
}
.carrrr{
    width: 100px;
    height: 40px;
    border: solid 1px #999;
    text-align: center;
    lin
}
</style>