<template>
  <div>
    <div class="top">商品分类</div>
    <div class="top_1">
      <div>
        <van-sidebar v-model="activeKey" v-for="(item,index) in ">
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div class="top_2">
        <van-tabs v-model="activeName">
          <van-tab title="标签 1" name="a">内容 1</van-tab>
        
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeName: "a",
      activeKey: 0,
      category:'',
      bxMallSubDto:''
    };
  },
  methods: {
    getData() {
      this.$api
        .gethome_page()
        .then(res => {
          this.category = res.data.category;
          this.bxMallSubDto=re.data.category[0].bxMallSubDto
          // console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    },
    
  },
  mounted() {
     this.$api
        .gethome_page()
        .then(res => {
          this.category = res.data.category;
          console.log(this.category)
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
.top {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #999;
}
.top_1{
  display: flex;
}
.top_2{
  width: 80%;
}
</style>