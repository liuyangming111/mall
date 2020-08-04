<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="settlement">订单结算</div>
    <div class="add_to" @click="addressr" v-if="address=={}">
      <u>点击添加收货地址</u>
    </div>
    <div v-else>
      <br />
      <div class="harvest">
        <div>收货人：{{address.name}}</div>
        <div>{{address.tel}}</div>
      </div>
      <div style="display: flex;">
        <div class="location">
          <van-icon name="location-o" />
        </div>
        <div class="harvestr">收获地址：{{address.address}}</div>
        <div class="arrow" @click="harvestr">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="Inconvenience">（收获不便时,可选择免费待收货服务）</div>
    </div>
    <img src="../../../img/caitiao.jpg" alt style="width:100%" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      address:[],
      info:{},
      id:'',
      obj:{}
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    addressr() {
      this.$router.push("/address");
    },
    harvestr() {
      this.$router.push("/address");
    },
  },
  mounted() {
    this.id = this.$route.query.id
    this.info= JSON.parse(this.$route.query.info)
    console.log(this.info);
    this.$api
      .getAddress()
      .then((res) => {
        console.log(this.res.address)
        // this.address=res.address
        res.addressr.map((item)=>{
        if(item.isDefault===true){
              this.obj=item
              
        }
        })
        console.log(this.address);
      })
      .catch((err) => {
        console.log(err);
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
.settlement {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.add_to {
  text-align: center;
  margin: 30px 0;
}
.location {
  margin-left: 15px;
  font-size: 20px;
}
.harvest {
  display: flex;
  justify-content: space-around;
}
.harvestr {
  margin: 10px 0 10px 5px;
}
.Inconvenience {
  color: rgb(224, 224, 123);
  font-size: 14px;
  margin-left: 10px;
}
.arrow {
  margin-left: 60px;
  font-size: 20px;
}
</style>