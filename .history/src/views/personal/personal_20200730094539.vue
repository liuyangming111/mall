<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="personal">个人资料</div>
   <!-- <van-cell-group>
      <van-field v-model="userInfo.nickname"/>
      <div class="head_portrait">
        <div>头像</div>
        <div></div>
        <div><van-icon name="arrow" /></div>
      </div>
      <van-field v-model="userInfo.username" disabled label="用户名" placeholder="请更改您的用户名" />
      <van-field v-model="userInfo.nickname" label="昵称" placeholder="请更改您的昵称" />
      <van-field v-model="userInfo.gender" label="性别" placeholder="请更改您的性别" />
      <van-field v-model="arr" label="出生年月" placeholder="请更改您的出生年月" />
    </van-cell-group><br><br>-->
    <div class="preservations"><van-button type="primary" class="preservation" @click="preservation" >保存</van-button></div>
    <div class="preservations"><van-button class="preservation" @click="cancel" >取消</van-button></div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      userInfo: {},
      arr:''
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    cancel(){
      this.$router.go(-1);
    },
    preservation(){
      this.$api.postsaveUser({
        gender: this.userInfo.gender,
        year: this.userInfo.year,
        month: this.userInfo.month,
        day: this.userInfo.day,
        id:this.userInfo.id,
        nickname: this.userInfo.nickname
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.$api.postqueryUser().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    // this.arr = `${this.userInfo.year}年${this.userInfo.month}月${this.userInfo.day}日`
    // console.log(this.arr)
  },
  watch: {},
  computed: {},
};
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
.personal {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.preservations{
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.preservation{
  width: 80%;
}
.head_portrait{
  display: flex;
}
.head_portrait div:nth-child(1){
  margin: 20px;
}
.head_portrait div:nth-child(2){
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  background-image: url('../../../img/tx.jpg');
  background-size: 100% 100%;
  margin-left: 180px;
}
.head_portrait div:nth-child(3){
  color: #999;
  margin: 20px;
}
</style>