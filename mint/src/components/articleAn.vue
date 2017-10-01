<template>
  <div class="articleAn">
    <div class="articleAn-Box" v-for="(nav,index) in listStays" :key="nav.title">
      <div class="article-img">
        <img src="http://ooi407n8x.bkt.clouddn.com/an.jpg" alt="">
      </div>
      <div class="article-title">
        <a :href="nav.router" target="_blank">
          <h2>{{ nav.title }}</h2>
          <p>{{ nav.text}}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      listStays: this.an
    }
  },
  props: ["an"]
}
</script>

<style lang="scss" scoped>
.articleAn-Box {
  margin: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .04);
  .article-img {
    height: 50px;
    width: 50px;
    float: left;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .article-title {
    padding: 5px 5px 5px 15px;
    overflow: hidden;
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
      padding-top: 7px;
      line-height: 17px;
    }
  }
}
</style>
