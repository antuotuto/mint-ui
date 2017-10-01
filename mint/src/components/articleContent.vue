<template>
  <div class="article">
    <div class="article-img">
      <img src="http://ooi407n8x.bkt.clouddn.com/an.jpg" alt="">
    </div>
    <div class="article-title">
      <h2>我喜欢的是你这样的人</h2>
      <p>希望所有的人都可以找到自己喜欢喝心爱的女孩子洒到哪啦看到了按理说看到了卡死</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
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
      line-height: 13px;
    }
  }
}
</style>
