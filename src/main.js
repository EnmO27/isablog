import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue' // Importa BootstrapVue
import 'bootstrap/dist/css/bootstrap.css' // Importa los estilos de Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' // Importa los estilos de BootstrapVue

Vue.config.productionTip = false

Vue.use(BootstrapVue) // Usa BootstrapVue en tu aplicación

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')