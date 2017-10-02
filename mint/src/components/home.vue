<template>
  <div class="home">
    <articleContent></articleContent>
    <articleContent></articleContent>
    <articleContent></articleContent>
    <articleContent></articleContent>
    <articleContent></articleContent>
  </div>
</template>

<script>
import articleContent from '@/components/articleContent.vue'

export default {
  data() {
    return {
      currentView: 'view-main',
    }
  },
  methods: {
    history() {
      window.history.go(-1);
    },
  },
  components: {
    articleContent
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #f0f0f0;
  padding: 10px 0;
}

.mint-swipe {
  height: 300px;
  background: #3F51B5;
  color:#fff;
  h1{
    font-size: 25px;
    padding:80px 30px 30px 30px;
  }
p{

}

}

.homeHeader {
  background: #20A0FF;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
