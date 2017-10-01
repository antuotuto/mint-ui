<template>
  <div id="app">
    <main :class="[this.logo ? true : 'active', '']">
      <div class="header-top">
        <button class="header-left" @click="menuOn">{{ this.$route.name }}</button>
        <a href="https://github.com/antuotuto">
          <img src="http://ooi407n8x.bkt.clouddn.com/an.jpg" alt="">
        </a>
      </div>
      <router-view></router-view>
      <div class="footer-bootom">
        <p>© 2017 wanganan, Inc.</p>
      </div>
    </main>
    <leftMenu></leftMenu>
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
    offLeftMenu() {
      this.currentView = 'view-main'
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
  overflow: hidden;
  background: #f0f0f0;
  box-sizing: border-box;
}

.header-top {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #3F51B5;
  button {
    padding: 0;
    line-height: 30px;
    border: 0;
    outline: none;
    padding: 0 15px;
    background: transparent;
    background: #fff;
    color: #333;
    font-weight: 300;
    font-size: 17px;
    border-radius: 3px;
    letter-spacing: 2px;
  }
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    float: right;
  }
}

.footer-bootom {
  padding: 15px 10px;
  text-align: center;
}

main {
  transform: translate(0, 0);
  transition: .3s;
  padding-top: 49px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  &.active {
    transform: translate(50%, 0);
  }
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
