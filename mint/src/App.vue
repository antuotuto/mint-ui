<template>
  <div id="app">
    <mt-header title="王安安" class="homeHeader">
      <div slot="left">
        <mt-button type="primary" @click="menuOn">Menu</mt-button>
      </div>
    </mt-header>
    <leftMenu></leftMenu>
    <router-view></router-view>
    <div class="blank" :class="[this.logo ? false : 'active', '']" @click="offLeftMenu"></div>
  </div>
</template>

<script>
import leftMenu from '@/components/leftMenu.vue'
import {
  mapMutations
} from 'vuex'
import {
  mapGetters
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
  methods: {
    menuOn() {
      if (this.currentView == 'view-main') {
        this.currentView = 'view-down'
        this.setLogo(false)
      } else {
        this.currentView = 'view-main'
        this.setLogo(true)
      }
    },
    offLeftMenu(){
      this.setLogo(true)
    },
    ...mapMutations({
      setLogo: 'SET_LOGO'
    })
  },
  computed: {
    ...mapGetters([
      'logo'
    ]),
  },
  watch: {
    change() {
      return this.logo
    },
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
}

.homeHeader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.blank {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 50;
  display: none;
  &.active {
    display: block;
  }
}
</style>
