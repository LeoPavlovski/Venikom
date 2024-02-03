<template>
  <div >
    <v-app-bar
        elevation="5"
        color="white"
        style="position:sticky; top:0;left:0;width:100%; z-index:1"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.smAndDown">
        <v-btn to="/" text>Дома</v-btn>
        <v-btn to="/gallery" text>Галерија</v-btn>
        <v-btn to="/classA" text>Производи</v-btn>
        <v-btn to="/aboutus" text>За Нас</v-btn>
        <v-btn to="/contact" text>Контакт</v-btn>
      </div>


    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="white"
        width="450"
        style="position: fixed; z-index: 2;"
        class="myTransition"
        mobile-breakpoint="1"
    >
      <v-list
          nav
          dense
          flat
      >
        <div class="d-flex align-center justify-space-between">
          <v-spacer></v-spacer>
          <v-icon @click="drawer=false" color="black" class="mt-1 font-weight-light" style="font-size:30px; cursor:pointer;">mdi mdi-close</v-icon>
        </div>
        <v-list-item-group
            v-model="group"
            class="ml-3 fadein"
        >
          <v-hover v-slot="{ hover }">
            <router-link to="/" class="text-decoration-none">
              <v-list-item class="mt-10">
                <v-list-item-title  :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0D47A1' : 'white' }" class="py-5 pl-5" :class="{ mytransition2: drawer  }" style="font-weight:bold; font-size:40px;">Дома</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <router-link to="/gallery" class="text-decoration-none">
              <v-list-item class="mt-5">
                <v-list-item-title  :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0D47A1' : 'white' }" class="py-5 pl-5" :class="{ mytransition2: drawer  }" style="font-weight:bold; font-size:40px;">Галерија</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <router-link to="/classA">
              <v-list-item class="mt-5">
                <v-list-item-title
                    class="py-3 pl-5"
                    :class="{ mytransition2: drawer }"
                    style="font-weight:bold; font-size:40px;"
                    :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0078c9' : 'white' }"
                >
                  Производи
                </v-list-item-title>
              </v-list-item>
            </router-link>

          </v-hover>
          <v-hover v-slot="{ hover }">
            <router-link to="/aboutus">
              <v-list-item class="mt-5">
                <v-list-item-title class="py-3 pl-5" :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0D47A1' : 'white' }" :class="{ mytransition2: drawer }" style="font-weight:bold; font-size:40px;">За нас</v-list-item-title>
              </v-list-item>
            </router-link>

          </v-hover>
          <v-hover v-slot="{ hover }">
          <router-link to="/contact" class="text-decoration-none">
            <v-list-item class="mt-5">
              <v-list-item-title   :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0D47A1' : 'white' }"  :class="{ mytransition2: drawer }" v-bind="attrs" v-on="on" class="py-3 pl-5 d-flex align-center justify-space-between" style="font-weight:bold; font-size:40px;">
                Контакт
                <v-icon>mdi mdi-chevron-down</v-icon>
              </v-list-item-title>
            </v-list-item>
          </router-link>
          </v-hover>
        </v-list-item-group>
      </v-list>
      <v-list :style="{marginTop  : $vuetify.breakpoint.smAndDown  ? '0px' : '100px'}">
        <div class="d-flex align-center flex-column">
          <v-list-item>
            <a href="https://www.facebook.com/venikomdooel" target="_blank">
                  <v-icon v-on="on" color="#0078c9" class="ml-3">mdi mdi-facebook</v-icon>
              <p>Facebook</p>
            </a>
          </v-list-item>
          <v-list-item>
            <a href="https://www.google.com/maps/place/Veni+Kom/@41.9475645,20.9840269,17z/data=!3m1!4b1!4m6!3m5!1s0x1353fa2db6a8adb3:0xb8fb0d4c5ebab63d!8m2!3d41.9475606!4d20.9888978!16s%2Fg%2F11r8cm_ks?entry=ttu" target="_blank" class="social-icon-link">
                  <v-icon v-on="on" color="#0078c9" class="ml-3">mdi mdi-map-marker</v-icon>
                <p class="text-center">Локација</p>
            </a>
          </v-list-item>
        </div>
      </v-list>
      <v-list-item>
        <img :style="{marginTop: $vuetify.breakpoint.smAndDown ?  '0px' : '200px'}" class="mx-auto" style="width:150px;"  src="../../public/venikomlogo.png"/>
      </v-list-item>
      <v-list-item>
      </v-list-item>
    </v-navigation-drawer>
    <div style="width:100%; margin:auto;">
      <div style="position:relative; text-align:center;">
        <img src="http://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/slider-1.jpg" style="width: 100%; filter:brightness(50%);" :style="{height  : $vuetify.breakpoint.smAndDown  ? '500px' : 'auto'}" />
        <div style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); display: flex; flex-direction: column;">
          <p :style="{fontSize:$vuetify.breakpoint.mdAndDown ? '40px' : '40px'}" style="color:white;">Веником Фарма</p>
          <p :style="{fontSize: $vuetify.breakpoint.mdAndDown ? '30px' :'40px'}" style="color:white;">Вени-Ком ДООЕЛ<br v-if="$vuetify.breakpoint.smAndDown" > е компанија чија главна дејност  е производство и дистрибуција на свежи конзумни јајца</p>
          <v-btn width="200" class="ml-auto mr-auto py-7" color="primary" style="color:white; ">Види Производи!</v-btn>
        </div>
      </div>
    </div>
    <div style="width:90%; margin:auto;">
      <cards-component></cards-component>
<!--      <agriculture-component></agriculture-component>-->
<!--      <science-component></science-component>-->
    </div>

  </div>


</template>

<script>
import CardsComponent from './CardsComponent.vue'
import vuetify from "@/plugins/vuetify";
import {defineComponent} from "vue";


export default defineComponent({
  components:{
    // ScienceComponent,
  CardsComponent,
    // AgricultureComponent
  },
  data(){
    return{
      drawer: false,
      images: [
        { src: 'https://sentientmedia.org/wp-content/uploads/2021/02/Story-Images-77-740x600.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2024/01/Story-Images-76-370x230.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2024/01/Story-Images-74-370x230.png' },
      ]
    }
  },
  methods: {
    vuetify() {
      return vuetify
    }
  }
})

</script>

<style scoped>
.wordTransition {
  background: linear-gradient(#ff6330, #ff6330) left no-repeat, black;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease-in-out;
}
.wordTransition:hover{
  background-size: 100% 100%;
}
.custom-img {
  width: 100%;
  height: auto;
}
::v-deep .v-navigation-drawer__content {
  overflow: hidden
}
.filter-grayscale{
  transition:0.5s;
}
.filter-grayscale:hover{
  filter:grayscale(25);
}
</style>