import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import ManagerBody from '@/components/ManagerBody'
import ManagerLeft from '@/components/manager/ManagerLeft'
import ManagerControl from '@/components/manager/ManagerControl'
import ManagerActivityEdit from '@/components/manager/ManagerActivityEdit'
import ManagerCommodityEdit from '@/components/manager/ManagerCommodityEdit'
import ManagerRight from '@/components/manager/ManagerRight'
import ManagerLogin from '@/components/login/ManagerLogin'

Vue.prototype.$ajax = axios;
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'ManagerBody',
      component: ManagerBody,
      children:[
        {
          path:'',
          name:'controlfirst',
          component:ManagerRight
        },
        {
          path:'control',
          name:'control',
          component:ManagerRight
        },
        {
          path:'managercontrol',
          name:'ManagerControl',
          component:ManagerControl
        },
        {
          path:'managerActivityEdit',
          name:'ManagerActivityEdit',
          component:ManagerActivityEdit
        },
        {
          path:'managerCommodityEdit',
          name:'ManagerCommodityEdit',
          component:ManagerCommodityEdit
        }
      ]
    },
    {
      path:'/managerLogin',
      name:'ManagerLogin',
      component:ManagerLogin
    }
  ],

})
