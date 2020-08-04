<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="address">地址列表</div>
    <div class="Not_yet" v-if="address.length==0">暂无收获地址哦~~</div>
    <div v-else>
      <van-address-list
        v-model="chosenAddressId"
        :list="address"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
    </div>
    <div class="bottom" v-if="address.length==0">
      <van-button type="danger" class="bottomr" @click="newly_added">新增地址</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      address: [],
      chosenAddressId: '1',
      id:''
    };
  },
  methods: {
    //返回上一页
    returns() {
      this.$router.go(-1);
    },
    //跳转新增地址路由
    newly_added() {
      this.$router.push("/edit");
    },
    //跳转新增地址路由
    onAdd() {
      this.$router.push("/edit");
      Toast('新增地址');
    },
    //编辑地址，传当前项，
    onEdit(item, index) {
      this.$router.push({
        path:('/editr'),
        query:{
          id:item._id,
          info: JSON.stringify(item)
        }
      })
      Toast('编辑地址:' + index);
    },
    select(item,index){
      this.chosenAddressId=item.id
        this.$router.push({
          path:'/settlement',
          query:{
            address: JSON.stringify(item)
          }
        })
    }
  },
  mounted() {
    this.$api
      .getAddress()
      .then((res) => {
        this.address = res.address;
        this.address.map((item,index)=>{
          this.$set(item, 'id', String(index + 1))
        })
        // console.log(this.address);
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
.address {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
.Not_yet {
  color: #999;
  text-align: center;
  margin-top: 200px;
}
.bottom {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}
.bottomr {
  width: 90%;
  border-radius: 20px;
}
</style>