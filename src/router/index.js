import Vue from 'vue'
import Router from 'vue-router'
import ManagerBody from '@/components/ManagerBody'
import ManagerLeft from '@/components/manager/ManagerLeft'
import ManagerControl from '@/components/manager/ManagerControl'
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
          path:'managercontrol',
          name:'ManagerControl',
          component:ManagerControl
        }
      ]


    },

    {
      path:'/managercontrol',
      name:'ManagerControl',
      component:ManagerControl
    }
  ]
})
