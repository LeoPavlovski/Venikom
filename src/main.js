import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify'
import GalleryComponent from "@/components/GalleryComponent.vue";
import MainComponent from "@/components/MainComponent.vue";
import ClassAComponent from "@/components/ClassAComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path :'/gallery', component : GalleryComponent},
  {path:'/classA',component:ClassAComponent },
  {path:'/', component:MainComponent},
  {path:'/contact', component:ContactComponent},
  {path:'/aboutus', component:AboutComponent}
]

const router = new  VueRouter({
routes
});
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
