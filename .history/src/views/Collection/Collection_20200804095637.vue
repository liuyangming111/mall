<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="Collection">我的收藏</div>
    <div v-if="list.length==0" class="Collectionss">你没有收藏宝贝哦，亲~~</div>
    <div v-for="(item,index) in list" :key="index" v-else >
      <div class="box">
        <div>
          <img :src="item.image_path" alt class="img"  @click="$toDetails(item.cid)"/>
        </div>
        <div class="box1">
          <div>{{item.name}}</div>
          <div>￥{{item.present_price}}</div>
          <div @click="cancel(item,index)">
            <van-icon name="close" />
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
      list: [],
      id: "",
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    //删除最近收藏，发请求，传id
    cancel(item, index) {
      this.id = item.cid;
      this.$api
        .postCollectionss({
          id: this.id,
        })
        .then((res) => {
          this.$toast(res.msg);
          console.log(res);
          //发get请求数据，重新渲染
          this.$api
            .getCollectionList()
            .then((res) => {
              if (res.code === 200) {
                this.list = res.data.list;
              }
              console.log(this.list);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    
    this.$api
      .getCollectionList()
      .then((res) => {
        if (res.code === 200) {
          this.list = res.data.list;
        }
        console.log(this.list);
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
.Collection {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.img {
  width: 100px;
  border: 1px solid #eee;
  margin: 10px;
}
.box {
  display: flex;
}
.box1 {
  margin-top: 10px;
}
.box1 div:nth-child(2) {
  margin: 15px 0;
  color: red;
}
.box1 div:nth-child(3) {
  margin-left: 200px;
}
.Collectionss {
  text-align: center;
  color: #999;
  margin-top: 200px;
}
</style>