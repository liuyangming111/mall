<template>
 <div>
     <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="personal">个人资料</div>
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
       userInfo:{}
     }
   },
   methods: {
       returns() {
      this.$router.go(-1);
    },
   },
   mounted() {
     this.userInfo = JSON.parse(localStorage.getItem("user"));
     console.
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
.personal{
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
</style>