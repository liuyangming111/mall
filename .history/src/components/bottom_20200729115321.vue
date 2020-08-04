<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="/" icon="wap-home-o" @click="mall">商城</van-tabbar-item>
      <van-tabbar-item name="/classification" icon="notes-o" @click="classification">分类</van-tabbar-item>
      <van-tabbar-item v-if="user===null" name="/Car" icon="shopping-cart-o" @click="Car">购物车</van-tabbar-item>
      <van-tabbar-item v-else name="/Carr" icon="shopping-cart-o" @click="Carr" :badge="5">购物车</van-tabbar-item>
      <van-tabbar-item name="/my" icon="friends-o" @click="my">我的</van-tabbar-item>
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
        user:JSON.parse(localStorage.getItem('user')),
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
    },
    Carr(){
      this.$router.push('/Carr')
    },
  },
  mounted() {
  },
  watch: {
    "$route.path": {
      handler(val) {
        // console.log("菜单：", val);
        this.active = val;	//val是路由跳转的path
      },
      immediate: true //立即执行
    }
},
  computed: {
    // shopList(){
    //   return this.$store.state
    // }
  } 
};
</script>

<style scoped lang='scss'>
</style>