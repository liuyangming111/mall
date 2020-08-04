<template>
  <div>
    <div class="top">商品分类</div>
    <div class="all">
      <div>
        <van-sidebar v-model="activeKey" @change="change">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        <an-sidebar>
      </div>
      <div>
        <van-tabs :ellipsis="false" @click="changex">
          <van-tab v-for="(item,index) in bxMallSubDto" :key="index" :title="item.mallSubName">
          <an-tab>
        <an-tabs>
        <div v-for="(item,index) in arr" :key="index" >
          <div class="imgs">
            <img :src="item.image_path" alt />
            <div>
              <div style="display:flex;padding:15px 0">{{item.name}}</div>
              <div style="display:flex">
                <h3>￥{{item.present_price}}</h3>
                <del style="color:red;margin-top:3px;margin-left:5px">{{item.orl_price}}</del>
              </div>
            </div>
          </div>
        </div>
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
      activeKey: 0,
      bxMallSubDto: [],
      category: [],
      dataList: "",
      arr: "",
      default:''
    };
  },
  methods: {
    change(index) {
      this.$api
        .gethomedata()
        .then(res => {
          this.category = res.data.category;
          this.bxMallSubDto = this.category[index].bxMallSubDto;
        })
        .catch(err => {
          console.log(err);
        });
    },

    changex(index) {
      this.dataList = this.bxMallSubDto[index].mallSubId;
      this.$api
        .getclass(this.dataList)
        .then(res => {
          if (res.code === 200) {
            this.arr = res.dataList;
            console.log(this.arr);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$api
      .gethomedata()
      .then(res => {
        this.category = res.data.category;
        this.bxMallSubDto = this.category[0].bxMallSubDto;
        console.log(this.bxMallSubDto);
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
  width: 100%;
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid gray;
}
.all {
  display: flex;
  > div:nth-of-type(2) {
    width: 80%;
  }
}
.imgs {
  width: 100%;
  display: flex;
  font-size: 10px;
  > img {
    width: 80px;
    height: 80px;
  }
}
</style>