<template>
  <div class="container">
    <div class="list" v-for="(list, index) in footerList" :key="index">
      <p class="listTitle">{{ list.title }}</p>
      <div v-if="list.text" class="listTextC">
        <p class="listText" v-for="(item, index) in list.text">{{ item }}</p>
      </div>
      <div v-else>
        <img :src="list.img" alt="关注" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        {
          title: "发现",
          text: ["信息与安全", "消费者权益", "帮助"],
        },
        {
          title: "公司信息",
          text: ["关于我们", "招纳贤士", "联系我们"],
        },
        {
          title: "网络条款",
          text: ["用户协议", "隐私保护", "版权声明"],
        },
        {
          title: "关注我们",
          img: require("../assets/footer/erweima.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding: 20px 100px;
  background: #00cfbb;
}
.list {
  color: aliceblue;
}
.listTitle {
  font-size: 18px;
  border-bottom: #bbbbbb solid 2px;
  margin-bottom: 10px;
}
img {
  width: 80px;
}

@media screen and (max-width: 420px) {
  .container {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background: #00cfbb;
  }
  .list {
    color: aliceblue;
  }
  .listTitle {
    font-size: 18px;
    border-bottom: #bbbbbb solid 2px;
    margin-bottom: 10px;
  }
  img {
    width: 80px;
  }
}
</style>
