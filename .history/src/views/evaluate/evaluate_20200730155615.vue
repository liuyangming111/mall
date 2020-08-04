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
          <div v-for="(item, index) in list" in :key="index" class="list">
              <div><img :src="item.image_path" alt="" class="img_1"></div>
              <div class="name">
                <div>{{item.name}}</div>
                <div @click="evaluater"><van-icon name="chat-o" size="18px"/>&nbsp;评论晒单</div>
              </div>
          </div>
        </van-tab>
        <van-tab title="已评价">内容 2</van-tab>
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
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    evaluater(){
      this.@router.push({
        path:'/evaluater',
        query
      })
    }
  },
  mounted() {
    //  this.$api.getevaluate().then(res=>{
    //     console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   }),
    this.$api
      .getevaluates()
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
.evaluate {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.img {
  width: 100%;
}
.active{
  margin: 0 auto;
  width: 90%;
  position: relative;
  top: -20px;
}
.img_1{
  width: 100px;
  border: 1px solid #eee;
}
.list{
  display: flex;
}
.name div:nth-child(1){
  margin: 10px 0 20px 20px;
}
.name div:nth-child(2){
  width: 100px;
  color: red;
  border: 1px solid red;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-radius: 15px;
  margin-left: 120px;
}
</style>