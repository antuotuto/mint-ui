<template>
  <div class="an">
    <articleAn v-bind:an="fronts"></articleAn>
  </div>
</template>

<script>
import articleAn from '@/components/articleAn'
import {
  fronts
} from '@/data'

export default {
  data() {
    return {
      fronts: fronts
    }
  },
  components: {
    articleAn
  }
}
</script>

<style lang="scss" scoped>
.an {
  background-color: #3F51B5;
  padding: 15px 0;
}
</style>
