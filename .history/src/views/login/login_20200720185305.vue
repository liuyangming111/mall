<template>
 <div class="FullScreen">
    <van-button type="info">信息按钮</van-button>123
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
         nickname:'',
         password:'',
         verify:''
     }
   },
   methods: {
    //    register(){
    //        this.$api.postregister({
    //            nickname:this.nickname,
    //            password:this.password,
    //            verify:this.verify
    //        }).then((res)=>{
    //            console.log(res.)
    //        }).catch((err)=>{

    //        })
    //    }
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
.FullScreen{
    width: 100%;
    height: 100%;
    background-image: url('../../');
}
</style>