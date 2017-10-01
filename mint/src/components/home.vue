<template>
<div class="home">
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
  <articleContent></articleContent>
  <articleContent></articleContent>
  <articleContent></articleContent>
  <articleContent></articleContent>
  <articleContent></articleContent>
</div>
</template>

<script>
import articleContent from '@/components/articleContent.vue'

import {
  Swipe,
  SwipeItem
} from 'mint-ui';

export default {
  data() {
    return {
      currentView: 'view-main',
    }
  },
  methods: {
    history() {
      window.history.go(-1);
    },
  },
  components: {
    articleContent
  }
}
</script>

<style>
.mint-swipe {
  height: 100vw;
  background: #fff;
}

.homeHeader {
  background: #20A0FF;
  height:50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
