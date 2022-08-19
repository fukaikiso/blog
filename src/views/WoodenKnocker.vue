<template>
  <div>
    <fly-header></fly-header>

    <div class="main">
      <div class="wrapper clearfix">
        <h3>敲木鱼(点击图片)</h3>
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

    <fly-footer></fly-footer>
  </div>
</template>

<script>
import FlyHeader from '@/components/FlyHeader.vue'
import FlyFooter from '@/components/FlyFooter.vue'
export default {
  components: { FlyHeader, FlyFooter },
  methods: {
    play() {
      this.$refs.knock.play()
    },
  },
}
</script>

<style scoped>
.main {
  background-color: #f2f5f8;
}

.main .wrapper {
  background-color: #fff;
  padding: 30px 0;
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
