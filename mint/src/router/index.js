import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import ArticleWord from '@/components/articleWord'
import An from '@/components/an'
import AnSocial from '@/components/anSocial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/articleWord',
      name: '文章',
      component: ArticleWord
    },
    {
      path: '/an',
      name: '王安安',
      component: An
    },
    {
      path: '/anSocial',
      name: '博客安',
      component: AnSocial
    }
  ]
})
