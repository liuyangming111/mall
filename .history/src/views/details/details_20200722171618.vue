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
       this.$ap
   },
   watch: {

   },
   computed: {
       
   }
 }
</script>

<style scoped lang='scss'>

</style>