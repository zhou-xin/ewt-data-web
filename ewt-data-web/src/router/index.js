import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/product'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '工厂数据平台' },
            children:[
                {
                    path: '/product',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '产品' }
                },
                {
                    path: '/purchase',
                    component: resolve => require(['../components/page/BaseChartboard.vue'], resolve),
                    meta: { title: '采购供应商协同平台' }
                },
                {
                    path: '/findim',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '找智造产业链协同平台' }
                },
                {
                    path: '/finance',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '中金财供应链金融' }
                },
                {
                    path: '/sulotion',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '解决方案' }
                },
                {
                    // 富文本编辑器组件
                    path: '/carSulotion',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '汽车行业解决方案' }
                },
                {
                    // markdown组件
                    path: '/partsSulotion',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '零部件行业解决方案' }    
                },
                {
                    // 图片上传组件
                    path: '/mechSulotion',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '机械与装备制造行业解决方案' }   
                },
                {
                    // vue-schart组件
                    path: '/cloudServer',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '云服务' }
                },
                {
                    // 拖拽列表组件
                    path: '/edgeData',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '边缘及业务数据汇聚' }
                },
                {
                    // 权限页面
                    path: '/factoryData',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '工业大数据存储'}
                },
                {
                    // 权限页面
                    path: '/industryData',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '工业大数据存储'}
                },
                {
                    // 权限页面
                    path: '/screenData',
                    component: resolve => require(['../components/page/DataView.vue'], resolve),
                    meta: { title: '工业大数分析-监控大屏'}
                },
                {
                    // 权限页面
                    path: '/viewBox',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '时视BOX'}
                },
                {
                    // 权限页面
                    path: '/viewSystem',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '时视系统'}
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
