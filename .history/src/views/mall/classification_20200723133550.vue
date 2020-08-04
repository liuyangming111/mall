舒杨 2020/7/9 11:07:09


铭 2020/7/11 10:39:53


铭 2020/7/11 10:39:55


铭 2020/7/11 10:39:55


铭 2020/7/11 10:40:00


铭 2020/7/17 8:41:45
<template slot-scope="scope">
          <el-rate v-model="scope.row.star" disabled text-color="#ff9900"></el-rate>
        </template>

舒杨 2020/7/19 22:38:15
打游戏？

铭 2020/7/19 22:38:30
在打电话

舒杨 2020/7/19 22:38:54
路由守卫那个代码发给我下

铭 2020/7/19 22:42:34
你明天弄嘛，我这打电话，电脑没得网，还要共享网络，还得打游戏

铭 2020/7/19 22:43:22
路由守卫就两三行代码

舒杨 2020/7/19 22:46:16
嗯，明天我复制一下

铭 2020/7/19 22:46:30
好

铭 2020/7/20 8:24:38
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (to.path === '/logon' || to.path === '/register') {
    next()
  } else {
    user ? next() : (next('/logon') || next('/register'))
  }
})

舒杨 2020/7/20 12:03:32
走到哪儿了

舒杨 2020/7/20 12:04:11


铭 9:27:37


铭 9:27:58


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

