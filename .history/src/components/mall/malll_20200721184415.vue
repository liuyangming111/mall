<template>
  <div>
    <div class="floor1"><span class="floor1_1">1F</span>{{floorName.floor1}}</div>
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
        floorName:''
    };
  },
  methods: {
    getData() { 
      this.$api.gethome_page()
        .then(res => {
            this.floorName=res.data.floorName
            console.log(this.floorName)
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
    margin: 100px 0;
}
.floor1_1{
    border-radius: 50%;
    background-color: red;
    color: white;
}
</style>