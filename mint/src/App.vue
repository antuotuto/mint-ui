<template>
<div id="app">
  <router-view></router-view>
  <ul>
    <li class="">1</li>
    <li class="">2</li>
    <li class="">3</li>
    <li class="">4</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
  overflow: hidden;
}

ul {
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #eee;
}

li {
  line-height: 50px;
  text-align: center;
  width: 25%;
  float: left;
}
</style>
