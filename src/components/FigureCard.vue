<template>
  <div class="container">
    <div class="personBox">
      <div class="imgBox">
        <img :src="cardContent.img" alt="定制团队图片" />
      </div>
      <div class="personName">{{ cardContent.name }}</div>
    </div>
    <p class="title">{{ cardContent.title }}</p>
    <p class="description">
      {{ cardContent.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cardContent: {
      type: Object,
      required:true,
      default: function () {
        return {
          img: require("../assets/customization/dingzhituandui1.png"),
          name: "定制师 宋杉",
          title: "旅游",
          description:
            "他的相机里，有黔江各个景区的美照，一个爱幻想的人游走在了这里，只戴着耳机",
        };
      },
    },
  },
};
</script>

<style scoped>
.container {
  width: 240px;
  /* margin:0 20px; */
}
.personBox {
  position: relative;
  margin-bottom: 30px;
}
.personBox .imgBox {
  overflow: hidden;
}
.personBox img {
  /* width: 100%; */
  transition: all 0.6s;
}
.personBox img:hover {
  transform: scale(1.2);
}
.personBox .personName {
  position: absolute;
  bottom: 0;
  transform: translate(50%, 50%);
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #00cfbb;
  border-radius: 40px;
  background: white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.33)
}
.title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
}
.description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #adadad;

}
</style>
