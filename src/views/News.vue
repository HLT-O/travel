<template>
  <div class="news">
    <div class="banner"></div>
    <div class="newsList">
      <div class="DTitle">
        <span class="emText">新闻中心 - </span>
        <span>News Center</span>
      </div>
      <div class="newsCard" v-for="(item, index) in newsList" :key="index">
        <div class="imgBox">
          <img :src="item.img" alt="" />
        </div>
        <div class="textBox">
          <p class="title">{{ item.title }}</p>
          <div class="newsContent">
            <p>{{ item.content }}</p>
            <span @click="toAbout">查看详细</span>
          </div>
        </div>
      </div>
      <div class="paginationBox">
        <el-pagination background :page-size="4" layout="prev, pager, next" @current-change="handleCurrentChange" :total="12">
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList:[],
      newsList1: [
        {
          img: require("../assets/news/xinwen1.jpeg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen2.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen3.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen4.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
      ],
      newsList2: [
        {
          img: require("../assets/news/xinwen3.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen4.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen1.jpeg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
        {
          img: require("../assets/news/xinwen2.jpg"),
          title: "峡谷城文旅集团举行工作会议",
          content:
            "峡谷城文旅集团工作会议暨经营提效工作推进会在濯水镇举行。会议表彰了集团先进集体、先进管理者和先进个人等。峡谷城文旅集团在改革转型、路线产品策划、景区服务及业态提升上下功夫，实现景区接待游客112.9万人次。",
        },
      ],
    };
  },
  mounted(){
    this.newsList = this.newsList1
  },
  methods:{
    toAbout(){
      this.$router.push('/about')
    },  
    handleCurrentChange(val){
      if(val%2 == 0){
        this.newsList = this.newsList2
      }else{
        this.newsList = this.newsList1
      }
    }
  }
};
</script>

<style scoped>
.news {
  padding: 70px 0;
}
.news .banner {
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url("../assets/banner/banner4.jpg");
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
.newsList {
  padding: 20px 0;
}
.newsList .newsCard {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.newsCard .imgBox {
  width: 50%;
  height: 250px;
  overflow: hidden;
}
.newsCard .imgBox img {
  width: 100%;
  height: 100%;
}
.newsCard .textBox {
  width: 45%;
  background: #f4f4f4;
  overflow: hidden;
}
.newsCard .textBox .title {
  /* height: 15%; */
  font-size: 22px;
  color: #00cfbb;
  background: #ffffff;
}
/* .newsCard .textBox .newsContent {
  height: 85%;
} */
.newsCard .textBox p {
  font-size: 18px;
  color: #707070;
  padding: 10px;
  line-height: 28px;
}
.newsCard .textBox span {
  padding: 5px 10px;
  border: #00cfbb 2px solid;
  border-radius: 99px;
  color: #00cfbb;
  font-size: 14px;
  float: right;
  margin-right: 10px;
}
.newsCard .textBox span:hover{
  color: white;
  background: #00cfbb;
}
.paginationBox{
  display: flex;
  justify-content: center;
}
.paginationBox /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #00cfbb;
}
/* .paginationBox /deep/ .el-pagination.is-background .el-pager li:hover.number{
  color: #00cfbb;
} */
@media screen and (max-width: 420px) {
  .DTitle {
    font-size: 18px;
    color: rgb(100, 100, 100);
    text-align: center;
  }
  .news {
    padding: 40px 0;
  }
  .news .banner {
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url("../assets/banner/banner4.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    overflow: hidden;
  }
  .newsList {
    padding: 20px 10px;
  }
  .newsList .newsCard {
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .newsCard .imgBox {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  .newsCard .imgBox img {
    width: 100%;
    height: 100%;
  }
  .newsCard .textBox {
    width: 100%;
    overflow: hidden;
  }
  .newsCard .textBox .title {
    height: 20px;
    font-size: 18px;
    color: #00cfbb;
  }
  .newsCard .textBox .newsContent {
    height: 130px;
    background: #f4f4f4;
  }
  .newsCard .textBox p {
    font-size: 14px;
    color: #707070;
    padding: 10px;
  }
  .newsCard .textBox span {
    padding: 5px 10px;
    border: #00cfbb 1px solid;
    border-radius: 99px;
    color: #00cfbb;
    font-size: 12px;
    /* float: right; */
    margin-right: 10px;
  }
}
</style>
