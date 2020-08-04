<template>
  <div>
    <div class="top">商品分类</div>
    <div class="top_1">
      <div>
        <van-sidebar v-model="activeKey" @change="change">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>
      <div class="top_2">
        <van-tabs v-model="activeName" @change="changer">
          <van-tab
            v-for="(item, index) in bxMallSubDto"
            :key="index"
            :title="item.mallSubName"
            name="a"
          ></van-tab>
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
      category: "",
      bxMallSubDto: [],
      dataList: [],
      arr: ""
      
    };
  },
  methods: {
    change(index) {
      this.$api
        .gethome_page()
        .then(res => {
          this.category = res.data.category;
          this.bxMallSubDto = this.category[index].bxMallSubDto;
          console.log(this.bxMallSubDto);
          
        })
        .catch(err => {
          console.log(err);
        });
    },
    changer(index) {
    
    }
  },
  mounted() {
    this.$api
      .gethome_page()
      .then(res => {
        this.category = res.data.category;
        console.log(this.category);
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
.top_1 {
  display: flex;
}
.top_2 {
  width: 80%;
}
</style>