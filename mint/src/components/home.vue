<template>
<div class="home">
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
import AnHeader from '@/components/AnHeader.vue'
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
    AnHeader,
  }
}
</script>

<style>
.mint-swipe {
  height: 300px;
  background: #eee;
}

.homeHeader {
  background: #20A0FF;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
