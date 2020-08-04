<template>
  <div>
    <div class="Hot_sale">{{name}}</div>
    <div class="Hot_sale1">
        <div v-for="(item, index) in hotGoods" :key="index">
            <div><img :src="item.image" alt=""></div>
            <div></div>
        </div>
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

<style scoped>
.Hot_sale{
    text-align: center;
    margin: 10px 0;
    color: red;
}
.Hot_sale1{
    display: flex;
    flex-wrap: wrap;
}
.Hot_sale1>div{
    width: 50%;
}
.Hot_sale1 img{
    width: 100%;
}
</style>