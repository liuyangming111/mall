<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="evaluate">评价中心</div>
    <div><img src="../../../img/evaluate.jpg" alt="" class="img"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list:[]
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
  },
  mounted() {
  //  this.$api.getevaluate().then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   }),
   this.$api.getevaluates().then(res=>{
     if(res.code===200){
       this.list=res.data.list
     }
      console.log(this.list)
    }).catch(err=>{
      console.log(err)
    })
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
.img{
  width: 100%;
}
</style>