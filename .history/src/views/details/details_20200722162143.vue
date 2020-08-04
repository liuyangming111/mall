<template>
 <div>
        123
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
           this.$api.getdetails().then(res=>{
               console.log(res)
           }).catch(err=>{

           })
       
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