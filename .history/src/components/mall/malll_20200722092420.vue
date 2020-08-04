<template>
  <div>
    <div class="floor1"><span class="floor1_1">1F</span>{{floorName.floor1}}</div>
    <div class="food" v-if="floor1.length>0">
        <img :src="floor1[0].image" alt="">
        <div></div>
            <img :src="floor1[1].image" alt="" class="food1">
            <img :src="floor1[2].image" alt="">
        <img :src="floor1[3].image" alt="">
        <img :src="floor1[4].image" alt="">
    </div>
    <div class="floor1"><span class="floor1_1">2F</span>{{floorName.floor2}}</div>
    <div class="food">
        <div v-for="(item, index) in floor2" :key="index" class="food1">
            <img v-if="index===0" :src="item.image" alt="">
            <img v-else :src="item.image" alt="">
        </div>
    </div>
    <div class="floor1"><span class="floor1_1">3F</span>{{floorName.floor3}}</div>
    <div class="food">
        <div v-for="(item, index) in floor3" :key="index" class="food1">
            <img v-if="index===0" :src="item.image" alt="">
            <img v-else :src="item.image" alt="">
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        floorName:'',
        floor1:[],
        floor2:[],
        floor3:[]
    };
  },
  methods: {
    getData() { 
      this.$api.gethome_page()
        .then(res => {
            this.floorName=res.data.floorName
            // console.log(this.floorName)
            this.floor1=res.data.floor1
            // console.log(this.floor1)
            this.floor2=res.data.floor2
            this.floor3=res.data.floor3
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.floor1{
    color: red;
    text-align: center;
    margin: 10px 0;
}
.floor1_1{
    border-radius: 50%;
    background-color: red;
    color: white;
}
.food{
  display: flex;
  flex-wrap: wrap;
}
.food img{
  width: 50%;
}
.food1{
  height: 20px;
}
</style>