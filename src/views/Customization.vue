<template>
  <div class="customization">
    <!-- banner -->
    <el-carousel id="bannerId" trigger="click" :height="cellphone ? '200px' : '500px'">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img class="banner" :src="item" alt="banner" />
        <div class="bannerT">
          <p class="title1">定制旅行</p>
          <p class="title2">自由 省心 有品质</p>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 服务 -->
<ServeList id="serveId"></ServeList>
    <!-- 特色 -->
    <div class="feature">
      <p class="STitle">不跟团 才自由</p>
      <div>
        <Card
          v-for="(item, index) in featureList"
          :key="index"
          :cardContent="item"
          :cardIndex="index"
        ></Card>
      </div>
    </div>

    <!-- 保障 -->
    <div class="guarantee">
      <p class="STitle">有保障 更踏实</p>
      <div>
        <Card
          v-for="(item, index) in guaranteeList"
          :key="index"
          :cardContent="item"
          :cardIndex="index"
        ></Card>
      </div>
    </div>

    <!-- 团队 -->
    <div class="team">
      <p class="STitle">有保障 更踏实</p>
      <p class="STitle" style="color: #00cfbb;font-size: 18px;margin-bottom: 0px;">100+位资深专业定制师</p>
      <p class="STitle" style="color: #00cfbb;font-size: 18px;margin-bottom: 0px;">至少2年以上目的地生活经历</p>
      <p class="STitle" style="color: #00cfbb;font-size: 18px;margin-bottom: 0px;">懂旅行才能给你更好的旅行</p>
      <div class="teamList">
        <FigureCard v-for="(item , index) in teamList" :key="index" :cardContent="item"></FigureCard>
      </div>
    </div>

    <!-- 评价 -->
    <div id="evaluateId" class="evaluate">
      <p class="STitle">客户评价</p>
      <p class="STitle" style="color: #00cfbb;font-size: 18px;margin-bottom: 0px;">5年来，已有193615位客户选择怡途之旅</p>
      <p class="STitle" style="color: #00cfbb;font-size: 18px;margin-bottom: 0px;">定制旅行的感受，听听他们怎么说。</p>
      <div class="evaluateList">
        <EvaluateCard v-for="(item , index) in evaluateList" :key="index" :cardContent="item"></EvaluateCard>
      </div>
    </div>

    <div class="more" @click="getEvaluateList">查看更多</div>
  </div>
</template>

<script>
import store from "../store";
import Card from "@/components/Card.vue";
import FigureCard from "@/components/FigureCard.vue";
import EvaluateCard from "@/components/EvaluateCard.vue";
import ServeList from "@/components/ServeList.vue";

export default {
  components: {
    Card,
    FigureCard,
    EvaluateCard,
    ServeList
  },
  data() {
    return {
      cellphone: store.getters.cellphone,
      bannerList: [
        require("@/assets/banner/banner1.jpg"),
        require("@/assets/banner/banner2.jpg"),
        require("@/assets/banner/banner3.jpg"),
      ],
      featureList: [
        {
          img: require("../assets/customization/jiezou1.png"),
          text1: "想什么时候出发",
          text2: "就什么时候出发",
          text3: ["节奏，随你定"],
        },
        {
          img: require("../assets/customization/jiezou2.png"),
          text1: "不想走马观花",
          text2: "我想真正的旅游",
          text3: ["玩法，随你定"],
        },
        {
          img: require("../assets/customization/jiezou3.png"),
          text1: "可以睡到自然醒",
          text2: "也能暴走一整天",
          text3: ["节奏，随你定"],
        },
      ],
      guaranteeList: [
        {
          img: require("../assets/customization/baozhang1.png"),
          text1: "行程安排合理深度",
          text2: "让旅行不留遗憾",
          text3: ["100+位资深专业定制师","为您服务"],
        },
        {
          img: require("../assets/customization/baozhang2.png"),
          text1: "遇到问题有人管",
          text2: "才能放心自由行",
          text3: ["让旅行没有后顾之忧"],
        },
      ],
      teamList: [
        // {
        //   img: require("../assets/customization/dingzhituandui1.png"),
        //   name: "定制师 宋杉",
        //   title: "旅游,旅游,旅游",
        //   description:
        //     "他的相机里，有黔江各个景区的美照，一个爱幻想的人游走在了这里，只戴着耳机",
        // },
        // {
        //   img: require("../assets/customization/dingzhituandui2.png"),
        //   name: "定制师 宋杉",
        //   title: "旅游,旅游,旅游",
        //   description:
        //     "他的相机里，有黔江各个景区的美照，一个爱幻想的人游走在了这里，只戴着耳机",
        // },
        // {
        //   img: require("../assets/customization/dingzhituandui3.png"),
        //   name: "定制师 宋杉",
        //   title: "旅游,旅游,旅游",
        //   description:
        //     "他的相机里，有黔江各个景区的美照，一个爱幻想的人游走在了这里，只戴着耳机",
        // },
        // {
        //   img: require("../assets/customization/dingzhituandui4.png"),
        //   name: "定制师 宋杉",
        //   title: "旅游,旅游,旅游",
        //   description:
        //     "他的相机里，有黔江各个景区的美照，一个爱幻想的人游走在了这里，只戴着耳机",
        // },
      ],
      evaluateList: [
        // {
        //   img: require("../assets/customization/kehupingjia1.png"),
        //   EName: "ChongQing",
        //   name: "重庆",
        //   description:
        //     "我们已经回家了，谢谢你们的所有帮助，辛苦了你们真的太专业，对你们很佩服。旅游指南很全，中间的小插曲也能很好地帮我们搞定。下次自由行还需要你们！谢谢！",
        // },
        // {
        //   img: require("../assets/customization/kehupingjia2.png"),
        //   EName: "SiChuan",
        //   name: "四川",
        //   description:
        //     "我们已经回家了，谢谢你们的所有帮助，辛苦了你们真的太专业，对你们很佩服。旅游指南很全，中间的小插曲也能很好地帮我们搞定。下次自由行还需要你们！谢谢！",
        // },
        // {
        //   img: require("../assets/customization/kehupingjia3.png"),
        //   EName: "HuBei",
        //   name: "湖北",
        //   description:
        //     "我们已经回家了，谢谢你们的所有帮助，辛苦了你们真的太专业，对你们很佩服。旅游指南很全，中间的小插曲也能很好地帮我们搞定。下次自由行还需要你们！谢谢！",
        // },
      ],
    };
  },
  mounted(){
    
    this.getFeatureList()
    this.getGuaranteeList()
    this.getTeamList()
    this.getEvaluateList()
  },  
  updated(){
    if(this.$route.query.name){
        document.querySelector("#"+this.$route.query.name).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }
  }, 
  methods:{
    getFeatureList(){
      this.$request({
        methods:"GET",
        url:'/featureList'
      }).then(res=>{
        this.featureList = res.data.featureList
      })
    },
    getGuaranteeList(){
      this.$request({
        methods:"GET",
        url:'/guaranteeList'
      }).then(res=>{
        this.guaranteeList = res.data.guaranteeList
      })
    },
    getTeamList(){
      this.$request({
        methods:"GET",
        url:'/teamList'
      }).then(res=>{
        this.teamList = res.data.teamList
      })
    },
    getEvaluateList(){
      this.$request({
        methods:"GET",
        url:'/evaluateList'
      }).then(res=>{
        this.evaluateList = [...this.evaluateList,...res.data.evaluateList]
      })
    },
  }
};
</script>

<style scoped>
.customization {
  padding: 70px 0;
}
.banner {
  width: 100%;
  height: 100%;
  position: relative;
}
.bannerT {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 30%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #fff;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
.bannerT .title1 {
  font-size: 60px;
}
.bannerT .title2 {
  font-size: 40px;
}

.STitle {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}

.feature {
  padding: 30px 0;
  background: #f2f2f2;
}
.guarantee {
  padding: 30px 0;
}
.team {
  padding: 30px 0;
}
.teamList {
  display: flex;
  width: 1000px;
  justify-content: space-between;
  margin: 40px auto;
}
.evaluat {
  padding: 30px 0;
}
.evaluateList {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.more {
  width: 130px;
  height: 30px;
  line-height: 30px;
  color: #00cfbb;
  border: #00cfbb solid 2px;
  border-radius: 50px;
  margin: 0 auto;
  text-align: center;
}
@media screen and (max-width: 420px) {
  .customization {
    padding: 40px 0;
  }
  .banner {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .bannerT {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 35%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #fff;
    border-radius: 20px;
    text-align: center;
    color: #fff;
  }
  .bannerT .title1 {
    font-size: 25px;
  }
  .bannerT .title2 {
    font-size: 16px;
  }
  .STitle {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.team {
  padding: 20px 0;
}
.teamList {
  width: 100%;
  overflow: scroll;
  margin: 20px 0;
}
.evaluat {
  padding: 30px 0;
}
.evaluateList {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>
