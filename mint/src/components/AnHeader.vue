<template>
<div class="header">
  <mt-header title="文章的标签">
    <div slot="left">
      <mt-button icon="back" @click="history">返回</mt-button>
    </div>
    <mt-button icon="" slot="right">主页</mt-button>
  </mt-header>
</div>
</template>

<script>
import {
  Indicator
} from 'mint-ui';

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
    history() {
      window.history.go(-1);
    }
  },
}
</script>

<style>

</style>
