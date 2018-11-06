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

Vue.use(Router);

const router = new Router({
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
        // {
        //   path:'managerActivityEdit',
        //   name:'ManagerActivityEdit',
        //   component:ManagerActivityEdit
        // },
        {path: "managerActivityEdit",name:'ManagerActivityEdit', component: ManagerActivityEdit,children:[
            {path:"",component:ManagerActivityEdit},
            {path:":activityId",component:ManagerActivityEdit}
          ]},

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
    },
    {
      path: '**',   // 错误路由
      redirect: '/control'   //重定向
    },
  ],
});
// //全局路由守卫
router.beforeEach((to, from, next) => {
  const nextRoute =['controlfirst','ManagerBody','control','ManagerControl','ManagerActivityEdit','ManagerCommodityEdit']
  let isLogin = localStorage.getItem("managerId");
  if(nextRoute.indexOf(to.name)>=0){
    if(!isLogin){
      console.log('请先登录');
      router.push({name:'ManagerLogin'});
    }
  }
  if(to.name ==='ManagerLogin'){
    if(isLogin){
      router.push({name:'ManagerControl'});
    }
  }
  next();
});
export default router;
