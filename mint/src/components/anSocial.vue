<template>
  <div class="anSocial">
    <articleAn v-bind:an="otherSkill"></articleAn>
  </div>
</template>

<script>
import articleAn from '@/components/articleAn'
import {
  otherSkill
} from '@/data'

export default {
  data() {
    return {
      otherSkill: otherSkill
    }
  },
  components: {
    articleAn
  }
}
</script>

<style lang="scss" scoped>
.anSocial {
  background-color: #3F51B5;
  padding: 15px 0;
}
</style>
