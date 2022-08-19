<template>
  <div>
    <!-- 头部导航栏 -->
    <fly-header></fly-header>

    <!-- 面包屑导航 -->
    <fly-breadcrumb :pathList="path"></fly-breadcrumb>

    <!-- 主体内容 -->
    <div class="main">
      <div class="wrapper clearfix">
        <h3>敲木鱼</h3>
        <img src="/image/cite/woodenKnocker/woodenKnocker.jpg" alt="" @click="play()" class="knocker" />
        <audio src="/audio/woodenKnocker/woodenKnocker.mp3" ref="knock"></audio>
        <pre>
  人生就像一场戏，因为有缘才相聚。
  相扶到老不容易，是否更该去珍惜。
  为了小事发脾气，回头想想又何必。
  别人生气我不气，气出病来无人替。
  我若气死谁如意，况且伤神又费力。
  邻居亲朋不要比，儿孙琐事由他去。
  吃苦享乐在一起，神仙羡慕好伴侣。
        </pre>
      </div>
    </div>

    <!-- 技术介绍 -->
    <fly-tech-desc :techDesc="techDesc"></fly-tech-desc>

    <!-- 页尾 -->
    <fly-footer></fly-footer>
  </div>
</template>

<script>
import FlyHeader from '@/components/FlyHeader.vue'
import FlyFooter from '@/components/FlyFooter.vue'
import FlyBreadcrumb from '../components/FlyBreadecrumb.vue'
import FlyTechDesc from '@/components/FlyTechDesc.vue'
export default {
  components: { FlyHeader, FlyFooter, FlyBreadcrumb, FlyTechDesc },
  data() {
    return {
      path: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '整活专区', href: '/' },
        { pid: 3, title: '敲木鱼', href: '/wooden-knocker' },
      ],
      techDesc: {
        desc: '利用HTML5及CSS3新特性，当鼠标划入图片时，修改指针图片为小棒槌，当点击图片时，棒槌改变，且播放锤击声音。',
        tech: 'HTML5、CSS3',
      },
    }
  },
  methods: {
    play() {
      this.$refs.knock.play()
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 1240px;
  margin: 0 auto;
}

.main {
  background-color: #f2f5f8;
}

.main .wrapper {
  background-color: #fff;
  padding: 30px 0 100px;
}

.main .wrapper h3 {
  font-size: 30px;
  text-align: center;
  margin: 20px 0 50px;
}

.main .wrapper .knocker {
  display: block;
  float: left;
  margin: 0 150px 0 100px;
  height: 300px;
}

.main .wrapper .knocker:hover {
  cursor: url(../../public/image/cite/woodenKnocker/stick.ico), auto;
}

.main .wrapper .knocker:active {
  cursor: url(../../public/image/cite/woodenKnocker/stick2.ico), auto;
}

.main .wrapper .stick {
  height: 50px;
}

.main .wrapper pre {
  float: left;
  font-size: 25px;
  margin-top: 35px;
}
</style>
