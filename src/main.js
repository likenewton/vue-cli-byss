// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store/'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

const rem = function(win) {
  let winDoc = win.document
  let winDocDoc = winDoc.documentElement
  let psdW = 750 / 100
  let evtFn = 'orientationchange' in win ? 'orientationchange' : 'resize'
  let setSize = function() {
    let pageW = winDocDoc.clientWidth || 320
    pageW > 750 && (pageW = 750)
    winDocDoc.style.fontSize = pageW / psdW + 'px'
  }
  setSize()
  win.addEventListener(evtFn, setSize)
  winDoc.addEventListener('DOMContentLoaded', setSize)
}

rem(window)
