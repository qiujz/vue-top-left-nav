import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component() {
        return import('@/pages/index');
      },
      isHome: true
    },
    {
        path: '',
        redirect: '/'
    },
    {
        path: '/guide/home',
        redirect: '/'
    },
    {
      path: '/index',
      meta: {
          requireLogin: true,
          requireCategory: true
      },
      component() {
          return import('@/pages/index');
      }
    },
    {
      path: '/one',
      meta: {
          requireLogin: true,
          requireCategory: true
      },
      component() {
          return import('@/pages/index');
      },
      children: [
        {
            path: '',
            redirect: 'one1'
        },
        {
            path: 'one1',
            component() {
                return import('@/pages/one1/one1.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'one2',
            component() {
                return import('@/pages/one2/one2.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'one3',
            component() {
                return import('@/pages/one3/one3.vue');
            },
            meta: {
                requireLogin: true
            }
        }
      ]
    },
    {
      path: '/two',
      meta: {
          requireLogin: true,
          requireCategory: true
      },
      component() {
          return import('@/pages/index');
      },
      children: [
        {
            path: '',
            redirect: 'two11'
        },
        {
            path: 'two11',
            component() {
                return import('@/pages/two1/two11.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'two12',
            component() {
                return import('@/pages/two1/two12.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'two13',
            component() {
                return import('@/pages/two1/two13.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'two2',
            component() {
                return import('@/pages/two2/two2.vue');
            },
            meta: {
                requireLogin: true
            }
        },
        {
            path: 'two3',
            component() {
                return import('@/pages/two3/two3.vue');
            },
            meta: {
                requireLogin: true
            }
        }
      ]
    },
    {
        path: '/three',
        meta: {
            requireLogin: true,
            requireCategory: true
        },
        component() {
            return import('@/pages/index');
        },
        children: [
            {
                path: '',
                redirect: 'three1'
            },
            {
                path: 'three1',
                component() {
                    return import('@/pages/three1/three1.vue');
                },
                meta: {
                    requireLogin: true
                }
            },
            {
                path: 'three2',
                component() {
                    return import('@/pages/three2/three2.vue');
                },
                meta: {
                    requireLogin: true
                }
            },
            {
                path: 'three3',
                component() {
                    return import('@/pages/three3/three3.vue');
                },
                meta: {
                    requireLogin: true
                }
            }
        ]
        }
  ]
});
