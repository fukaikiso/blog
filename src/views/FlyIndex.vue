<template>
  <div>
    <fly-header></fly-header>

    <div class="banner">
      <div class="stage">
        <div class="space"></div>
        <div class="mountain">
          <div class="mountain1"></div>
          <div class="mountain2"></div>
          <div class="mountain3"></div>
        </div>
      </div>

      <div class="wrapper">
        <div class="title">fukaikiso的个人小站</div>
        <div class="search">
          <input type="text" placeholder="请输入关键词" />
          <button>搜索</button>
        </div>
        <div class="bear"></div>
      </div>
    </div>

    <div class="main">
      <div class="wrapper">
        <div class="part cite" id="project">
          <div class="header clearfix">
            <h3 class="fl">项目展示</h3>
            <a href="#" class="fr">
              <span>更多&nbsp;</span>
              <img src="@/assets/img/plus.png" alt="" />
            </a>
          </div>
          <div class="items">
            <a href="#" class="block">
              <img src="/image/cite/developing.png" alt="" />
              <h4>蛋糕店项目展示</h4>
              <p title="蛋糕店品牌理念、蛋糕展示，以及登录购买蛋糕蛋糕店品牌理念、蛋糕展示，以及登录购买蛋糕">蛋糕店品牌理念、蛋糕展示，以及登录购买蛋糕蛋糕店品牌理念、蛋糕展示，以及登录购买蛋糕</p>
            </a>
          </div>
        </div>

        <div class="part cite" id="special">
          <div class="header clearfix">
            <h3 class="fl">整活专区</h3>
            <a href="#" class="fr">
              <span>更多&nbsp;</span>
              <img src="@/assets/img/plus.png" alt="" />
            </a>
          </div>
          <div class="items">
            <router-link to="/wooden-knocker" class="block">
              <img src="/image/cite/woodenKnocker/woodenKnocker.jpg" alt="" />
              <h4>敲木鱼</h4>
              <p title="人生就像一场戏，因为有缘才相聚。">人生就像一场戏，因为有缘才相聚。</p>
            </router-link>
          </div>
        </div>

        <div class="part" id="docs">
          <div class="header clearfix">
            <h3 class="fl">官方文档</h3>
            <a href="#" class="fr">
              <span>更多&nbsp;</span>
              <img src="@/assets/img/plus.png" alt="更多&nbsp;" />
            </a>
          </div>
          <div class="items">
            <a :href="d.href" class="block" v-for="d in docs" :key="d.did">
              <div class="top clearfix">
                <img :src="d.img" class="icon" alt="" />
                <h4>{{ d.title }}</h4>
                <i>&gt;</i>
              </div>
              <p :title="d.desc">{{ d.desc }}</p>
            </a>
          </div>
        </div>

        <div class="part" id="tutorial">
          <div class="header clearfix">
            <h3 class="fl">技术教程</h3>
            <a href="#" class="fr">
              <span>更多&nbsp;</span>
              <img src="@/assets/img/plus.png" alt="更多&nbsp;" />
            </a>
          </div>
          <div class="items">
            <a :href="t.href" class="block" v-for="t in tutorials" :key="t.tid">
              <div class="top clearfix">
                <img :src="t.img" class="icon" alt="" />
                <h4>{{ t.title }}</h4>
                <i>&gt;</i>
              </div>
              <p :title="t.desc">{{ t.desc }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <fly-footer></fly-footer>
  </div>
</template>

<script>
import FlyHeader from '@/components/FlyHeader.vue'
import FlyFooter from '@/components/FlyFooter.vue'
// import indexData from '../../public/json/index.json'
export default {
  components: { FlyHeader, FlyFooter },
  data() {
    return {
      tutorials: [],
      docs: [],
    }
  },
  mounted() {
    this.axios.get('/json/index.json').then((res) => {
      console.log('res :>> ', res)
      this.tutorials = res.data.tutorials
      this.docs = res.data.docs
    })
  },
}
</script>

<style scoped>
.banner {
  position: relative;
  height: 320px;
  width: 100%;
  overflow: hidden;
}

.banner .stage {
  position: absolute;
  height: 320px;
  width: 200%;
  background-color: #000;
}

.banner .stage div {
  height: 320px;
  width: 100%;
}

.banner .stage .space {
  background-image: url(@/assets/img/bg-space.png);
  background-size: auto 50%;
}

.banner .stage .mountain {
  position: absolute;
  top: 60px;
  height: 260px;
}

.banner .stage .mountain div {
  position: absolute;
  height: 260px;
  left: 0;
  bottom: 0;
  background-size: auto 50%;
  background-position: 0 bottom;
}

.banner .stage .mountain1 {
  z-index: 3;
  background: url(@/assets/img/bg-mountain-1.png) repeat-x;
  animation: moving 100s linear 0.8s infinite normal none;
}

.banner .stage .mountain3 {
  z-index: 2;
  background: url(@/assets/img/bg-mountain-3.png) repeat-x;
  animation: moving 150s linear 0.8s infinite normal none;
}

.banner .stage .mountain2 {
  z-index: 1;
  background: url(@/assets/img/bg-mountain-2.png) repeat-x;
  animation: moving 200s linear 0.8s infinite normal none;
}

@keyframes moving {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.banner .wrapper .title {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  min-width: 300px;
  text-align: center;
}

.banner .wrapper .search {
  position: absolute;
  z-index: 4;
  top: 120px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
}

.banner .wrapper .search input {
  float: left;
  width: 400px;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
}

.banner .wrapper .search button {
  float: left;
  width: 50px;
  height: 30px;
  background-color: #e34f4f;
  border-radius: 0 5px 5px 0;
  color: #fff;
}

.banner .wrapper .search button:hover {
  background-color: #ff3636;
  cursor: pointer;
}

.banner .wrapper .bear {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, 0);
  width: 100px;
  height: 50px;
  background: url(@/assets/img/bear.png) repeat-x;
  background-size: auto 100%;

  animation: running_bear 0.8s steps(8) infinite, move_bear 5s forwards;
}

@keyframes running_bear {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1600px 0;
  }
}

@keyframes move_bear {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
  }
}

.wrapper {
  width: 1240px;
  margin: 0 auto;
}

.main {
  background-color: #f2f5f8;
  overflow: hidden;
}

.main .wrapper .part {
  background-color: #fff;
  /* margin-top: 10px; */
  overflow: hidden;
}

.main .wrapper .part .header {
  padding: 20px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}

.main .wrapper .part .header a > * {
  font-size: 14px;
  vertical-align: middle;
}

.main .wrapper .items {
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
}

.main .wrapper .items .block {
  float: left;
  width: 240px;
  padding: 25px 20px;
  margin-right: 26px;
}

.main .wrapper .items .block:nth-child(4n) {
  margin-right: 0;
}

.main .wrapper .items .block:hover {
  box-shadow: 0 0 10px 4px #aaa;
}

.main .items .block .top img {
  float: left;
  width: 32px;
}

.main .items .block .top h4 {
  float: left;
  margin-left: 10px;
  font-weight: normal;
  line-height: 32px;
}

.main .items .block .top i {
  float: right;
  margin-top: 8px;
  border: 1px solid #aaa;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 8px;
  color: #aaa;
  text-align: center;
}

.main .items .block .top i:hover {
  background-color: rgb(243, 236, 236);
}

.main .items .block p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 5px 0 10px 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  /* text-align: justify; */
  color: rgb(142, 137, 137);
}

.main .cite .items .block {
  padding: 0;
  border-radius: 10px;
  width: 280px;
  overflow: hidden;
  box-shadow: 0 0 5px 2px #aaa;
}

.main .cite .items .block img {
  width: 280px;
  height: 180px;
}

.main .cite .items .block h4 {
  margin: 10px 0 10px 20px;
}

.main .cite .items .block p {
  margin: 0 20px 20px;
  line-height: 20px;
}
</style>
