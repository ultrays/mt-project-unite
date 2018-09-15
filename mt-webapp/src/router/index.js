import Vue from 'vue'
import Router from 'vue-router'
//wu
import Meishi from '../pages/Meishi'
import Beautylist from '../pages/Beautylist'
import Beautydetalis from '../pages/Beautydetalis'
//yuan
import Index from '../pages/index.vue'
import KtvList from '../pages/ktvList.vue'
import Ktv from '../pages/ktv.vue'
//geng
import CatEye_Detail_in from '../pages/CatEye_Detail_in'
import CatEye_Detail from '../pages/CatEye_Detail'
import CatEye from '../pages/CatEye'
import Side_list from '../pages/Side_list'
import Side_Detail from '../pages/Side_Detail'
import Food from '../pages/Food'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Meishi',
      name: 'HelloWorld',
      component: Meishi
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/Beautylist',
      name: 'Beautylist',
      component: Beautylist
    },
    {
      path:'/Beautydetalis',
      component: Beautydetalis,
      name: 'Beautydetalis',
    },
    {
      path: '/ktvlist',
      name: 'ktvList',
      component: KtvList
    },
    {
      path: '/ktv',
      name: 'ktv',
      component: Ktv
    },
    {
      path:"/CatEye",
      component:CatEye
    },
    {
      path:"/Detailin",
      component:CatEye_Detail_in
    },
    {
      path:"/CatEye_Detail",
      component:CatEye_Detail
    },
    {
      path:"/Side_list",
      component:Side_list
    },
    {
      path:"/Side_Detail",
      component:Side_Detail
    },
    {
      path:"/delicious",
      component:Food
    }
  ]
})
