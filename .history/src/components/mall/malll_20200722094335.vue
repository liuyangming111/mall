<template>
  <div>
    <div class="floor1">
    <span class="floor1_1">
      {{}}
    </span>
    {{floorName.floor1}}</div>
    <div class="food" v-if="floor1.length>0">
        <img :src="floor[0].image" alt="">
        <img :src="floor[1].image" alt="" class="food1">
        <img :src="floor[2].image" alt="" class="food2">
        <img :src="floor[3].image" alt="">
        <img :src="floor[4].image" alt="">
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
  props: {

  },
  components: {},
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
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
  position: relative;
}
.food img{
  width: 50%;
}
.food1{
  height: 100px;
}
.food2{
  position: absolute;
  right: 0;
  top: 100px;
  height: 100px;
}
</style>