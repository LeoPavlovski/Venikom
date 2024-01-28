<template>
  <div >
    <v-app-bar
        elevation="5"
        color="white"
        style="position:sticky; top:0;left:0;width:100%; z-index:1"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Дома</v-btn>
      <v-btn to="/gallery" text>Галерија</v-btn>
      <v-btn to="/classA" text>Производи</v-btn>
      <v-btn to="/aboutus" text>За Нас</v-btn>
      <v-btn to="/contact" text>Контакт</v-btn>

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
      <v-list style="margin-top:50px;">
        <div class="" style="position:absolute;left:30px;bottom:20%;">
          <v-list-item>
            <a href="https://www.facebook.com/venikomdooel" target="_blank" class="social-icon-link">
              <v-tooltip right color="#0078c9" min-width="200">
                <template v-slot:activator="{on}">
                  <v-icon v-on="on" color="#0078c9">mdi mdi-facebook</v-icon>
                </template>
                <p class="text-center">Facebook</p>
              </v-tooltip>

            </a>
          </v-list-item>
          <v-list-item>
            <a href="https://www.google.com/maps/place/Veni+Kom/@41.9475645,20.9840269,17z/data=!3m1!4b1!4m6!3m5!1s0x1353fa2db6a8adb3:0xb8fb0d4c5ebab63d!8m2!3d41.9475606!4d20.9888978!16s%2Fg%2F11r8cm_ks?entry=ttu" target="_blank" class="social-icon-link">
              <v-tooltip right color="#0078c9" min-width="200">
                <template v-slot:activator="{on}">
                  <v-icon v-on="on" color="#0078c9">mdi mdi-map-marker</v-icon>
                </template>
                <p class="text-center">Локација</p>
              </v-tooltip>
            </a>
          </v-list-item>
        </div>
      </v-list>
      <v-list-item>
        <img class="mx-auto" style="width:150px; margin-top:170px;"  src="../../public/venikomlogo.png"/>
      </v-list-item>
      <v-list-item>
      </v-list-item>
    </v-navigation-drawer>
    <div style="width:90%; margin:auto; padding:50px;">
      <div class="d-flex align-center justify-center">
       <img style="width:100px;" src="../../public/VENIKOM POCETNA LOGO 2 VERZIJA.svg" >
      </div>
      <v-row>
        <v-col
            v-for="(image, index) in images"
            :key="index"
            cols="12"
            md="4"
            sm="4"
            xs="12"
            lg="4"
            class="mt-15"
        >
          <v-img
              v-if="$vuetify.breakpoint.mdAndUp"
              style="cursor:pointer;"
              :src="image.src"
              :style="{ height: index === 0 ? '400px' : '150px', width: index === 0 ? '100%' : '100%' }"
              class="d-flex align-center justify-center"
              :class="{ 'd-none': $vuetify.breakpoint.mdAndUp }"
          />
          <v-img
              v-else
              style="cursor:pointer;"
              :src="image.src"
              height="300px"
              width="300px"
              class="d-flex"
              :class="{ 'd-flex': $vuetify.breakpoint.mdAndDown }"
          />
          <div v-if="index === 0">
            <div class="mt-5">
              <h6 style="font-size:20px;">
                Reported | Agriculture
              </h6>
              <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">8 Alternative Protein <br> Market Predictions for 2024</h6>
              <h6 style="font-size:15px;">By Björn Ólafsson</h6>
              <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
            </div>
          </div>
          <div v-if="index === 1">
            <div class="mt-5">

              <h6 style="font-size:20px;">
                Reported | Agriculture
              </h6>
              <h6 style="font-size:25px; color:black; margin-bottom:30px;" class="mt-5 wordTransition">8 Alternative Protein <br> Market Predictions for 2024</h6>
              <h6 style="font-size:15px;">By Björn Ólafsson</h6>
              <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
              <img src="https://placekitten.com/800/400" alt="Random Image" class="img-fluid" style="  width: 100%; max-height: 500px; object-fit: cover; ">
              <h6 style="font-size:20px;">
                Analysis
                |
                Health
              </h6>
              <h6 style="font-size:25px; color:black; margin-bottom:30px;" class="mt-5 wordTransition">Vegan Documentaries Like ‘You Are What You Eat’ Seem Damned If They Do or Don’t</h6>
              <h6 style="font-size:15px;">By Jessica Scott-Reid</h6>
              <h6 style="font-size:15px;">January 17, 2024 - 5 min read</h6>
            </div>
          </div>
          <div v-if="index === 2">
            <div class="mt-5">
              <h6 style="font-size:20px;">
                Explainer
                |
                Health
              </h6>
              <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">Colostrum Claims To Be a <br> Superfood — But It’s Meant for Newborn Calves</h6>
              <h6 style="font-size:15px;">By Björn Ólafsson</h6>
              <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
            </div>
            <div class="mt-5">
              <h6 style="font-size:20px;">
                Explainer
                |
                Health
              </h6>
              <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">Colostrum Claims To Be a <br> Superfood — But It’s Meant for Newborn Calves</h6>
              <h6 style="font-size:15px;">By Björn Ólafsson</h6>
              <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
            </div>

          </div>
        </v-col>
      </v-row>
      <cards-component></cards-component>
      <agriculture-component></agriculture-component>
      <science-component></science-component>
    </div>
  </div>


</template>

<script>
import CardsComponent from './CardsComponent.vue'
import AgricultureComponent from './AgricultureComponent.vue'
import vuetify from "@/plugins/vuetify";
import {defineComponent} from "vue";
import ScienceComponent from "@/components/ScienceComponent.vue";

export default defineComponent({
  components:{
    ScienceComponent,
  CardsComponent,
    AgricultureComponent
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
</style>