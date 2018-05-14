<template>
  <div class="container" ref="container">

  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 400px;
  }
</style>

<script>
import echarts from 'echarts';

export default {
  props: ['options'],

  mounted() {
    this.charts = null;

    this.charts = echarts.init(this.$refs.container);
    this.charts.setOption(this.options);
  },

  updated() {

  }
}
</script>

