<template>
 <div>
     




    <br><br><br><br><br><br><br><br>
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
        getData() {
      this.$api
        .gethome_page()
        .then(res => {
          this.category = res.data.category;
          // console.log(this.category);
          this.slides = res.data.slides;
          // console.log(this.slides)
          this.advertesPicture = res.data.advertesPicture;
          // console.log(this.advertesPicture)
          this.recommend = res.data.recommend;
          // console.log(this.recommend)
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
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