<template>
      <div class="serve">
      <p class="STitle">一次性自由的费用=品质旅行</p>
      <p class="STitle" style="color: #00cfbb">专业团队+全程服务</p>
      <div class="SContainer">
        <div class="serveList" v-for="(serve, index) in serveList" :key="index">
          <img :src="serve.img" alt="专业团队图片" />
          <div class="ITitle">
            {{ serve.title }}
          </div>
          <div class="description">
            <p v-for="(text, index) in serve.description" :key="index">
              {{ text }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            serveList: [
        {
          img: require("@/assets/serve/zhuanyetuandui1.png"),
          title: "专业全职定制团队",
          description: [
            "平均在当地生活2年以上，设计过500+条专属流程。不仅懂目的地，更懂如何自由行。",
          ],
        },
        {
          img: require("@/assets/serve/zhuanyetuandui2.png"),
          title: "专业旅行顾问团队",
          description: [
            "全程1v1跟进服务，不必自己操心行前准备。",
            "让你直接联系到人，而不是层层转接的客服电话。",
          ],
        },
        {
          img: require("@/assets/serve/zhuanyetuandui3.png"),
          title: "24h保障团队",
          description: [
            "服务过20w+客户，拥有丰富的紧急问题对应经验，出行24小时无时差服务，即时响应。",
          ],
        },
      ],
        }
    }
}
</script>

<style scoped>
.serve {
  padding: 50px 300px;
}
  .STitle {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
    .SContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.serveList {
  width: 30%;
}
.serveList img {
  margin-left: 50%;
  transform: translateX(-50%);
  height: 150px;
}
.ITitle {
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom left;
  background-size: 10px 40px;
  transition: all 0.6s;
}
.serveList:hover .ITitle {
  background-size: 100% 5px;
  /* background-position-x: right; */
}
.description {
  color: #adadad;
}

@media screen and (max-width: 420px) {
    .serve {
    padding: 30px 0;
  }
  .STitle {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}
  .SContainer {
    display: flex;
    justify-content: space-around;
    overflow:hidden;
  }
  .serveList img {
    margin-left: 50%;
    transform: translateX(-50%);
    height: 50px;
  }
  .ITitle {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
    background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom
      left;
    background-size: 10px 40px;
    transition: all 0.6s;
  }
  .serveList:hover .ITitle {
    background-size: 100% 5px;
    /* background-position-x: right; */
  }
  .description {
    font-size: 8px;
    color: #adadad;
  }
}
</style>