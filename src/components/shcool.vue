<!--  -->
<template>
  <div>
    <img-list title="母校风采"
              :list="schoolList"></img-list>
  </div>
</template>

<script>
import imgList from "./img-list"
let schoolList =[
  "school1.jpg",
  "school2.jpg",
  "school3.jpg",
  "school4.jpg",
  "school5.jpg",
  "school6.jpg",
  "school7.jpg",
  "school8.jpg",
  "school9.jpg",
  "school10.jpg",
  "school11.jpg",
  "school12.jpg",
  "school13.jpg",
  "school14.jpg",
  "school15.jpg",
  "school16.jpg",
]
export default {
  data () {
    return {
      schoolList
    };
  },

  components: {
    imgList
  },

  computed: {},

  mounted() {},

  created() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
