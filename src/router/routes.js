
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/pages', component: () => import('pages/PagesPage.vue') },
      { path: '/main', component: () => import('pages/MainPages.vue') }
    ]
  },
  {
    path: '/sign-up',
    component: () => import('pages/SignupPage.vue')
  },
  {
    path: '/sign-in',
    component: () => import('pages/SigninPage.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
