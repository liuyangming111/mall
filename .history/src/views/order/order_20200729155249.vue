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
      <van-tab title="已完成" class="background">
        <div v-for="(item, index) in list" :key="index" class="backgrounds" >
            <div class="numbers">订单编号：{{item.order_id}}</div>
            <div>
              <div></div>
              <div></div>
              <div>￥{{item.order_list.name}}</div>
            </div>
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
      list:[],
      order_list:[]
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
        this.list.map(item=>{
          this.order_list=item.list.order_list
        })
      }
      console.log(this.order_list)
    }).catch(err=>{
      console.log(err)
    })
  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
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
.background{
  background-color: #eee;
}
.backgrounds{
  background-color: white;
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
}
.numbers{
  margin-left: 10px;
}
</style>