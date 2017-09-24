<template>
<div id="app">
  <mt-header title="王安安" class="homeHeader">
    <div slot="left">
      <mt-button type="primary" @click="menuOn">Menu</mt-button>
    </div>
  </mt-header>
  <leftMenu></leftMenu>
  <router-view></router-view>
</div>
</template>

<script>
import leftMenu from '@/components/leftMenu.vue'
import {
  mapMutations
} from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      currentView: 'view-main',
    }
  },
  components: {
    leftMenu
  },
  methods:{
    menuOn() {
      if (this.currentView == 'view-main') {
        this.currentView = 'view-down'
        this.setLogo(false)
      } else {
        this.currentView = 'view-main'
        this.setLogo(true)
      }
    },
    ...mapMutations({
      setLogo: 'SET_LOGO'
    })
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 40px;
}
.homeHeader{
  position: absolute;
  top:0;
  left: 0;
  width:100%;
}
</style>
