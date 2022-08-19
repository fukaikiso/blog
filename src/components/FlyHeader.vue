<template>
  <div class="fly-header">
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/img//logo.png" alt="五叶幽明的小站" class="logo" />
      </div>
      <nav class="fl">
        <ul class="nav_items">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <a href="#">技术资源 🞃</a>
            <ul class="sub_menu">
              <li><a href="#tutorial">技术教程</a></li>
              <li><a href="#docs">官方文档</a></li>
              <li><a href="#tools">实用工具</a></li>
            </ul>
          </li>
          <li>
            <a href="#">常用网站 🞃</a>
            <ul class="sub_menu">
              <li><a href="https://juejin.cn/frontend">稀土掘金</a></li>
              <li><a href="https://blog.csdn.net/nav/web">CSDN</a></li>
              <li><a href="https://cloud.tencent.com/">腾讯云</a></li>
              <li><a href="https://www.bilibili.com/">bilibili</a></li>
            </ul>
          </li>
          <li>
            <a href="#">个人开发 🞃</a>
            <ul class="sub_menu">
              <li><a href="#project">项目展示</a></li>
              <li><a href="#special">整活专区</a></li>
            </ul>
          </li>
          <li>
            <a href="#">博客专栏 🞃</a>
            <ul class="sub_menu">
              <li><a href="#">HTML/CSS</a></li>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Vue</a></li>
              <li><a href="#">React</a></li>
              <li><a href="#">其他</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- TODO：夜间模式 -->
      <!-- <div class="search fr">
        <a href="#"><img src="@/assets/img//search.png" alt="" /></a>
      </div>
      <div class="modev fr">
        <a href="#"><img src="@/assets/img//night.png" alt="" /></a>
      </div> -->
      <div class="submit fr">
        <a href="#"><i class="btn">投稿</i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.fly-header {
  background-color: #fff;
}
.wrapper {
  width: 1240px;
  margin: 0 auto;
}

.fly-header .wrapper {
  height: 80px;
}

.fly-header .wrapper .logo {
  display: block;
  float: left;
  height: 80px;
  margin-right: 60px;
  color: red;
}

.fly-header .wrapper .nav_items > li {
  float: left;
  position: relative;
  margin: 0 20px;
  line-height: 80px;
}

.fly-header .wrapper .nav_items a {
  margin: 0 auto;
}

.fly-header .wrapper .nav_items a:hover {
  color: #ef1616;
}

.fly-header .wrapper .nav_items > li:hover .sub_menu {
  display: block;
  z-index: 100;
  font-size: 14px;
}

.fly-header .wrapper nav .sub_menu {
  display: none;
  position: absolute;
  left: -10px;
  right: -10px;
  line-height: 40px;
  background-color: #fff;
  box-shadow: 0 0 3px;
  text-align: center;
}

.fly-header .wrapper nav ~ div a {
  height: 80px;
  line-height: 80px;
  margin-left: 30px;
  vertical-align: middle;
}

.fly-header .wrapper nav ~ div img {
  width: 20px;
  vertical-align: middle;
}

.fly-header .wrapper .submit .btn {
  box-sizing: border-box;
  padding: 8px 20px;
  margin-right: 20px;
  background-color: #e34f4f;
  border-radius: 3px;
  vertical-align: middle;

  color: #fff;
}

.fly-header .wrapper .submit .btn:hover {
  background-color: #ff3636;
}
</style>
