<!--  -->
<template>
  <div>
    <img-list title="个人作品"
              :list="worksList"></img-list>
  </div>
</template>

<script>
import imgList from "./img-list"
let worksList =[
  "photo6.png",
    "photo7.png",
    "photo8.png",
    "photo9.png",
    "photo10.png",
]
export default {
  data () {
    return {
      worksList
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
