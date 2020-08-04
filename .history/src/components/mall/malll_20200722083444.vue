<template>
  <div>
    <div class="floor1"><span class="floor1_1">1F</span>{{floorName.floor1}}</div>
    <div>
        <div v-for="(item, index) in floor1" :key="index">
            <div v-if="<img :src="item.image" alt="">"></div>
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
        floor1:[]
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
</style>