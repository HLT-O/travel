<template>
  <div class="container">
    <div class="textBox">
      <p class="emText">{{ cardContent.EName }}</p>
      <p class="emText">{{ cardContent.name }}</p>
      <p >
        {{ cardContent.description }}
      </p>
      <span class="more" @click="toHomeST">更多></span>
      <div class="circle"></div>
    </div>
    <div class="imgBox">
      <img :src="cardContent.img" alt="评论图片" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardContent: {
      type: Object,
      default: function () {
        return {
          img: require("../assets/customization/kehupingjia1.png"),
          EName: "ChongQing",
          name: "重庆",
          description:
            "我们已经回家了，谢谢你们的所有帮助，辛苦了你们真的太专业，对你们很佩服。旅游指南很全，中间的小插曲也能很好地帮我们搞定。下次自由行还需要你们！谢谢！",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods:{
    toHomeST(){
      this.$router.push({
        path:'/',
        query:{
          name:'saituId'
        }
      })
    }
  }
};
</script>

<style scoped>
.container {
  width: 1000px;
  display: flex;
}
.textBox {
  position: relative;
  width: 300px;
  padding: 30px 50px 30px 0;
  font-size: 14px;
  color: #adadad;
  border-right: 3px #00cfbb solid;
}
.textBox p{
  margin: 10px 0;
}
.textBox .emText {
  color: #00cfbb;
  font-size: 18px;
}
.circle {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: #00cfbb;
}
.imgBox {
  width: 500px;
  padding: 10px 0;
  margin-left: 50px;
  flex-grow: 1;
}
.imgBox img {
  width: 100%;
}
.more{
  padding: 5px 10px;
  border-radius: 99px;
  transition: all 0.3s;
  float: right;
}
.more:hover{
  background: #00cfbb;
  color: white;
}
@media screen and (max-width:420px){
  .container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.textBox {
  position: relative;
  width: 80%;
  padding: 0;
  font-size: 14px;
  color: #adadad;
  border: none;
}
.textBox p{
  margin: 5px 0;
}
.textBox .emText {
  color: #00cfbb;
  font-size: 18px;
}
.circle {
  display: none;
}
.imgBox {
  width:80%;
  padding: 0;
  margin-left: 0;
  flex-grow: 1;
  margin-top: 10px;
}
.imgBox img {
  width: 100%;
}
}
</style>
