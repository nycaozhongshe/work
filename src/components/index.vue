<!--  -->
<template>
  <div class="home_wrapper">
    <div class="home-content_wrapper">

      <div class="tab_wrapper">
        <el-tabs type="border-card"
                 class="tab"
                 v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in tabList"
                       :key="index"
                       :label="item.label"
                       :name="item.name">

          </el-tab-pane>

        </el-tabs>
        <el-input class="input"
                  placeholder="请输入内容"
                  v-model="input23">
          <i slot="suffix"
             class="el-input__icon el-icon-search"
             @click="search"></i>
        </el-input>
      </div>

      <div class="banner_warpper">
        <div class="header-img__wrapper">
          <img src="../../static/img/logo.png"
               alt="">
        </div>
        <img src="../../static/img/banner.png"
             alt="">
      </div>
      <div class="content_wrapper">

        <el-card class="box-card position-card">
          <div slot="header"
               class="clearfix">
            <span>个人快讯</span>
          </div>
          <div v-for="item in flashList"
               :key="item"
               class="text item">
            {{ item }}
          </div>
        </el-card>

        <router-view>

        </router-view>
        <div class="footer__wrapper">
          <span v-for="(item, index) in tabList"
                :key="index">
            <span @click="handleClick(item)"
                  style="cursor:pointer">{{item.label}}</span>
            <span v-if="index<tabList.length-1">|</span>
          </span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
let tabList = [

  {
    label:"自我介绍",
    name:"introduction",
  },
   {
    label:"才艺展示",
    name:"show",
  },
    {
    label:"个人相册",
    name:"me",
  },
    {
    label:"个人作品",
    name:"works",
  },
    {
    label:"求职意向",
    name:"position",
  },
    {
    label:"母校风采",
    name:"shcool",
  },
    {
    label:"友情链接",
    name:"link",
  },
];

let flashList =[
  "xxx3月来济南实习",
  "xxx在济南吃到的小吃",
  "xxx6月份的济南实习就要结束",
  "xxx清明节是怎样度过的"
]
export default {
  data() {
    return {
      tabList,
      flashList,
      activeName:"",
      input23:""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  created() {
    this.activeName =this.tabList[0].name
  },

  methods: {
    handleClick(tab) {
      console.log(tab)
      this.$router.push(tab.name)
    },
    search(){
        this.$message.success('哈哈我还不能用');
    }
  }
};
</script>
<style lang='scss' scoped>
.home_wrapper {
  width: 100%;
  background-color: #f4ffeb;
  .home-content_wrapper {
    width: 1200px;
    margin: 0 auto;
  }
}

.header-img__wrapper {
  position: absolute;
  left: 20px;
  top: 4px;
  width: 106px;
  height: 106px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.tab_wrapper {
  display: flex;
  background: #68c529;
  justify-content: space-between;
  .tab {
    margin-left: 54px;
  }
  .input {
    width: 210px;
    margin-right: 74px;
    height: 36px;
    line-height: 36px;
  }
}
.banner_warpper {
  position: relative;
  img {
    width: 100%;
  }
}
.footer__wrapper {
  text-align: center;
  background-color: #68c529;
  color: #fff;
  height: 40px;
  line-height: 40px;
}
.position-card {
  position: fixed;
  top: 200px;
  right: 40px;
  width: 303px;
}
</style>
