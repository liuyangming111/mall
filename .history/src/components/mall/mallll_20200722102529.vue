<template>
  <div>
    <div class="Hot_sale">{{name}}</div>
    <br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array
    },
    name: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.Hot_sale{
    text-align: center;
    ma
}
</style>