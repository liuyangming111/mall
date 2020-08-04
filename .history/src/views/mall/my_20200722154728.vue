<template>
  <div>
    <div class="member">会员中心</div>
    <div class="information">
      <div class="head_portrait"></div>
      <div class="login" @click="clickbtn">登录/注册</div>
    </div>
    
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
    <div class="Icon_2">
      <div>
        <div>
          <van-icon name="shrink" />全部订单
        </div>
        <div>&gt;</div>
      </div>
      <div>
        <div>
          <van-icon name="star-o" />收藏商品
        </div>
        <div>&gt;</div>
      </div>
      <div>
        <div>
          <van-icon name="location-o" />地址管理
        </div>
        <div>&gt;</div>
      </div>
      <div>
        <div>
          <van-icon name="eye-o" />最近浏览
        </div>
        <div>&gt;</div>
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
  methods: {
    clickbtn() {
      this.$router.push("/login");
    }
  },
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
.Icon {
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0;
}
.Icon_1 {
  font-size: 20px;
  margin-left: 10px;
}
.Icon_2 > div {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.Icon_2 > div > div:nth-child(1) {
  margin-left: 20px;
}
.Icon_2 > div > div:nth-child(2) {
  font-size: 20px;
  color: #999;
  margin-right: 20px;
}
</style>