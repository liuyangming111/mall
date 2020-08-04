<template>
 <div>
     <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="Collection">我的收藏</div>
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
       returns() {
      this.$router.go(-1);
    },
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
  .top{
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
</style>