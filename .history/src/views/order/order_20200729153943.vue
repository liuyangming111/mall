<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="order">我的订单</div>
    <van-tabs v-model="active">
      <van-tab title="全部" disabled>暂无</van-tab>
      <van-tab title="待支付" disabled>暂无</van-tab>
      <van-tab title="待发货" disabled>暂无</van-tab>
      <van-tab title="待收货" disabled>暂无</van-tab>
      <van-tab title="已完成">
        <div v-for="(item, index) in list" :key="index">
            <div>订单编号</div>
        
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 5,
      list:[]
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$api.getMyOrder().then(res=>{
      if(res.code===200){
        this.list=res.list
      }
      console.log(this.list)
    }).catch(err=>{
      console.log(err)
    })
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.return {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
}
.order {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
</style>