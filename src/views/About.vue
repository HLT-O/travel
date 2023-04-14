<template>
  <div class="about">
    <div class="banner"></div>
    <div class="profile">
      <div class="DTitle">
        <span class="emText">怡途简介 - </span>
        <span>YiTu Profile</span>
      </div>
      <div class="profileBox">
        <div class="textBox">
          <p class="title">怡途规模</p>
          <p class="eTitle">YiTu Size</p>
          <p>·定制自由旅行旗舰品牌</p>
          <p>·隶属于黔江独一之旅阿蓬江旅行社有限公司</p>
          <p>·个性化的定制服务</p>
          <p>·近百位拥有经验丰富专业旅行定制师</p>
          <p>·定制覆盖目的地已覆盖50多个地区</p>
          <p>·与43个省份及地区旅游局开展紧密合作</p>
        </div>
        <div class="rightBox">
          <div class="imgBox">
            <img src="../assets/about/jianjie.png" alt="" />
          </div>
          <p>
            怡途之旅，致力于为客户提供省心、自由、高性价比的自由行。至今，已经在全国范围内与旅行从业者展开合作，为传统旅行社提供自由行一站式解决方案：提供能够满足用户复杂需求的个性自由行产品；提供行程调整设计、预订落实、售后保障的全套服务，提供吸引年轻消费者的宣传物料。让客户玩得放心、玩得舒心、玩得尽兴，充分保障用户的旅行业务需求。
          </p>
        </div>
      </div>
    </div>

    <div class="achievement">
      <div class="DTitle">
        <span class="emText">我们的成就 - </span>
        <span>Our achievements</span>
      </div>
      <div class="achievementBox">
        <p>
          如今，已经有超过20万人通过怡途之旅定制了属于自己的旅行服务。有悄悄找定制师策划婚礼的甜蜜情侣，有坚持不跟团的蜜月旅行的听障夫妇，有想牵着彼此的手走天涯的花甲老人，还有更多像你我一样，只是想带着家人、恋人、朋友一起看世界，真正享受一次自在旅行的普通人。我们常常收到他们从世界各地寄来的明信片、信件、小礼物，每一份珍贵的心意都令我们幸福不已。这意味着我们真的帮他们享受到了自由行的乐趣，我们永远以此为荣。我们相信，旅行是有温度的。我们希望能够在这个总是冷冰冰的世界里，用我们的专业与热情，带给你一抹属于旅行的温度。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url("../assets/banner/banner5.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  overflow: hidden;
}
.DTitle {
  font-size: 24px;
  color: rgb(100, 100, 100);
  text-align: center;
}
.DTitle .emText {
  color: #00cfbb;
}
.profile {
  padding: 50px 0 0;
}
.profileBox {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  width: 1000px;
  margin: 30px auto;
}
.profileBox .textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.profileBox .textBox p {
  font-size: 16px;
  color: #686868;
  margin: 0 0 5px 30px;
}
.profileBox .textBox .title {
  font-size: 20px;
  color: #1b1b1b;
  margin: 0;
}
.profileBox .textBox .eTitle {
  font-size: 20px;
  color: #686868;
  margin: 10px 0 30px;
}
.profileBox .rightBox {
  width: 50%;
  background: #ededed;
}
.profileBox .rightBox .imgBox {
  width: 100%;
}

.profileBox .rightBox .imgBox img {
  width: 100%;
}
.profileBox .rightBox p {
  text-indent: 2em;
  padding: 5px;
  font-size: 14px;
}
.achievement{
  padding: 10px 0;
}
.achievementBox{
  width: 1000px;
  margin: 20px auto;
  background: #ededed;
}
.achievementBox p{
  font-size: 16px;
  line-height: 26px;
  padding: 10px 100px;
  color: #686868;
}
@media screen and (max-width: 420px) {
  .banner {
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url("../assets/banner/banner5.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    overflow: hidden;
  }
  .DTitle {
    font-size: 18px;
    color: rgb(100, 100, 100);
    text-align: center;
  }

  .profile {
    padding: 50px 10px 0;
  }
  .profileBox {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    width: 100%;
    margin: 30px auto;
  }
  .profileBox .textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .profileBox .textBox p {
    font-size: 16px;
    color: #686868;
    margin: 0 0 5px 30px;
  }
  .profileBox .textBox .title {
    font-size: 20px;
    color: #1b1b1b;
    margin: 0;
  }
  .profileBox .textBox .eTitle {
    font-size: 20px;
    color: #686868;
    margin: 10px 0 30px;
  }
  .profileBox .rightBox {
    width: 100%;
    background: #ededed;
  }
  .profileBox .rightBox .imgBox {
    width: 100%;
  }

  .profileBox .rightBox .imgBox img {
    width: 100%;
  }
  .profileBox .rightBox p {
    text-indent: 2em;
    padding: 5px;
    font-size: 14px;
  }
  .achievement{
  padding: 10px;
}
.achievementBox{
  width: 100%;
  margin: 20px auto;
  background: #ededed;
}
.achievementBox p{
  font-size: 16px;
  line-height: 26px;
  padding: 10px 30px;
  color: #686868;
}
}
</style>
