<template>
  <div class="leftMenu" :class="[this.logo ? true : 'active', '']">
    <div>
      <a href="https://github.com/antuotuto">
        <img src="http://ooi407n8x.bkt.clouddn.com/an.jpg" alt="">
      </a>
      <p>王安安</p>
    </div>
    <ul>
      <li v-for="(nav,index) in listStays" :key="nav.title" @click="linker">
        <router-link :to="nav.router">
          <i class="icon iconfont" :class="nav.icon"></i>
          <p>{{ nav.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  mapMutations
} from 'vuex'
import { listStays } from '@/data'

export default {
  data() {
    return {
      listStays: listStays,
    }
  },
  methods: {
    linker() {
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

<style lang="scss" scoped>
.leftMenu {
  width: 100%;
  background: #3F51B5;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: .3s;
  transform: translate(-100%, 0);
  z-index: 100;
  div {
    padding: 15px 15px 15px 55%;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .04);
    }
    p {
      border-radius: 3px;
      color: #333;
      padding: 10px;
      letter-spacing: 2px;
      font-size: 14px;
      background: #fff;
    }
  }
  ul {
    width: 100%;
    li {
      padding: 15px 15px 15px 55%;
      text-align: center;
    }
  }
  a {
    color: #fff;
  }
  &.active {
    transform: translate(-50%, 0);
  }
}
</style>
