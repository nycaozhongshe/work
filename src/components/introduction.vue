<!--  -->
<template>
  <div class="introduction__wrapper">

    <div class="card__wrapper">

      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span class="title">自我介绍</span>
        </div>

        <div class="p">
          <span>
            姓名：xxx
          </span>
          <span>
            性别：x
          </span>
          <span>
            出生年月：xx年x月
          </span>
        </div>
        <div class="p">
          <span>毕业院校：xxxxxxxxxxxx</span>
          <span>电话：xxxxxxxxxxxxxx</span>
        </div>

        <div>
          1.在期间参与多校项社团活动，具备良好的团队合作和沟通能力，能够迅速融入集体，在参与团队任务时， 拥有足够的责任心；
          <br> 2.勤奋好学，喜好钻研，热爱集体，喜欢说话，对自我的控制能力特别强，爱拼博奋斗；
          <br> 3.工作态度认真，对待事情负责，在把握整体的同时，并时刻关注细节问题；
          <br> 4.为人真诚老实，乐于助人，善于交往，协调人际关系，谦虚谨慎，能从他人身上学习优点；
          <br> 5.本人热爱祖国，喜爱大自然，并且特别喜欢小动物，有同情心；
          <br> 6.性格开朗，喜欢打羽毛球，篮球，也很外出活动，喜欢业余时间投入课外实践活动中。
          <br>
        </div>
      </el-card>
    </div>

    <img-list title="个人相册"
              :list="meList"></img-list>
    <img-list title="个人作品"
              :list="worksList"></img-list>
  </div>
</template>

<script>
import imgList from "./img-list"

let meList =[
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png",
]

let worksList =[
  "photo6.png",
    "photo7.png",
    "photo8.png",
    "photo9.png",
    "photo10.png",
]
export default {
  data() {
    return {
      meList,
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
};
</script>
<style lang='scss' scoped>
.card__wrapper {
  padding: 40px 138px;
  background: #fff;
  .el-card__header {
    text-align: center;
  }
}
</style>
