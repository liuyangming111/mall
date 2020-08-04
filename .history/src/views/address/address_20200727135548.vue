<template>
 <div>
    <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="address">地址列表</div>
    <div class="Not_yet">暂无收获地址哦~~</div>
    <div class="bottom"><van-button type="danger" class="bottomr">新增地址</van-button></div>
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
.address{
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.Not_yet{
  color: #999;
  text-align: ;
}
.bottom{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
.bottomr{
  width: 90%;
  border-radius: 20px;
}
</style>