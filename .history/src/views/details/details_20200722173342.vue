<template>
  <div>
    <div></div>
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
</style>