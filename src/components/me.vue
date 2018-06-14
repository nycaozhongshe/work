<!--  -->
<template>
  <div>
    <img-list title="个人相册"
              :list="meList"></img-list>
  </div>
</template>

<script>
import imgList from "./img-list"
let meList =[
  "me1.jpg",
  "me2.jpeg",
  "me3.jpg",
  "me4.jpg",
  "me5.jpg",
  "me6.jpg",
  "me7.jpg",
  "me8.jpg",
  "me9.jpg",
  "me10.jpg",
  "me11.jpg",
  "me12.jpg",
  "me13.jpg",
  "me14.jpg",
  "me15.jpg",
  "me16.jpg",
  "me18.jpg",
  "me19.jpg",
  "me20.jpg",
  "me21.jpg",
]
export default {
  data () {
    return {
      meList
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
