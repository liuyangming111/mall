<template>
  <div class="background">
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="login_1">
      <h2>登录 / 注册</h2>
      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="用户名"
          label="用户名"
          placeholder="username"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field v-model="number" name="手机号码" label="手机号码" placeholder="仅注册需要" />
        <div class="message">
          <van-field v-model="message" name="短信验证码" label="短信验证码" placeholder="仅注册需要" />
          <van-button
            type="primary"
            class="messages"
          >发送验证码</van-button>
        </div>
        <div class="message">
          <van-field
            v-model="verify"
            name="验证码"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
          />
          <span v-html="verifys" @click="getData" style="margin-right: 15px;"></span>
        </div>
      </van-form>
      <van-button type="primary" style="margin:20px;" @click="postloginss">立即登录</van-button>
      <van-button type="danger" @click="register">立即注册</van-button>
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
      verify: "",
      verifys:'',
      number: "",
      message: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    getData() {
      this.$api.getverify()
        .then(res => {
          this.verifys=res
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    returns(){
      this.$router.push('/')
    }

       register(){
           this.$api.postregister({
               nickname:this.nickname,
               password:this.password,
               verify:this.verify
           }).then((res)=>{
             if (res.code=== 200) {
                localStorage.setItem("user", JSON.stringify(res));
                this.$toast.success(res.msg);
                this.$router.push('/')
             }else{
                this.$toast.fail(res.msg);
             }
               console.log(res)
           }).catch((err)=>{
              console.log(err);
           })
       },
       postloginss(){
           this.$api.postlogin({
               nickname:this.nickname,
               password:this.password,
               verify:this.verify
           }).then((res)=>{
             if (res.code=== 200) {
                localStorage.setItem("user", JSON.stringify(res));
                this.$toast.success(res.msg);
                this.$router.push('/')
             }else{
                this.$toast.fail(res.msg);
             }
               console.log(res)
           }).catch((err)=>{
              console.log(err);
           })
       }
  },
  mounted() {
    this.getData()
  },
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
    border: 1px solid #eee;
    h2 {
      margin: 20px;
    }
    .message {
      display: flex;
      .messages{
        margin-right: 10px;
        width:150px;
        height:40px
      }
    }
  }
}
</style>