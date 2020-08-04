<template>
  <div>
    <div class="return" @click="returns">
      <van-icon name="arrow-left" />
    </div>
    <div class="location">城市列表</div>
    <div class="background">
      <van-search v-model="value" placeholder="请输入搜索关键词" @input="search1" />
      <van-popup
        v-model="show"
        position="bottom"
        :overlay="false"
        duration="0"
        :style="{ height: '92%' }"
      >
        <div v-for="(item,index) in search" :key="index">{{item.name}}</div>
      </van-popup>
      <div class="current">当前城市</div>
      <div class="currentr">
        <div v-if="city">{{city}}</div>
        <div v-else>定位中···</div>
      </div>
      <div class="current">热门城市</div>
      <div class="hotCities">
        <div v-for="(item, index) in hotCities" :key="index">{{item.name}}</div>
      </div>
      <van-index-bar>
        <div v-for="(item,index) in cities" :key="index">
          <van-index-anchor :index="index" />
          <div v-for="(item1,index1) in item" :key="index1">
            <van-cell :title="item1.name" />
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import arr from "../../../city";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: "",
      value: "",
      arr: {},
      hotCities: [],
      cities: {},
      search: [],
      show:f
    };
  },
  methods: {
    returns() {
      this.$router.go(-1);
    },
    search1() {
      if (this.value === "") {
        this.search = [];
        return;
      }
      for (let i in this.cities) {
        if (
          i.toLocaleUpperCase() === this.value ||
          i.toLocaleLowerCase() === this.value
        ) {
          this.search = this.cities[i];
          console.log(this.search);
          return;
        }
      }
      let arr = [];
      for (let i in this.cities) {
        arr.push(this.cities[i]);
      }
      arr.map((item) => {
        item.map((item1) => {
          if (JSON.stringify(item1).indexOf(this.value) > -1) {
            this.search.push(item1);
          }
        });
      });
      console.log(this.search);
    },
  },
  mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        _this.city = data.addressComponent.city;
        // console.log(_this.city)
      }

      function onError(data) {
        // 定位出错
      }
    });
    this.hotCities = arr.data.hotCities;
    this.cities = arr.data.cities;
    console.log(this.cities);
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
.location {
  text-align: center;
  line-height: 46px;
  height: 46px;
}
.background {
  background-color: #eee;
}
.current {
  margin: 10px 15px;
}
.currentr {
  background-color: white;
  border: 1px solid white;
}
.currentr div {
  border: 1px solid #999;
  width: 100px;
  line-height: 30px;
  text-align: center;
  margin: 10px;
}
.hotCities {
  background-color: white;
  border: 1px solid white;
  display: flex;
  flex-wrap: wrap;
}
.hotCities div {
  border: 1px solid #999;
  width: 100px;
  line-height: 30px;
  text-align: center;
  margin: 10px;
}
</style>