export default [
    {
        path: '/configuration/application',
        name: 'Application',
        component: () => import("./Index.vue")
    },
    {
        path: '/configuration/application/update/:id',
        name: 'ApplicationUpdate',
        component: () => import("./Update.vue")
    },
]