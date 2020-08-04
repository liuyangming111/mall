<template>
 <div>
    <div class="car">购物车</div>
    <div class="carr"><img src="../../../img/shop.png" alt=""></div>
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
    margin: 30px 0;
    width: 170px;
  height: 170px;
        background-color: rgb(192, 191, 191);
        border-radius: 50%;
    img{
    }
}
</style>