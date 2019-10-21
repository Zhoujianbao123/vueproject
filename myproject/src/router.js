import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Car from '@/components/Car'

// import Comment from '@/components/info/Comment'
// import Fabulous from '@/components/info/Fabulous'
// import Letter from '@/components/info/Letter'
// import NewFollow from '@/components/info/NewFollow'

// import Concern from '@/components/home/Concern'
// import Find from '@/components/home/Find'
// import Nearby from '@/components/home/Nearby'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 首页的重定向
        {path: '/',redirect: '/home'},
        // 商城的重定向
        {path: '/store',redirect: '/store/store-recommend'},
        /**
         * 首页
         *  1.关注模块
         *  2.发现模块
         *  3.附近模块
         */
        {path: '/home',name: 'home',
            components: {default: () => import('@/views/home/index.vue'),footer: Footer},
            children: [
                {path: '',redirect: 'concern'},
                // 首页的关注模块
                {path: 'concern',name: 'concern',components: {default: () => import('@/components/home/Concern.vue')}},
                {path: ':id',name: 'concern-detail',
                    components: {default: () => import('@/components/ConcernDetail.vue'),footer: Footer}
                },
                // 首页的发现模块
                {path: 'find',name: 'find',components: {default: () => import('@/components/home/Find.vue')}},
                // 首页的附近模块
                {path: 'nearby',name: 'nearby',components: {default: () => import('@/components/home/Nearby.vue')}}
            ]
        },

        // 注册
        {path: '/register',name: 'register',components: {default: () => import('@/views/register/index.vue')}},
        // 登录
        {path: '/login',name: 'login',components: {default: () => import('@/views/login/index.vue')}},
        // 添加
        {path: '/add',name: 'add',
            components: {default: () => import('@/views/add/index.vue')},
            beforeEnter(to, from, next) {
                if (localStorage.getItem('isLogin') === 'ok') {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        // 消息
        {path: '/info',name: 'info',
            components: {default: () => import('@/views/info/index.vue'),footer:Footer},
            beforeEnter(to, from, next) {
                if (localStorage.getItem('isLogin') === 'ok') {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {path: '/comment',name: 'comment',components: {default: () => import('@/components/info/Comment.vue')}},
        {path: '/fabulous',name: 'fabulous',components: {default: () => import('@/components/info/Fabulous.vue')}},
        {path: '/letter',name: 'letter',components: {default: () => import('@/components/info/Letter.vue')}},
        {path: '/launch',name: 'launch',components: {default: () => import('@/components/info/Launch.vue')}},
        {path: '/newfollow',name: 'newfollow',components: {default: () => import('@/components/info/NewFollow.vue')}},
        {path: '/notice',name: 'notice',components: {default: () => import('@/components/info/Notice.vue')}},
        /**
         * 商城
         *  1.推荐模块
         *  2.护肤模块
         *  3.彩妆模块
         */
        {path: '/store',name: 'store',
            components: {default: () => import('@/views/store/index.vue'),footer: Footer,car:Car},
            children: [
                {path: 'store-recommend',name: 'store-recommend',components: {default: () => import('@/components/store/Recommend.vue')}},
                {path: 'store-skincare',name: 'store-skincare',components: {default: () => import('@/components/store/Skincare.vue')}},
                {path: 'store-cosmetics',name: 'store-cosmetics',components: {default: () => import('@/components/store/Cosmetics.vue')}}
            ]
        },
        {path:'/detail/:id',name:'/detail',components: {default: () => import('@/views/detail/index.vue')}},
        {
            path: '/car', name: 'car',
            components: {default: () => import('@/views/car/index.vue'), footer: Footer},
            beforeEnter(to, from, next) {
                if (localStorage.getItem('isLogin') === 'ok') {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {path: '/goods',name: 'goods',components: {default: () => import('@/components/GoodsItem.vue')}},
        {path: '/shop',name: 'shop',components: {default: () => import('@/components/ShopCartList.vue')}},
        {path: '/main',name: 'main',components: {default: () => import('@/components/Main.vue')}},
        // 用户
        {path: '/user/:id',name: 'user',
            components: {default: () => import('@/views/user/index.vue'),footer:Footer},
            beforeEnter(to, from, next) {
                if (localStorage.getItem('isLogin') === 'ok') {
                    next()
                } else {
                    next('/login')
                }
            }
            /*children: [
                {path: 'nologin',name: 'nologin',component: () => import('@/components/user/Nologin.vue')},
                {path: 'loging',name: 'loging',component: () => import('@/components/user/Loging.vue')}
            ]*/
        },
        {path: '*',component: () => import('@/views/notfound/index.vue')}

    ]
})
