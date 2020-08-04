<template>
  <div>
    <div class="Hot_sale">{{name}}</div>
    <div class="Hot_sale1">
        <div v-for="(item, index) in hotGoods" :key="index" @click="$toDetails(item.goodsId)">
            <div><img :src="item.image" alt=""></div>
            <div class="Hot_sale2">{{item.name}}</div>
            <div>
                <span class="Hot_sale3">{{item.mallPrice}}</span>
                <span><s style="color:red">{{item.price}}</s></span>
            </div>
        </div>
    </div>
    <br><br><br>
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
    width: 49.4%;
    background-color: white;
    border: 1px solid #eee;
    padding-bottom: 10px;
}
.Hot_sale1 img{
    width: 100%;
}
.Hot_sale2{
    text-align: center;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 10px;
}
.Hot_sale3{
    margin: 0 10px 0 60px;
}
</style>