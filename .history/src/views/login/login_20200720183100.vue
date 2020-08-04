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

     }
   },
   methods: {
       register(){
           this.$api.postregister({
               nickname:this.nickname,
               password:this.password,
               verify:this.verify
           }).then((res =>{
               console.
           })).chart()
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