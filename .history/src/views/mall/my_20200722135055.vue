<template>
 <div>
    <div class="member">会员中心</div>
    <div class="information">
        <div class="head_portrait"></div>
        <div class="">
            <span>登录</span>
            <span>/</span>
            <span>注册</span>
        </div>
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
.member{
  text-align: center;
  margin: 10px 0;
}
.information{
  background-color: violet;
  border: 1px solid white;
}
.head_portrait{
  margin: 20px auto;
  width: 80px;
  height:80px;
  border-radius: 50%;
  background-color: red;
}

</style>