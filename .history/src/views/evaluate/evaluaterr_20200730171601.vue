<template>
 <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="evaluate">评价中心</div>
    <div>
       <div><img src="" alt=""></div>
       <div></div>
       <div></div>
    </div>
    <van-rate v-model="evaluateOne.rate" disabled disabled-color="red"/>
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
         id:'',
         _id:'',
         evaluateOne:[]
     }
   },
   methods: {
       returns() {
      this.$router.go(-1);
    },
   },
   mounted() {
       this.id=this.$route.query.id,
       this._id=this.$route.query._id,
    //    console.log(this.id)
       this.$api.postevaluateOne({
            id:this.id,
            _id:this._id
       }).then(res=>{
           if(res.code===200){
               this.evaluateOne=res.evaluateOne
           }
           console.log(this.evaluateOne)
       }).catch(err=>{
           console.log(err)
       })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.return {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
}
.evaluate {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
</style>