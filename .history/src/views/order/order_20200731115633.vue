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
        <div>你暂没有购买的订单哦</div>
        <div v-for="(item, index) in list" :key="index" class="backgrounds" v-else>
          <div class="numbers">订单编号：{{item.order_id}}</div>
          <div v-for="(item1,index1) in item.order_list" :key="index1" class="cenete">
            <div>
              <img :src="item1.image_path" alt class="img" />
            </div>
            <div>{{item1.name}}</div>
            <div class="Price">
              ￥{{item1.mallPrice | toFixed}}
              <br />
              <span style="color:#999">
                <van-icon name="cross" size="10px" />
                {{item1.count}}
              </span>
            </div>
          </div>
          <div class="address">
            <div>创建时间:{{item.add_time}}</div>
            <div>收货地址:{{item.address}}</div>
            <div>共{{item.order_list.length}}件商品，合计：{{item.mallPrice | toFixed}}</div>
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
      list: [],
      order_list: [],
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$api
      .getMyOrder()
      .then((res) => {
        if (res.code === 200) {
          this.list = res.list;
        }
        console.log(this.list);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
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
.background {
  background-color: #eee;
  padding: 1px;
}
.backgrounds {
  background-color: white;
  width: 90%;
  margin: 20px auto;
  border-top: 1px solid white;
  border-radius: 10px;
  padding-bottom: 10px;
}
.numbers {
  margin: 10px;
}
.cenete {
  display: flex;
  border-bottom: 1px solid #eee;
}
.cenete > div:nth-child(2) {
  margin: 8px;
}
.img {
  width: 100px;
  border: 1px solid #eee;
}
.Price {
  margin: 10px 10px;
}
.address div {
  display: flex;
  justify-content: flex-end;
  margin: 10px 15px 0 0;
}
</style>