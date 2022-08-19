<template>
  <div class="fly-breadcrumb">
    <div class="wrapper" v-if="pathList">
      <router-link :to="p.href" v-for="(p, i) in pathList" :key="p.pid">{{ p.title | andgt(i, pathList.length) }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pathList'],
  data() {
    return {}
  },
  filters: {
    andgt(value, i, length) {
      //此处无法直接访问this.pathList，需要作为参数传入
      // console.log('value,i,length :>> ', value, i, length)
      return i == length - 1 ? value : value + ' > '
    },
  },
}
</script>

<style lang="scss" scoped>
.fly-breadcrumb {
  background-color: #f2f5f8;
  padding: 15px 0;
  .wrapper {
    width: 1240px;
    margin: 0 auto;
    a {
      margin: 20px 0;
    }
  }
}
</style>
