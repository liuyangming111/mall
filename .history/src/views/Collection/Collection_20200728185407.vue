<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="Collection">我的收藏</div>
    <div v-for="(item,index) in list" :key="index">
      <div class="box">
        <div>
          <img :src="item.image_path" alt class="img" />
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
    <div>
      你没有收藏mei'c
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
    cancel(item, index) {
      this.id = item.cid;
      this.$api
        .postCollectionss({
          id: this.id,
        })
        .then((res) => {
          this.$toast(res.msg);
          console.log(res);
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
    //  this.id = this.$route.query.id;
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
</style>