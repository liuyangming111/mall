<template>
  <div class="background">
    <div class="login_1">
      <h2>登录 / 注册</h2>
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
  background-image: url("../../../img/login.jpg");
  background-size: 100% 100%;
  border-top: 1px solid white;
  .login_1 {
    width: 90%;
    background-color: white;
    margin: 100px 20px;
    
  }
}
</style>