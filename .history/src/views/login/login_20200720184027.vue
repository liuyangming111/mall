<template>
 <div>
    12
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
       register(){
           this.$api.postregister({
               nickname:this.nickname,
               password:this.password,
               verify:this.verify
           }).then((res)=>{

           }).cht((err)=>{

           })
       }
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