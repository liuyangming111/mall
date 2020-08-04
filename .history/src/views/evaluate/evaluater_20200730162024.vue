<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="evaluate">评价中心</div>
    <div style="display: flex;">
      <div>
        <img :src="arr.image_path" alt class="img" />
      </div>
      <div class="evaluates">
        <div>商品评分</div>
        <br />
        <div>
          <van-rate v-model="rate" icon="like" void-icon="like-o" />
        </div>
      </div>
    </div>
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="100"
      placeholder="说说你购买的感受吧~~"
      show-word-limit
      class="message"
    />
    <van-checkbox v-model="checked" class="anonymous">匿名评价</van-checkbox>
    <div class="Submits">
      <van-button type="primary" class="Submit" @click="Submit">提交</van-button>
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
      rate: 0,
      message: "",
      checked: false,
      id: "",
      list:[],
      arr:[],
      brr:[]
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    Submit(){
        this.$api.postcomment({
            id: this.arr.cid,
            rate: this.rate,
            content: this.message,
            anonymous: this.checked,
            _id: this.arr._id,
            order_id:  this.arr.order_id,
            image:this.brr
        }).then(res=>{
            this.$router.push)()
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$api.getevaluates()
      .then((res) => {
        this.list=res.data.list
        this.list.map(item=>{
            if(this.id===item.cid){
                this.arr = item
            }
        })
        console.log(this.arr);
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
.message {
  background-color: #eee;
}
.anonymous {
  margin: 20px 10px;
}
.Submits {
  text-align: center;
}
.Submit {
  width: 90%;
  border-radius: 6px;
}
.img {
  width: 100px;
}
.evaluates {
  margin: 10px;
}
</style>