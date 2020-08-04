<template>
  <div>
    <div class="return"><van-icon name="arrow-left" /></div>
    <div>{{goodsOne.amount}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      goodsOne:''
    };
  },
  methods: {},
  mounted() {
    this.id = "d0fabe0c966043cb8313fa55de9c555b";//this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then(res => {
          this.goodsOne=res.goods.goodsOne
        console.log(this.goodsOne);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.return{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #999;
    text-align: center;
    line-height: 35px;
}
</style>