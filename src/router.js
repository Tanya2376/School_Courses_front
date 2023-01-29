import {createRouter, createWebHistory} from "vue-router"
import Index from "@/components/Index/Index.vue"
import PersonalAccount from '@/components/PersonalAccount/PersonalAccount.vue'
import TestVue from '@/components/PersonalAccount/templates/Test/Test.vue'
import Main from '@/components/Articles/Main/Main.vue'
import Article from '@/components/Articles/DefaultArticle/DefaultArticle.vue'
import config from "@/components/Articles/config"

const routes = [
   {
      path: '/',
      component: Index
   },
   {
      path: '/personal_account',
      component: PersonalAccount,
      beforeEnter(to, from, next) {
         if(!localStorage.login) {
            next(false)
         }else{
            next()
         }
      }
   },
   {
      path: '/test',
      component: TestVue,
      beforeEnter(to, from, next) {
         if(!localStorage.login) {
            next(false)
         }else{
            next()
         }
      }
   },
   {
      path: '/articles',
      component: Main
   },
   {
      path: '/article',
      component: Article,
      children: config.map(function(item) {
         return {
            path: item.path,
            component: item.component
         }
      })
   }
]

const router = createRouter( {
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router;