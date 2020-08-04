<template>
  <div>
    <div class="car">购物车</div>
    <div v-if="shopList.length===0">
      <div class="carr">
        <img src="../../../img/shop.png" alt />
      </div>
      <div class="carrr">你的购物车还是空的</div>
      <div class="carrrr" @click="shopping">去购物</div>
    </div>
    <div v-else>
      <div class="Select_all">
        <van-checkbox v-model="checked" class="Select_alls" @click="changeAll">全选</van-checkbox>
        <div class="Select_allss">
          <div>
            合计：
            <span style="color:red">￥{{price | toFixed}}</span>
          </div>
          <div>请确认订单</div>
          <van-button type="warning" class="delete" @click="deletes">删除</van-button>
          <van-button type="warning" @click="settlement">去结算</van-button>
        </div>
      </div>
      <div v-for="(item,index) in shopList" :key="index" class="commodity">
        <van-checkbox v-model="item.check" class="checkbox" @change="changitem"></van-checkbox>
        <div class="border">
          <img :src="item.image_path" alt width="100px" />
        </div>
        <div class="Prices">
          <div>{{item.name}}</div>
          <div>
            <div class="Price">￥{{item.mallPrice}}</div>
            <div class="count">
              <div>+</div>
              <div>{{item.count}}</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      shopList: "",
      checked: false,
    };
  },
  methods: {
    shopping() {
      this.$router.push("/");
    },
    deletes() {
      let arr = [];
      this.shopList.map((item) => {
        if (item.check === true) {
          arr.push(item.cid);
        }
      });
      console.log(arr);
      this.$api
        .postdelete1(arr)
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }),
        this.$api
          .postcar_data({})
          .then((res) => {
            this.shopList = res.shopList;
            // console.log(this.shopList);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    changeAll() {
      this.shopList.map((item) => {
        item.check = this.checked;
      });
    },
    changitem() {
      this.checked = this.shopList.every((item) => {
        return item.check === true;
      });
    },
    number(item) {
      console.log(item.count);
      this.$api.postcommodity({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    settlement() {
      if (this.shopList.check === true) {
        this.$api.postcar_data()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.$api
      .postcar_data({})
      .then((res) => {
        this.shopList = res.shopList;
        // console.log(this.shopList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    price() {
      let sum = 0;
      this.shopList.map((item) => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    },
  },
  filters: {
    toFixed(val) {
      return Number(val).toFixed(2);
    },
  },
};
</script>

<style scoped >
.car {
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #999;
}
.carr {
  text-align: center;
  margin: 30px auto;
  width: 170px;
  height: 170px;
  background-color: rgb(229, 226, 226);
  border-radius: 50%;
}
.carr img {
  margin-top: 30px;
  width: 70%;
}
.carrr {
  text-align: center;
  font-size: 18px;
  color: #999;
}
.carrrr {
  width: 120px;
  height: 40px;
  border: solid 2px #999;
  text-align: center;
  line-height: 40px;
  margin: 30px auto;
  border-radius: 20px;
}
.Select_all {
  display: flex;
  justify-content: space-between;
}
.Select_alls {
  margin-left: 20px;
}
.Select_allss {
  margin: 20px 40px 0 0;
}
.delete {
  margin: 10px 10px;
}
.commodity {
  display: flex;
  position: relative;
}
.checkbox {
  margin-left: 10px;
}
.border {
  border: 2px solid #eee;
  margin: 10px 10px 0 10px;
}
.Prices {
  margin: 20px 0 0 20px;
}
.Prices > div:nth-child(1) {
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: red;
}
.Prices > div:nth-child(2) {
  display: flex;
}
.Price {
  color: red;
  margin-top: 30px;
}
.count {
  display: flex;
  position: absolute;
  top: 70px;
  right: 20px;
}
.count div{
  width: 30px;
  height: 30px;
  background-color: #eee;
  text-align: center;
  line-height: 30px;
  margin-left: 5px;
}
</style>