<template>
  <div class="fly-tech-desc">
    <div class="wrapper">
      <h4>功能详情：</h4>
      <p>{{ techDesc.desc }}</p>
      <h4>应用技术：</h4>
      <p>{{ techDesc.tech }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['techDesc'],
}
</script>

<style lang="scss" scoped>
.fly-tech-desc {
  background-color: #f2f5f8;
  padding: 20px 0;
  h4 {
    font-size: 20px;
    padding: 15px 0 10px;
  }
}
</style>
