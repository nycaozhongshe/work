import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable */

import index from "@/components/index.vue";
import introduction from "@/components/introduction.vue";

import link from "@/components/link.vue";
import me from "@/components/me.vue";
import works from "@/components/works.vue";
import show from "@/components/show.vue";
import shcool from "@/components/shcool.vue";
import position from "@/components/position.vue";




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/introduction",
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        pageTitle: '首页',
        keepAlive: true,
      },
      children: [
        {
          path: '/introduction',
          name: 'introduction',
          component: introduction,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/link',
          name: 'link',
          component: link,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/me',
          name: 'me',
          component: me,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/works',
          name: 'works',
          component: works,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/show',
          name: 'show',
          component: show,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/shcool',
          name: 'shcool',
          component: shcool,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        },
        {
          path: '/position',
          name: 'position',
          component: position,
          meta: {
            pageTitle: '首页',
            keepAlive: true,
          }
        }
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})



export default router;
