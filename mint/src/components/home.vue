<template>
<div class="home">
  <AnHeader></AnHeader>
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
    return {}
  },
  methods: {

  },
  components: {
    AnHeader
  }
}
</script>

<style>
.mint-swipe{
  height:300px;
  background: #eee;
}

</style>
