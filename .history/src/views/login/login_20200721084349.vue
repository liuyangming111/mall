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

<style scoped>
.background{
    width: 100%;
    background-image: url('../../../img/login.jpg');
    .login_1{
        width: 90%;
        height: 200px;
        background-color: white;
        margin: 100px 10px;
    }
}
</style>