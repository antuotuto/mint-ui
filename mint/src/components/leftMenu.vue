<template>
  <div class="leftMenu" :class="[this.logo ? true : 'active', '']">
    <div>
      <a href="https://github.com/antuotuto">
        <img src="http://ooi407n8x.bkt.clouddn.com/an.jpg" alt="">
      </a>
      <p>王安安</p>
    </div>
    <el-menu :default-active="$route.path" unique-opened router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" :unique-opened="true" background-color="#3F51B5" text-color="#fff" active-text-color="#ffd04b">

  <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
      </template>
    </el-menu>

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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  box-sizing: border-box;
  padding-left: 25%;
  padding-right: 15px;
  div {
    padding: 15px 0;
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
  &.active {
    transform: translate(-20%, 0);
  }
}


.el-menu {
  border: 0;
}
</style>
