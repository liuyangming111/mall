<template>
  <div>
    <div class="member">会员中心</div>
    <div class="information">
      <div class="head_portrait"></div>
      <div v-if='nickname.lenth==0'>
        <div class="login" @click="clickbtn">登录/注册</div>
      </div>  
      <div v-else class="sign_out">
        <div>欢迎您：{{nickname.userInfo.nickname}}</div>  
        <div>退出登录</div>
      </div> 
    </div>
    <div @click="$Pop_up">
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
    <div class="Icon_2">
      <div @click="$Pop_up">
        <div>
          <van-icon name="shrink" /> 全部订单
        </div>
        <div>&gt;</div>
      </div>
      <div @click="$Pop_up">
        <div>
          <van-icon name="star-o" /> 收藏商品
        </div>
        <div>&gt;</div>
      </div>
      <div @click="$Pop_up">
        <div>
          <van-icon name="location-o" /> 地址管理
        </div>
        <div>&gt;</div>
      </div>
      <div @click="$Pop_up">
        <div>
          <van-icon name="eye-o" /> 最近浏览
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
    return {
      nickname:{}
    };
  },
  methods: {
    clickbtn() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.nickname=JSON.parse(localStorage.getItem('user'))
    console.log(this.nickname)
  },
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
.sign_out{
  margin: 0 auto;
}
</style>