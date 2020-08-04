<template>
 <div>
        {{id}}
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
         id:''
     }
   },
   methods: {
          
       
   },
   mounted() {
       this.id=this.$route.query.id
       this.$api.getdetails().then()
   },
   watch: {

   },
   computed: {
       
   }
 }
</script>

<style scoped lang='scss'>

</style>