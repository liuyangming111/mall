<template>
  <div>
    <div class="Hot_sale">{{name}}</div>
    <div v-for="(item, index) in hotGoods" :key="">
        <div><img :src="hotGoods.image" alt=""></div>
    </div>
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
    margin: 10px 0;
    color: red;
}
</style>