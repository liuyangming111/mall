<template>
 <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="evaluate">评价中心</div>
    <div class="information">
       <div class="head_portrait"></div>
       <div>
          <div v-if='user.length>0'>{{user[0].nickname}}</div>
          <div class="score"><van-rate v-model="evaluateOne.rate" disabled disabled-color="red"/></div>
       </div>
       <div>{{evaluateOne.comment_time}}</div>
    </div>
    <div class="center">评价内容：{{evaluateOne.content}}</div>
    <div v-if="goods.length>0" class="cente">
        <div><img :src="goods[0].image" alt="" class="img"></div>
        <div>{{goods[0].name}}</div>
        <div class="Cart"  @click="$Cart(goods[0].id)"><van-icon name="shopping-cart-o" size="20px"/></div>
    </div>
    <div class="retur"><van-button type="primary" class="returer" @click="returns">返回</van-button></div>
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
         evaluateOne:[],
         user:[],
         goods:[]
     }
   },
   methods: {
       returns() {
      this.$router.go(-1);
    },
   },
   mounted() {
       //jie's
       this.id=this.$route.query.id,
       this._id=this.$route.query._id,
    //    console.log(this.id)
       this.$api.postevaluateOne({
            id:this.id,
            _id:this._id
       }).then(res=>{
           if(res.code===200){
               this.evaluateOne=res.evaluateOne
               this.user=res.evaluateOne.user
               this.goods=res.evaluateOne.goods
           }
           console.log(this.goods)
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

<style scoped>
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
.head_portrait{
    width: 60px;
    height: 60px;
    background-image: url('../../../img/tx.jpg');
    background-size: 100% 100%;
    border-radius: 50%;
}
.information{
    display: flex;
}
.information>div:nth-child(1){
    margin: 10px;
}
.information>div:nth-child(2){
    margin: 15px 0;
}
.score{
    margin-top: 10px;
}
.information>div:nth-child(3){
    margin: 30px 5px 0 20px;
    color: rgb(107, 104, 104);
}
.center{
    margin: 10px;
}
.cente{
    display: flex;
    margin-top: 50px;
}
.cente div:nth-child(2){
    margin: 10px 0 0 5px;
}
.img{
    width: 80px;
}
.Cart{
    width: 40px;
    height: 40px;
    background-color: sandybrown;
    border-radius: 50%;
    text-align: center;
    line-height: 46px;
    color:rgb(247, 245, 245);
    margin: 20px 20px 10px 20px;
}
.retur{
    margin-top: 50px;
    width: 100%;
    text-align: center;
}
.returer{
    width: 90%;
}
</style>