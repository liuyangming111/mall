<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="personal">个人资料</div>
    <van-cell-group>
      <van-field v-model="userInfo.nickname"/>
      <div class="head_portrait">
        <div>头像</div>
        <div></div>
        <div></div>
      </div>
      <van-field v-model="userInfo.username" disabled label="用户名" placeholder="请更改您的用户名" />
      <van-field v-model="userInfo.nickname" label="昵称" placeholder="请更改您的昵称" />
      <van-field v-model="userInfo.gender" label="性别" placeholder="请更改您的性别" />
      <van-field v-model="userInfo.year" label="出生年月" placeholder="请更改您的出生年月" />
    </van-cell-group><br><br>
    <div class="preservations"><van-button type="primary" class="preservation" >保存</van-button></div>
    <div class="preservations"><van-button class="preservation" >取消</van-button></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(this.userInfo);
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
  width: 80px;
  height: 50px;
  border: 1px s;
}
</style>