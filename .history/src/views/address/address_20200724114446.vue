<template>
 <div>
    <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="address">地址列表</div>
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

<style scoped lang='scss'>

</style>