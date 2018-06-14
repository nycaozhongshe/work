<!--  -->
<template>
  <div>
    <img-list title="才艺展示"
              :list="showList"></img-list>
  </div>
</template>

<script>
import imgList from "./img-list"
let showList =[
  "show1.jpg",
  "show2.jpg",
  "show3.jpg",
  "show4.jpeg",
  "show5.jpg",
  "show6.jpg",
  "show7.jpg",
  "show8.jpg",
  "show9.jpg",
]
export default {
  data () {
    return {
      showList
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
