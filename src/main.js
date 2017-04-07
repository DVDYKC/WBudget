// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/theme-fresh.css";
import 'element-ui/lib/theme-default/index.css'
import VueQuillEditor from 'vue-quill-editor'
import VueCharts from 'vue-charts'
var VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(VueCharts)
//Vue.use(Vuetable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
