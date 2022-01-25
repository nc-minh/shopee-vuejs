export default [
    {
        path: '/user/account/profile',
        name: 'Profile',
        meta: {
            layout: 'IndexLayoutWithSummaryBottom',
            title: 'Profile'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Profile.vue')
    },
    {
        path: '/user/account/bank',
        name: 'Bank',
        meta: {
            layout: 'IndexLayoutWithSummaryBottom',
            title: 'Bank'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Bank.vue')
    },
    {
        path: '/user/account/address',
        name: 'Address',
        meta: {
            layout: 'IndexLayoutWithSummaryBottom',
            title: 'Address'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Address.vue')
    },
    {
        path: '/user/account/password',
        name: 'ChangePassWord',
        meta: {
            layout: 'IndexLayoutWithSummaryBottom',
            title: 'ChangePassWord'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/user/ChangePassWord.vue')
    }
]