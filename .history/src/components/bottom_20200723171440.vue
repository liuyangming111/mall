<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item title="/" icon="wap-home-o" @click="mall">商城</van-tabbar-item>
      <van-tabbar-item title="/classification" icon="notes-o" @click="classification">分类</van-tabbar-item>
      <van-tabbar-item title="" icon="shopping-cart-o" @click="Car">购物车</van-tabbar-item>
      <van-tabbar-item title="" icon="friends-o" @click="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        active: '/',
    };
  },
  methods: {
    mall(){
      this.$router.push('/')
    },
    classification(){
      this.$router.push('/classification')
    },
    Car(){
      this.$router.push('/Car')
    },
    my(){
      this.$router.push('/my')
    }
  },
  mounted() {},
  watch: {"$route.path": {
      handler(val) {
        console.log("菜单：", val);
        this.selectTag = val;	//val是路由跳转的path
      },
      immediate: true //立即执行
    }
————————————————
版权声明：本文为CSDN博主「qq_42740797。」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42740797/java/article/details/107365623},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>