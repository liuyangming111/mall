<template>
  <div>
    <div class="member">会员中心</div>
    <div class="information">
      <div class="head_portrait"></div>
      <div class="login">登录/注册</div>
    </div>
    <div class="Icon">
      <div>
        <van-icon name="balance-pay" class="Icon_1"/>
        <div>待付款</div>
      </div>
      <div>
        <van-icon name="logistics" class="Icon_1" />
        <div>待发货</div>
      </div>
      <div>
        <van-icon name="points" class="Icon_1" />
        <div>待收货</div>
      </div>
      <div>
        <van-icon name="good-job-o" class="Icon_1" />
        <div>评价</div>
      </div>
      <div>
        <van-icon name="like-o" class="Icon_1" />
        <div>已完成</div>
      </div>
    </div>
    <div class="Icon_2">
      <div>
        <div><van-icon name="shrink" />全部订单</div>
        <div>&gt;</div>
      </div>
      <div>
        <div><van-icon name="star-o" />收藏商品</div>
        <div>&gt;</div>
      </div>
      <div>
        <div><van-icon name="location-o" />地址管理</div><div>&gt;</div>
      </div>
      <div>
        <van-icon name="eye-o" />最近浏览<span>&gt;</span>
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
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0;
}
.Icon_1{
  font-size: 20px;
  margin-left: 10px;
}
.Icon_2 div{
  height: 40px;
  line-height: 40px;
}
</style>