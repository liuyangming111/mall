<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="edit">编辑地址</div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import {Toast} from 'vant'
import areaList from "../../../area";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
      id:''
    };
  },
  methods: {
    //返回上一页
    returns() {
      this.$router.go(-1);
    },
    onSave(content) {
      //编辑地址完保存请求，
      this.$api
        .postaddress({
          name:content.name,
          tel:content.tel,
          address:content.province+content.city+content.county,
          isDefault:content.isDefault,
          province:content.province,
          city:content.city,
          county:content.county,
          addressDetail:content.addressDetail,
          areaCode:content.areaCode,
        })
        .then((res) => {
          this.$router.push('/address')
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        
      Toast("添加成功");
    },
    
  },
  mounted() {
      
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
.edit {
  text-align: center;
  line-height: 46px;
  height: 46px;
  border-bottom: 1px solid #999;
}
</style>