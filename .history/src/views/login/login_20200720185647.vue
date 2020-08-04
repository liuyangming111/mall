<template>
 <div class="background">
    <div class="login_1">

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
.background{
    background-image: url('../../../img/login.jpg');
    .login_1{
        width: 80%;
        height: ;
    }
}
</style>