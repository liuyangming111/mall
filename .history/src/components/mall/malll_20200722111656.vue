<template>
  <div>
    <div>
      <div class="floor1">
        <span class="floor1_1">{{name}}</span>
        {{floorName}}
      </div>
      <div class="food" v-if="floor.length>0">
        <div>
          <img :src="floor[0].image" alt />
          <img :src="floor[1].image" alt />
        </div>
        <div>
          <img :src="floor[2].image" alt />
          <img :src="floor[3].image" alt />
          <img :src="floor[4].image" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    name: {
      type: String
    },
    floorName: {
      type: String
    },
    floor: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
.floor1 {
  color: red;
  text-align: center;
  margin: 10px 0;
}
.floor1_1 {
  border-radius: 50%;
  background-color: red;
  color: white;
}
.food {
  display: flex;
  flex-wrap: wrap;
}
.
.food img {
  width: 50%;
}

</style>