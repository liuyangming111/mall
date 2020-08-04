<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      
    };
  },
  methods: {},
  mounted() {
    this.id = "d0fabe0c966043cb8313fa55de9c555b";//this.$route.query.id;
    this.$api
      .getdetails(this.id)
      .then(res => {
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