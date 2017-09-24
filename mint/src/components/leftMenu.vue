<template>
<div class="leftMenu" :class="[this.logo ? true : 'active', '']">
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
import {listStays} from '@/data'

export default {
  data() {
    return {
      listStays: listStays,
    }
  },
  methods:{
    linker(){
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

<style scoped>
.leftMenu {
  width: 100%;
  background: #eee;
  height: 100%;
  transition: .3s;
  transform: translate(-100%, 0);
}

.leftMenu.active {
  transform: translate(0, 0);
}

.leftMenu li{
  width:100%;
  padding: 15px;
}


</style>
