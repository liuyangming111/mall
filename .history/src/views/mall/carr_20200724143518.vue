<template>
  <div>
      <div class="car">购物车</div>
    <!--<div>  
      <div class="carr"><img src="../../../img/shop.png" alt /></div>
      <div class="carrr">你的购物车还是空的</div>
      <div class="carrrr" @click="shopping">去购物</div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        id:''
    };
  },
  methods: {
    shopping() {
      this.$router.push("/");
    },
  },
  mounted() {
      this.$api.postcar_data({}).then(res=>{
          console.log(res)
      }).catch(err=>{
          console.log(err)
      })
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.car {
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
.carr {
  text-align: center;
  margin: 30px auto;
  width: 170px;
  height: 170px;
  background-color: rgb(229, 226, 226);
  border-radius: 50%;
  img {
    margin-top: 30px;
    width: 70%;
  }
}
.carrr {
  text-align: center;
  font-size: 18px;
  color: #999;
}
.carrrr {
  width: 120px;
  height: 40px;
  border: solid 2px #999;
  text-align: center;
  line-height: 40px;
  margin: 30px auto;
  border-radius: 20px;
}
</style>