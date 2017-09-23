<template>
<div class="header">
  <mt-header title="多个按钮">
    <div slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button @click="openIndicator">关闭</mt-button>
    </div>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</div>
</template>

<script>
import {
  Indicator
} from '~/mint/index';

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClose() {
      alert('close this page');
    },
    openIndicator() {
      Indicator.open();
      setTimeout(() => Indicator.close(), 2000);
    }
  },
  beforeDestroy() {
    Indicator.close();
  }
}
</script>

<style>

</style>
