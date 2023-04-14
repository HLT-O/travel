<template>
  <div class="home">
    <!-- banner -->
    <el-carousel trigger="click" :height="cellphone ? '200px' : '500px'">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img class="banner" :src="item" alt="banner" />
        <div class="bannerT">
          <p class="title1">怡 途 之 旅</p>
          <p class="title2">定制自由行旗舰品牌</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索 -->
    <div class="searchBox">
      <p class="title">世 / 界 / 比 / 你 / 想 / 象 / 的 / 更 / 有 / 趣</p>
      <div class="search">
        <input type="text" />
        <p @click="toDestination('bannerId')">搜索</p>
      </div>
    </div>

    <!-- 定制 -->
    <div class="customization">
      <div class="textBox">
        <p style="color: #00cfbb">定制旅游</p>
        <p class="fs26">不跟团 超省心 有保障</p>
        <p>跟团？不自由</p>
        <p>自由行？太麻烦。</p>
        <p>有没有一种省心、自由、又不贵的旅行方式？</p>
        <p>这正是我们能为你做的</p>
        <router-link :to="{ path: '/customization',query:{name:'bannerId'}}"
          ><span class="but">了解定制旅游</span></router-link
        >
      </div>
      <div class="imgBox">
        <img src="../assets/home/dingzhilvxing.png" alt="" />
      </div>
    </div>

    <!-- 目的地 -->
    <div class="destination">
      <div class="titleBox">
        <p class="title">人气目的地</p>
        <span class="line"></span>
        <span class="subTitle">TOP DESTINATIONS</span>
        <span class="line"></span>
      </div>
      <div class="cardList">
        <div
          class="cardBox"
          v-for="(item, index) in destinationList"
          :key="index"
          @click="toDestination('bannerId')"
        >
          <div class="imgBox">
            <img :src="item.img" alt="目的地图片" />
          </div>
          <div class="textBox">
            <p class="title">{{ item.title }}</p>
            <p class="description">{{ item.description }}</p>
            <span class="place">出发地：任意</span>
            <span class="more">了解更多</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 客人晒图 -->
    <div id="saituId" class="guestImg">
      <div class="titleBox">
        <p class="title">客人晒图</p>
        <span class="line"></span>
        <span class="subTitle">CUSTIOMER'S PHOTO</span>
        <span class="line"></span>
      </div>
      <div class="imgList">
        <div class="imgBox" v-for="(item, index) in guestImgList" :key="index" @click="toCustomization('evaluateId')">
          <img :src="item" alt="客人晒图" />
        </div>
      </div>
    </div>

    <!-- 发现 -->
    <div class="imgVideo">
      <transition name="fade">
        <div v-show="!videoPlay" class="discover">
          <div class="mask"></div>
          <div class="textBox">
            <p class="emText">行走，会发现世界比想象的更有趣</p>
            <p class="emText">DISCOVER MORE</p>
            <p class="hide">
              26个目的地，65位旅行资深达人，110个热卖旅行的伙伴，数万游客。这里有全球旅行者、资深背包客、有旅行家、独立摄影师、有天马行空的设计师。
            </p>
            <p class="hide">
              我们在旅行和工作中获得梦想和鼓励，我们想告诉大家，生活不必只有房子和车子，远方还有更多的可能。走吧，带上心灵去旅行！
            </p>
          </div>
          <img
            src="../assets/home/bofang.png"
            alt="视频播放按钮"
            @click="play"
          />
        </div>
      </transition>
      <video
        v-show="videoPlay"
        muted="muted"
        class="video"
        src="../assets/home/video.mp4"
        type="video/mp4"
        poster="false.png"
        controls="controls"
        autoplay="autoplay"
        @ended="videoEnd"
      >
        <p>你的浏览器不支持video标签.</p>
      </video>
    </div>
  </div>
</template>

<script>
import store from "../store";
const video = document.querySelector("video");
export default {
  data() {
    return {
      videoPlay: false,
      cellphone: store.getters.cellphone,
      bannerList: [
        require("@/assets/banner/banner1.jpg"),
        require("@/assets/banner/banner2.jpg"),
        require("@/assets/banner/banner3.jpg"),
      ],
      destinationList: [
        {
          img: require("../assets/home/renqimudidi1.jpg"),
          title: "黔江热门景点爱丽丝庄园",
          description:
            "多少人去黔江是因为浪漫？徜徉在爱丽丝庄园，感受法式风情；多少人去黔江是因为解压？晚风、日落、古镇、蒲花暗河，简单……",
        },
        {
          img: require("../assets/home/renqimudidi2.jpg"),
          title: "最不能辜负的目的地",
          description:
            "多少人去黔江是因为浪漫？徜徉在爱丽丝庄园，感受法式风情；多少人去黔江是因为解压？晚风、日落、古镇、蒲花暗河，简单……",
        },
        {
          img: require("../assets/home/renqimudidi3.jpg"),
          title: "风雨廊长桥夜景",
          description:
            "多少人去黔江是因为浪漫？徜徉在爱丽丝庄园，感受法式风情；多少人去黔江是因为解压？晚风、日落、古镇、蒲花暗河，简单……",
        },
      ],
      guestImgList: [
        require("../assets/home/kerenshaitu1.jpg"),
        require("../assets/home/kerenshaitu2.jpg"),
        require("../assets/home/kerenshaitu3.jpg"),
        require("../assets/home/kerenshaitu4.jpg"),
        require("../assets/home/kerenshaitu5.jpg"),
        require("../assets/home/kerenshaitu6.jpg"),
      ],
    };
  },
  mounted() {
    this.getDestinationList();
    this.getGuestImgList();
  },
  updated(){
    if(this.$route.query.name){
        document.querySelector("#"+this.$route.query.name).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  },  
  methods: {
    toDestination(name = null) {
      this.$router.push({
        path: "/destination",
        query: {
          name
        },
      });
    },
    toCustomization(name = null) {
      this.$router.push({
        path: "/customization",
        query: {
          name
        },
      });
    },
    play() {
      this.videoPlay = true;
      video.play();
    },
    videoEnd() {
      setTimeout(() => {
        this.videoPlay = false;
      }, 200);
    },
    getDestinationList() {
      this.$request({
        methods: "GET",
        url: "/destinationList",
      }).then((res) => {
        this.destinationList = res.data.destinationList;
      });
    },
    getGuestImgList() {
      this.$request({
        methods: "GET",
        url: "/guestImgList",
      }).then((res) => {
        this.guestImgList = res.data.guestImgList;
        console.log(this.guestImgList);
      });
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.8;
}
.home {
  padding: 70px 0 0;
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
  text-align: center;
  color: #fff;
}
.bannerT .title1 {
  font-size: 60px;
}
.bannerT .title2 {
  font-size: 40px;
}
.searchBox {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.searchBox .title {
  color: #00cfbb;
  font-size: 24px;
}
.searchBox .search {
  margin: 20px 0;
  display: flex;
  width: 60%;
  height: 50px;
  border: #00cfbb 2px solid;
}
.searchBox .search input {
  width: 80%;
  border: 0;
  padding: 0 10px;
  outline: none;
  font-size: 20px;
  color: #00cfbb;
}
.searchBox .search p {
  width: 20%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #00cfbb;
  color: #fff;
}
.searchBox .search p:hover {
  background: #00b2a0;
}
.customization {
  width: 1000px;
  margin: 0 auto;
  display: flex;
}
.customization .textBox {
  flex-grow: 1;
  text-align: center;
  padding: 20px 0;
}
.customization .textBox p {
  font-size: 22px;
  color: rgb(98, 98, 98);
  margin: 10px 0;
}
.customization .textBox .fs26 {
  font-size: 26px;
}
.customization .textBox .but {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 30px;
  background: #00cfbb;
  border-radius: 99px;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.customization .textBox .but:hover {
  background: #00b2a0;
}
.destination {
  width: 1000px;
  margin: 50px auto;
}
.titleBox {
  text-align: center;
  color: #00cfbb;
}
.titleBox .title {
  font-size: 30px;
  margin-bottom: 10px;
}
.titleBox .line {
  display: inline-block;
  width: 100px;
  height: 2px;
  background: #00cfbb;
}
.titleBox .subTitle {
  margin: 0 20px;
}
.destination .cardList {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.destination .cardList .cardBox {
  width: 300px;
  margin: 10px;
}
.destination .cardList .cardBox .imgBox {
  width: 100%;
  overflow: hidden;
}
.destination .cardList .cardBox .imgBox img {
  height: 200px;
  transition: all 0.3s;
}
.destination .cardList .cardBox .imgBox img:hover {
  transform: scale(1.2, 1.2);
}
.destination .cardList .textBox {
  padding: 10px 10px;
  color: #b4b4b4;
  box-shadow: 10px 11px 21px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}
.destination .cardList .textBox p {
  margin: 10px 0;
}
.destination .cardList .textBox .title {
  font-size: 20px;
}
.destination .cardList .textBox .more {
  color: white;
  float: right;
  background: #00cfbb;
  padding: 0 10px;
  border-radius: 99px;
}
.guestImg {
  width: 1000px;
  margin: 50px auto;
}
.guestImg .imgList {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}
.guestImg .imgList .imgBox {
  width: 300px;
  height: 260px;
  margin: 10px 0;
  overflow: hidden;
}
.guestImg .imgList .imgBox img {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
}
.guestImg .imgList .imgBox img:hover {
  transform: scale(1.2, 1.2);
}
.imgVideo {
  position: relative;
  width: 100%;
  height: 600px;
}
.discover {
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("../assets/home/xingzou.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  overflow: hidden;
}
.discover .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.discover .textBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
.discover .textBox p {
  text-align: center;
  color: white;
}
.discover .textBox .emText {
  font-size: 30px;
  color: #00cfbb;
}
.discover .textBox .emText:nth-child(2) {
  margin-bottom: 50px;
}
.discover img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
}
@media screen and (max-width: 420px) {
  .home {
    padding: 40px 0 0;
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
    width: 40%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
  }
  .bannerT .title1 {
    font-size: 25px;
  }
  .bannerT .title2 {
    font-size: 16px;
  }

  .searchBox {
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .searchBox .title {
    color: #00cfbb;
    font-size: 16px;
  }
  .searchBox .search {
    margin: 20px 0;
    display: flex;
    width: 60%;
    height: 30px;
    border: #00cfbb 2px solid;
  }
  .searchBox .search input {
    width: 80%;
    border: 0;
    padding: 0 10px;
    outline: none;
    font-size: 16px;
    color: #00cfbb;
  }
  .searchBox .search p {
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #00cfbb;
    color: #fff;
  }
  .customization {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .customization .textBox {
    order: 1;
    flex-grow: 0;
    text-align: center;
    padding: 20px 0;
  }
  .customization .textBox p {
    font-size: 16px;
    color: rgb(98, 98, 98);
    margin: 10px 0;
  }
  .customization .textBox .fs26 {
    font-size: 20px;
  }
  .customization .textBox .but {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 30px;
    background: #00cfbb;
    border-radius: 99px;
    font-size: 14px;
    color: rgb(255, 255, 255);
  }
  .customization .imgBox {
    width: 90%;
    margin: 0 auto;
  }
  .customization .imgBox img {
    width: 100%;
  }

  .destination {
    width: 100%;
    margin: 50px auto;
  }
  .titleBox {
    text-align: center;
    color: #00cfbb;
  }
  .titleBox .title {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .titleBox .line {
    display: inline-block;
    width: 50px;
    height: 2px;
    background: #00cfbb;
  }
  .titleBox .subTitle {
    font-size: 14px;
    margin: 0 10px;
  }
  .guestImg {
    width: 100%;
    margin: 30px auto;
  }

  .guestImg .imgList .imgBox {
    width: 180px;
    height: 120px;
    margin: 10px 0;
  }
  .imgVideo {
    position: relative;
    width: 100%;
    height: 200px;
  }
  .discover {
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url("../assets/home/xingzou.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;
  }
  .discover .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .discover .textBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }
  .discover .textBox p {
    text-align: center;
    color: white;
  }
  .discover .textBox .emText {
    font-size: 18px;
    color: #00cfbb;
  }
  .discover .textBox .emText:nth-child(2) {
    margin-bottom: 50px;
  }
  .discover .textBox .hide {
    display: none;
  }
  .discover img {
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
