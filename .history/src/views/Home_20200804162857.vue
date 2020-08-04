<template>
 <div>
    <div><router-view></router-view></div>
    <div><bottom></bottom></div>
 </div>
</template>

<script>
  import bottom from '../components/bottom'
 export default {
   name: '',
   props: {
   },
   components: {
     bottom
   },
   data () {
     return {
       mae
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

</style>