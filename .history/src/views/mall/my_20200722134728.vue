<template>
 <div>
    <div class="member">会员中心</div>
    <div class="information">
        <div class="head_portrait"></div>
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
  margin: 10px ;
}
.information{
  background-color: violet;
}
.head_portrait{
  width: 80px;
  height:80px;
  border-radius: 50%;
  background-color: red;
}

</style>