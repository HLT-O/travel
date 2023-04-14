<template>
  <div class="container">
    <div class="imgBox" :class="{imgInRight}">
      <img :src="cardContent.img" alt="图片" />
    </div>
    <div class="textBox">
      <p class="text">{{cardContent.text1}}</p>
      <p class="text">{{cardContent.text2}}</p>
      <p v-for="(item,index) in cardContent.text3" :key="index" class="emText" :class="[index == 0? 'emText1':'emText2']">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        cardContent:{
            type:Object,
            required: true,
        },
        cardIndex:Number,
    },
    data(){
        return{
            
        }
    },
    computed:{
        imgInRight:function(){
            return this.cardIndex%2 ? true : false
        }
    }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 300px;
  width: 1000px;
  margin: 50px auto;
}
.imgInRight{
    order: 1;
}
.imgBox {
  overflow: hidden;
}
.imgBox img {
  height: 100%;
  transition: all 0.5s;
}
.imgBox img:hover {
  transform: scale(1.2);
}
.textBox {
  padding: 0 40px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s;
  font-size: 22px;
  background: white;
}
.textBox .text {
  color: rgb(115, 115, 115);
  height: 36px;
  line-height: 36px;
  text-align: center;
}
.textBox .emText {
  color: #00cfbb;
  text-align: right;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  font-size: 18px;
}
.emText1 {
  background: linear-gradient(to right, #00cfbb, #00cfbb) no-repeat top right;
  background-size: 40px 2px;
}
.emText2{
  margin-top: 0 !important;
}
.textBox:hover {
    transform: translate(-5px,-5px);
    box-shadow:
  8.9px 8.9px 6.4px rgba(0, 0, 0, 0.018),
  12.4px 12.4px 9.8px rgba(0, 0, 0, 0.023),
  14.1px 14.1px 11.9px rgba(0, 0, 0, 0.026),
  15.3px 15.3px 13.5px rgba(0, 0, 0, 0.031),
  17.3px 17.3px 15.9px rgba(0, 0, 0, 0.038),
  24px 24px 29px rgba(0, 0, 0, 0.05)
;
}

@media screen and (max-width: 420px) {
  .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
}
.imgInRight{
    order: 0;
}
.imgBox {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
}
.imgBox img {
  width: 100%;
  object-fit:cover;
  transition: all 0.5s;
}
.imgBox img:hover {
  transform: scale(1.2);
}
.textBox {
  padding: 0 0;
  height: 50%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s;
  font-size: 16px;
  background: white;
  margin: 0 auto;
}
.textBox .text {
  color: rgb(115, 115, 115);
  height: 30px;
  line-height: 36px;
  text-align: center;
}
.textBox .emText {
  margin-inline: 0 40px;
  color: #00cfbb;
  text-align:end;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
}

.textBox:hover {
    transform: translate(-5px,-5px);
    box-shadow:
  8.9px 8.9px 6.4px rgba(0, 0, 0, 0.018),
  12.4px 12.4px 9.8px rgba(0, 0, 0, 0.023),
  14.1px 14.1px 11.9px rgba(0, 0, 0, 0.026),
  15.3px 15.3px 13.5px rgba(0, 0, 0, 0.031),
  17.3px 17.3px 15.9px rgba(0, 0, 0, 0.038),
  24px 24px 29px rgba(0, 0, 0, 0.05)
;
}
}
</style>
