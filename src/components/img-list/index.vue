<!--  -->
<template>
  <div class="img_list">
    <div class="title_wrapper">
      <span class="title">{{title}}</span>
    </div>
    <div class="img-item_wrapper">
      <div class="img-item"
           v-for="(o) in list"
           :key="o">
        <img :src="src(o)"
             class="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["title","list"],
  data() {
    return {};
  },

  components: {},

  computed: {
  },

  mounted() {

  },

  created() {},

  methods: {
    src(item){
      return  require(`../../../static/img/white.jpg`)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
