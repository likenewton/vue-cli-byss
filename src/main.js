// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import BootstrapVue from 'bootstrap-vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/common',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

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
