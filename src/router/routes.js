
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/pages', component: () => import('pages/PagesPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/SignLayout.vue'),
    children: [
      { path: '/sign-up', component: () => import('pages/SignupPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
