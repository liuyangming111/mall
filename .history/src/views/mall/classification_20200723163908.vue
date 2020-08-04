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
        <van-tabs v-model="active" @click="clickbtn">
          <van-tab
            v-for="(item, index) in bxMallSubDto"
            :key="index"
            :title="item.mallSubName"
            
          >
          </van-tab>
        </van-tabs>
        <div v-for="(item,index) in arr" :key="index" class="center" @click="$toDetails(item.id)">
          <div><img :src="item.image" alt width="100px" /></div>
          <div>
              <div class="center1">{{item.name}}</div>
              <div><span class="center2">{{item.present_price}}</span><span><s>{{item.orl_price}}</s></span></div>
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
      active: 0,
      activeKey: 0,
      category: "",
      bxMallSubDto: [],
      dataList: [],
      arr: []
    };
  },
  methods: {
    change(index) {
      this.$api
        .gethome_page()
        .then(res => {
          console.log(res)
          this.category = res.data.category;
          this.bxMallSubDto = this.category[index].bxMallSubDto;
          this.dataList = this.bxMallSubDto[0].mallSubId;
          this.$api
            .getclassification(this.dataList)
            .then(res => {
              if (res.code === 200) {
                this.arr = res.dataList;
                // console.log(this.arr);
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickbtn(index) {
      this.dataList = this.bxMallSubDto[index].mallSubId;
      this.$api
        .getclassification(this.dataList)
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
      .gethome_page()
      .then(res => {
        this.category = res.data.category;
        this.bxMallSubDto = this.category[0].bxMallSubDto;
        this.dataList = this.bxMallSubDto[0].mallSubId;
        this.$api
          .getclassification(this.dataList)
          .then(res => {
            if (res.code === 200) {
              this.arr = res.dataList;
              console.log(this.arr);
            }
          })
          .catch(err => {
            console.log(err);
          });
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
.center{
  display: flex;
}
.center1{
  font-size: 14px;
  color: red;
  margin: 20px 0 20px 10px;
}
.center2{
  color: red;
  margin: 0 20px;
}
</style>