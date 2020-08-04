<template>
  <div>
    <div>{{goods.amount}}</div>
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
      goods:''
    };
  },
  methods: {},
  mounted() {
    this.id = "d0fabe0c966043cb8313fa55de9c555b";//this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then(res => {
          this.goods=res.goods
        console.log(res);
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