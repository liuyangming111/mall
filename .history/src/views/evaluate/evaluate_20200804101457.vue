<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="evaluate">评价中心</div>
    <div>
      <img src="../../../img/evaluate.jpg" alt class="img" />
    </div>
    <van-tabs v-model="active" class="active">
      <van-tab title="待评价">
        <div v-if='list.length===0' class="nothing">暂时没有可评价的物品哦~~</div>
        <div v-for="(item, index) in list" in :key="index" class="list" v-else>
          <div>
            <img :src="item.image_path" alt class="img_1" />
          </div>
          <div class="name">
            <div>{{item.name}}</div>
            <div @click="evaluater(item)">
              <van-icon name="chat-o" size="18px" />&nbsp;评论晒单
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已评价">
        <div v-if='lists.length===0' class="nothing">暂时没有评价物品哦~~快快评论吧</div>
        <div v-for="(item, index) in lists" :key="index" v-else>
          <div v-for="(item1, index1) in item.goods" :key="index1" class="list">
            <div>
              <img :src="item1.image" alt class="img_1" />
            </div>
            <div class="names">
              <div>{{item1.name}}</div>
              <div @click="see(item,item1)">查看评价</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: [],
      active: 0,
      lists: [],
    };
  },
  methods: {
    //返回‘我的’页面
    returns() {
      this.$router.push("/my");
    },
    //跳转评论页，传id
    evaluater(item) {
      this.$router.push({
        path: "/evaluater",
        query: {
          id: item.cid,
        },
      });
    },
    //跳转查看评价页，传id,_id
    see(item, item1) {
      this.$router.push({
        path: "/evaluaterr",
        query: {
          id: item1.id,
          _id: item._id,
        },
      });
    },
  },
  mounted() {
    this.$api
      .getevaluates()
      .then((res) => {
        if (res.code === 200) {
          this.list = res.data.list;
        }
        // console.log(this.list);
      })
      .catch((err) => {
        console.log(err);
      });
    this.$api
      .getevaluate()
      .then((res) => {
        if (res.code === 200) {
          this.lists = res.data.list;
        }
        console.log(this.lists);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped>
.return {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  color: white;
}
.evaluate {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.img {
  width: 100%;
}
.active {
  margin: 0 auto;
  width: 90%;
  position: relative;
  top: -20px;
}
.img_1 {
  width: 100px;
  border: 1px solid #eee;
}
.list {
  display: flex;
}
.name div:nth-child(1) {
  margin: 10px 0 20px 20px;
}
.name div:nth-child(2) {
  width: 100px;
  color: red;
  border: 1px solid red;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-radius: 15px;
  margin-left: 120px;
}
.names div:nth-child(1) {
  margin: 10px 0 20px 20px;
}
.names div:nth-child(2) {
  width: 80px;
  color: #999;
  border: 1px solid #999;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-radius: 15px;
  margin-left: 120px;
}
.nothing{
  color: #999;
  text-align: center;
  margin-top: 100px;
}
</style>