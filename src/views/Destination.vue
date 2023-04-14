<template>
  <div class="destination">
    <div id="bannerId" class="banner">
      <div class="searchBox">
        <el-input
          class="SInput1"
          v-model="search.destination"
          placeholder="请输入目的地"
          prefix-icon="el-icon-map-location"
        ></el-input>
        <el-date-picker
          class="SInput1"
          v-model="search.date"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
        <el-input
          class="SInput2"
          v-model="search.name"
          placeholder="姓名"
          prefix-icon="el-icon-user"
        ></el-input>
        <div class="but">确定</div>
      </div>
    </div>

    <div class="hot">
      <div class="DTitle">
        <span class="emText">当季热门 - </span>
        <span>Hot Season Tour</span>
      </div>
      <div class="cardBox" v-for="(item, index) in hotList" :key="index">
        <div class="imgBox" :class="[index % 2 == 0 ? '' : 'order1']">
          <img :src="item.img" alt="" />
        </div>
        <div class="textBox" :class="[index % 2 == 0 ? 'textRight' : '']">
          <p  :class="[index % 2 == 0 ? 'pTitle' : 'pTitleL']">{{ item.title1 }}<br />{{ item.title2 }}</p>
          <div>
            <p>{{ item.description1 }}</p>
            <p>{{ item.description2 }}</p>
            <p class="px">{{ item.description3 }}</p>
            <p class="px">{{ item.description4 }}</p>
            <p class="px">{{ item.description5 }}</p>
          </div>
          <div class="more" @click="toCustomization('')">了解更多</div>
        </div>
      </div>
    </div>

    <div class="thematic">
      <div class="DTitle">
        <span class="emText">主题旅游 - </span>
        <span>Thematic Travel</span>
      </div>
      <div class="imgList">
        <img
          style="width: 48%"
          src="../assets/destination/thematic1.png"
          alt="主题图片"
        />
        <img
          style="width: 48%"
          src="../assets/destination/thematic2.png"
          alt="主题图片"
        />
        <img
          style="width: 32%; margin-top: 10px"
          src="../assets/destination/thematic3.png"
          alt="主题图片"
        />
        <img
          style="width: 32%; margin-top: 10px"
          src="../assets/destination/thematic4.png"
          alt="主题图片"
        />
        <img
          style="width: 32%; margin-top: 10px"
          src="../assets/destination/thematic5.png"
          alt="主题图片"
        />
      </div>
    </div>

    <div class="preferential">
      <div class="DTitle">
        <span class="emText">特惠旅游 - </span>
        <span>Preferential Travel</span>
      </div>
      <div class="preferentialBox">
        <div class="imgBox">
          <img src="../assets/destination/tehuilvyou.jpg" alt="" />
        </div>
        <div class="textBox">
          <p class="pTitle">濯水2日游</p>
          <p class="subTitle">周游黔江 把好心情藏在风景里送你</p>
          <div>
            <p class="pd">民族风情城 - 官坝 - 小桥 - 马石角 - 玫瑰湾 - 北门 - 三台山 - 城市大峡谷 - 冯家 - 濯水 </p>
            <p>· 游览民族风情城，看其精致建筑与错落布局</p>
            <p>· 游览古村落，这里是土苗文化的积淀</p>
            <p>· 游览蒲花暗河</p>
          </div>
        </div>
        <div class="consult">
          <span @click="toCustomization('serveId')">免费咨询</span>
        </div>
      </div>
    </div>

    <div class="more" @click="toCustomization('serveId')">查看更多</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: {
        destination: "",
        date: "",
        name: "",
      },
      hotList: [
        {
          img: require("../assets/destination/dangjiremen1.png"),
          title1: "XiaoNanHai",
          title2: "小南海",
          description1: "小南海万种风情，景物甚为绮丽",
          description2: "小南海被评为最美景区之一",
          description3: "小南海万种风情，景物甚为绮丽",
          description4: "它还享有多种别称",
          description5: "是最佳旅游景点之一",
        },
        {
          img: require("../assets/destination/dangjiremen2.png"),
          title1: "BaLaHu",
          title2: "巴拉湖",
          description1: "小南海万种风情，景物甚为绮丽",
          description2: "小南海被评为最美景区之一",
          description3: "小南海万种风情，景物甚为绮丽",
          description4: "它还享有多种别称",
          description5: "是最佳旅游景点之一",
        },
      ],
    };
  },
  updated(){
    if(this.$route.query.name){
        document.querySelector("#"+this.$route.query.name).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  },
  methods:{
    toCustomization(name=null){
      this.$router.push({
        path:'/customization',
        query:{
          name
        }
      })
    }
  }
};
</script>
<style scoped>
.destination {
  padding: 70px 0;
}
.destination .banner {
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url("../assets/banner/banner2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.destination .banner .searchBox {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 50px; */
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
}
.SInput1 {
  width: 30%;
}
.SInput2 {
  width: 20%;
}
.but {
  width: 15%;
  height: 40px;
  line-height: 40px;
  background-color: #00cfbb;
  color: white;
  text-align: center;
  border-radius: 8px;
  margin-left: 20px;
}
.but:hover{
  background-color: #00b2a0;
}
.DTitle {
  font-size: 24px;
  color: rgb(100, 100, 100);
  text-align: center;
}
.DTitle .emText {
  color: #00cfbb;
}
.hot {
  margin-top: 20px;
}
.cardBox {
  margin: 20px auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;
}
.cardBox .imgBox {
  border: 2px solid #00cfbb;
  position: relative;
  width: 400px;
  height: 420px;
}
.order1 {
  order: 1;
}
.cardBox .imgBox img {
  position: absolute;
  top: 20px;
  left: 20px;
  transition: all 0.6s;
}
.cardBox:hover .imgBox img{
  transform: translate(-10px,-10px);
}
.cardBox .textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.textRight {
  text-align: right;
}
.cardBox .textBox p {
  font-size: 20px;
  color: #515151;
  margin-bottom: 10px;
}
.cardBox .textBox .pTitle {
  font-size: 22px;
  color: #00cfbb;
  background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom right;
  background-size: 100px 2px;
  padding: 10px 0;
  margin-bottom: 40px;
}
.cardBox .textBox .pTitleL {
  font-size: 22px;
  color: #00cfbb;
  background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom left;
  background-size: 100px 2px;
  padding: 10px 0;
  margin-bottom: 40px;
}
.cardBox .textBox .px {
  font-size: 16px;
  color: #9a9a9a;
  margin-bottom: 10px;
}
.cardBox .textBox .more {
  padding: 5px 20px;
  border: #00cfbb 1px solid;
  border-radius: 99px;
  text-align: center;
  color: #00cfbb;
  margin-top: 40px;
}
.cardBox .textBox .more:hover {
  color: white;
  background: #00cfbb;
}
.thematic{
  padding: 50px 0 0;
}
.thematic .imgList {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.thematic .imgList img{
  transition: all 0.3s;
}
.thematic .imgList img:hover{
  transform: scale(1.05);
}
.preferential{
  padding: 50px 0;
}
.preferentialBox{
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.preferentialBox .imgBox{
  width: 35%;
}
.preferentialBox .imgBox img{
  width: 100%;
}
.preferentialBox .textBox{
  width: 43%;
  padding: 10px 0;
}
.preferentialBox .textBox p{
  color: #7e7e7e;
  font-size: 14px;
}
.preferentialBox .textBox .pTitle{
  color: #00cfbb;
  font-size: 24px;
}
.preferentialBox .textBox .subTitle{
  color: #4f4f4f;
  font-size: 20px;
  margin-bottom: 30px;
}
.preferentialBox .textBox .pd{
  color: #626262;
  font-size: 16px;
  margin-bottom: 20px;
}
.preferentialBox .consult {
  width: 20%;
  position: relative;
}
.preferentialBox .consult span{
  padding: 5px 10px;
  background: #00cfbb;
  border-radius: 99px;
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.preferentialBox .consult span:hover{
  background: #00b2a0;
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
.more:hover{
  color: white;
  background: #00cfbb;
}
@media screen and (max-width: 420px) {
  .destination {
    padding: 40px 0;
  }
  .destination .banner {
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url("../assets/banner/banner2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
  .destination .banner .searchBox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    /* height: 50px; */
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.4);
  }
  .SInput1 {
    width: 48%;
  }
  .SInput2 {
    width: 48%;
  }
  .but {
    width: 48%;
    height: 40px;
    line-height: 40px;
    background-color: #00cfbb;
    color: white;
    text-align: center;
    border-radius: 8px;
    margin-left: 0;
    margin-top: 10px;
  }
  .DTitle {
    font-size: 18px;
    color: rgb(100, 100, 100);
    text-align: center;
  }

  .hot {
    margin-top: 20px;
    padding: 0 20px;
  }
  .cardBox {
    margin: 30px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .cardBox .imgBox {
    border: 2px solid #00cfbb;
    position: relative;
    width: 180px;
    height: 180px;
  }
  .order1 {
    order: 1;
  }
  .cardBox .imgBox img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 90%;
  }
  .cardBox .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .textRight {
    text-align: right;
  }
  .cardBox .textBox p {
    font-size: 12px;
    color: #515151;
    margin-bottom: 3px;
  }
  .cardBox .textBox .pTitle {
    font-size: 16px;
    color: #00cfbb;
    background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom
      right;
    background-size: 100px 2px;
    padding: 5px 0;
    margin-bottom: 10px;
  }
  .cardBox .textBox .px {
    font-size: 10px;
    color: #9a9a9a;
    margin-bottom: 3px;
  }
  .cardBox .textBox .more {
    padding: 5px 20px;
    border: #00cfbb 1px solid;
    border-radius: 99px;
    font-size: 12px;
    text-align: center;
    color: #00cfbb;
    margin-top: 8px;
  }
  .thematic {
    padding: 0 10px;
  }
  .thematic .imgList {
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .cardBox .textBox .pTitleL {
  font-size: 22px;
  color: #00cfbb;
  background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat bottom left;
  background-size: 100px 2px;
  padding: 10px 0;
  margin-bottom: 10px;
}
  .preferential{
  padding: 0 20px;
}
.preferentialBox{
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.preferentialBox .imgBox{
  width: 100%;
}
.preferentialBox .imgBox img{
  width: 100%;
}
.preferentialBox .textBox{
  width: 70%;
  padding: 10px 0;
}
.preferentialBox .textBox p{
  color: #7e7e7e;
  font-size: 10px;
}
.preferentialBox .textBox .pTitle{
  color: #00cfbb;
  font-size: 18px;
}
.preferentialBox .textBox .subTitle{
  color: #4f4f4f;
  font-size: 14px;
  margin-bottom: 20px;
}
.preferentialBox .textBox .pd{
  color: #626262;
  font-size: 12px;
  margin-bottom: 10px;
}
.preferentialBox .consult {
  width: 30%;
  position: relative;
}
.preferentialBox .consult span{
  padding: 5px 10px;
  background: #00cfbb;
  border-radius: 99px;
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  right: 0;
}
}
</style>

<style>
.el-input__inner {
  height: 40px;
  border: 0;
  outline: none;
  border-radius: 8px;
}
</style>
