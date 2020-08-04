<template>
  <div>
    <div class="member">会员中心</div>
    <div class="information">
      <div class="head_portrait"></div>
      <div v-if="user===null">
        <div class="login" @click="clickbtn">登录/注册</div>
      </div>
      <div v-else class="sign_out">
        <div>欢迎您：{{userInfo.nickname}}</div> <br />
        <div @click="sign_out">退出登录</div>
        <div class="set up"><van-icon name="setting" /></div>
      </div>
    </div>
    <div v-if="user===null" @click="$Pop_up">
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
    <div v-else>
      <van-grid :column-num="5">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待发货" />
        <van-grid-item icon="points" text="待收货" />
        <van-grid-item icon="good-job-o" text="评价" />
        <van-grid-item icon="like-o" text="已完成" />
      </van-grid>
    </div>
    <div v-if="user===null" @click="$Pop_up" class="Icon_2">
      <div>
        <div><van-icon name="shrink" />全部订单</div>
        <div>&gt;</div>
      </div>
      <div>
        <div><van-icon name="star-o" />收藏商品</div>
        <div>&gt;</div>
      </div>
      <div>
        <div><van-icon name="location-o" />地址管理</div>
        <div>&gt;</div>
      </div>
      <div>
        <div><van-icon name="eye-o" />最近浏览</div>
        <div>&gt;</div>
      </div>
    </div>
    <div v-else class="Icon_2">
      <div @click="order">
        <div><van-icon name="shrink" />全部订单</div>
        <div>&gt;</div>
      </div>
      <div @click="Collection">
        <div><van-icon name="star-o" />收藏商品</div>
        <div>&gt;</div>
      </div>
      <div @click="address">
        <div><van-icon name="location-o" />地址管理</div>
        <div>&gt;</div>
      </div>
      <div @click="browse">
        <div><van-icon name="eye-o" />最近浏览</div>
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
      userInfo: {},
      user:JSON.parse(localStorage.getItem('user'))
    };
  },
  methods: {
    clickbtn() {
      this.$router.push("/login");
    },
    sign_out(){
      this.$api.postloginOut().then(res=>{
        localStorage.removeItem('user');
        this.$toast.success(res.msg);
        this.$router.push('/login')
      }).catch(ree=>{
        console.log(ree)
      })
    },
    Collection(){
      this.$router.push('/Collection')
    },
    order(){
      this.$router.push('/order')
    },
    browse(){
      this.$router.push('/browse')
    },
    address(){
      this.$router.push('/address')
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    // console.log(this.userInfo);
  },
  watch: {},
  computed: {},
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
  color: white;
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
.sign_out {
  text-align: center;
  color: white;
}
</style>