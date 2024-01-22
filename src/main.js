import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import GalleryComponent from "@/components/GalleryComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path :'/gallery', component : GalleryComponent},
  {path:'/', component:MainComponent}
]

const router = new  VueRouter({
routes
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
