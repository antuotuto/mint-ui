<template>
<div class="home">
  <AnHeader></AnHeader>
  <div class="logo">
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
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
      value: ''
    }
  },
  methods: {

  },
  components: {
    AnHeader
  }
}
</script>

<style>
.mint-swipe {
  height: 300px;
  background: #eee;
}
.home{
  height:100%;
  overflow-y: scroll;
}
.logo{
  padding: 15px;
}
</style>
