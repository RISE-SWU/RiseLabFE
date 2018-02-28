import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import './scss/element-variables.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
