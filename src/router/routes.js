
import MainLayout from 'layouts/MainLayout'
import CreateMessage from 'pages/CreateMessage'
import PageAuth from 'pages/PageAuth'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'CreateMessage', name:"createMessage", component: () => import('pages/CreateMessage.vue') },
      { path: 'StatusContact', name: "StatusContact", component: () => import('pages/StatusContact.vue') },
      { path: 'Auth', name: "PageAuth ", component: () => import('pages/PageAuth.vue') }


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
