<template>
  <div>
    <div class="member">会员中心</div>
    <div class="information">
      <div class="head_portrait"></div>
      <div class="login">登录/注册</div>
    </div>
    <div>
      <div>
        <van-icon name="balance-pay" class="Icon"/>
        <div>待付款</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
.member {
  text-align: center;
  margin: 10px 0;
}
.information {
  background-color: violet;
  border: 1px solid white;
  height: 200px;
}
.head_portrait {
  margin: 20px auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url("../../../img/tx.jpg");
  background-size: 100% 100%;
}
.login {
  text-align: center;
  font-size: 18px;
}
.Icon{
  font-size: px;
  margin-left: 10px;
}
</style>