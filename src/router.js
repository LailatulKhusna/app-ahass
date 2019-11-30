import Vue from 'vue'
import Router from 'vue-router'
import multiguard from 'vue-router-multiguard'
import store from './store.js'
import Home from './views/Home.vue'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import DashboardPage from './views/Dashboard'
import InformationPage from './views/Information'
import SettingPage from './views/Setting'
import IntroPage from './views/Intro'
import FieldPage from './views/Field'
import SurveyPage from './views/Survey'
import ReviewPage from './views/Review'

Vue.use(Router)
//router berfungsi untuk menentukan halaman yang dipanggil

const auth = function (to, from, next) {
  if (store.getters.isLoggedIn) {
    next()
  } else {
    next('/welcome')
  }
}

const router = new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  routes: [{
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroPage
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: multiguard([auth]),
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: DashboardPage
    }, {
      name: 'field',
      path: 'field',
      component: FieldPage,
      props: true
    }, {
      name: 'survey',
      path: 'survey',
      component: SurveyPage,
      props: true
    }, {
      path: 'review',
      component: ReviewPage
    }, {
      path: 'information',
      component: InformationPage
    }, {
      path: 'setting',
      component: SettingPage
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ]
})

export default router
