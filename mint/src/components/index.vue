<template>
<div class="home">
  <AnHeader></AnHeader>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>

  <mt-switch v-model="value">开关</mt-switch>

  <mt-spinner type="double-bounce" color="#26a2ff" :size="60"></mt-spinner>
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
      value:''
    }
  },
  methods: {

  },
  components: {
    AnHeader,
  }
}
</script>

<style>
.mint-swipe {
  height: 1000px;
  background: #eee;
}
</style>
