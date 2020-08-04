<template>
  <div class="background">
    <div class="login_1">
      <h2>登录 / 注册</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: "",
      password: "",
      verify: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    //    register(){
    //        this.$api.postregister({
    //            nickname:this.nickname,
    //            password:this.password,
    //            verify:this.verify
    //        }).then((res)=>{
    //            console.log(res.)
    //        }).catch((err)=>{
    //        })
    //    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.background {
  width: 100%;
  height: 400px;
  background-image: url("../../../img/login.jpg");
  background-size: 100% 100%;
  border-top: 1px solid white;
  .login_1 {
    width: 90%;
    background-color: white;
    margin: 100px 20px;
    border-top: 1px solid white;
    h2 {
      margin: 20px;
    }
  }
}
</style>