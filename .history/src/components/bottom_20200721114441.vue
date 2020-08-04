<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" @click="mall">商城</van-tabbar-item>
      <van-tabbar-item icon="notes-o" @click="classification">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="Car">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="my">我的</van-tabbar-item>
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
        active: 0,
    };
  },
  methods: {
    mall(){
      this.$router.push('/mall')
    },
    mall(){
      this.$router.push('/mall')
    },
    mall(){
      this.$router.push('/mall')
    },
    mall(){
      this.$router.push('/mall')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>