<template>
  <div>
    <v-app-bar
        elevation="5"
        color="white"

        style="position:sticky; top:0;left:0;width:100%; z-index:1"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-menu offset-y nudge-left="102" >
        <template v-slot:activator="{ on, attrs }">
          <v-hover>
            <template>
              <v-icon
                  v-bind="attrs"
                  v-on="on"
                  class="mr-6"
                  style="cursor:pointer;"
              >
                mdi mdi-chevron-down
              </v-icon>
            </template>
          </v-hover>
        </template>
        <div style="display:flex; margin-top:20px; cursor:pointer;" class="ml-15">
          <!--          <img src="../src/assets/alb2.png" alt="albania" style="width:40px; height:40px;" >-->
        </div>

      </v-menu>

      <v-icon style="cursor:pointer;">mdi-magnify</v-icon>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="#ff6330"
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
          <v-list-item  >
            <img src="https://sentientmedia.org/wp-content/uploads/2020/07/sentient-logo.png" style="width:130px;" class="mt-3">
          </v-list-item>
          <v-spacer></v-spacer>
          <v-icon @click="drawer=false" color="black" class="mt-1 font-weight-light" style="font-size:30px; cursor:pointer;">mdi mdi-close</v-icon>
        </div>
        <v-list-item-group
            v-model="group"
            class="ml-3 fadein"
        >
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-10">
              <v-list-item-title  :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }" class="py-5 pl-5" :class="{ mytransition2: drawer  }" style="font-weight:bold; font-size:40px;">Gallery</v-list-item-title>
            </v-list-item>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-5">
              <v-list-item-title
                  class="py-3 pl-5"
                  :class="{ mytransition2: drawer }"
                  style="font-weight:bold; font-size:40px;"
                  :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }"
              >
                Climate
              </v-list-item-title>
            </v-list-item>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-5">
              <v-list-item-title class="py-3 pl-5" :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }" :class="{ mytransition2: drawer }" style="font-weight:bold; font-size:40px;">Health</v-list-item-title>
            </v-list-item>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-5">
              <v-list-item-title    :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }" :class="{ mytransition2: drawer }" class="py-3 pl-5" style="font-weight:bold; font-size:40px;">Justice</v-list-item-title>
            </v-list-item>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-5">
              <v-list-item-title    :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }" :class="{ mytransition2: drawer }" class="py-3 pl-5" style="font-weight:bold; font-size:40px;">Science</v-list-item-title>
            </v-list-item>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-list-item class="mt-5">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-title   :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }"  :class="{ mytransition2: drawer }" v-bind="attrs" v-on="on" class="py-3 pl-5 d-flex align-center justify-space-between" style="font-weight:bold; font-size:40px;">
                    About
                    <v-icon>mdi mdi-chevron-down</v-icon>
                  </v-list-item-title>
                </template>

                <v-list color="#ff6330" elevation="0" class="mr-10">
                  <v-list-item v-for="(item, index) in aboutDropdownItems" :key="index">
                    <v-list-item-title @click="handleDropdownItemClick(item)">
                      <h6 style="font-size:20px; font-weight:normal">{{ item }}</h6>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </v-hover>
        </v-list-item-group>
      </v-list>
      <v-list :style="{ marginTop: menuIsOpen ? '50px' : '0' }">
        <v-list-item-group class="ml-10">
          <v-list-item>
            <v-list-item-title class="py-3 pl-8" style="font-weight:normal; font-size:20px;">Donate</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="py-3 pl-8" style="font-weight:normal; font-size:20px;">Food And Farming Media Network</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="py-3 pl-8" style="font-weight:normal; font-size:20px;">Sentient Digital Services</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list style="margin-top:50px;">
        <div class="d-flex justify-end px-16">
          <v-list-item>
            <v-icon color="black">mdi mdi-facebook</v-icon>
          </v-list-item>
          <v-list-item>
            <v-icon color="black">mdi mdi-twitter</v-icon>
          </v-list-item>
          <v-list-item>
            <v-icon color="black">mdi mdi-youtube</v-icon>
          </v-list-item>
          <v-list-item >
            <v-icon color="black">mdi mdi-instagram</v-icon>
          </v-list-item>
          <v-list-item >
            <v-icon color="black">mdi mdi-linkedin</v-icon>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <div style="width:90%; margin:auto; padding:50px;">
      <div class="d-flex align-center justify-center">
        <img src="https://sentientmedia.org/wp-content/uploads/2020/07/sentient-logo.png" style="width:200px;" class="mt-3">
      </div>
      <div class="d-flex align-center justify-start mt-15">
        <v-list flat>
          <v-list-item-group
              v-model="group"
              class="ml-3 fadein d-flex align-center float-start"
          >
            <v-list-item >
              <v-hover v-slot="{ hover }">
                <router-link to="/gallery" class="text-decoration-none">
                  <v-list-item-title
                      style="font-weight:bold; font-size:40px;"
                      :style="{'color' : hover? '#ff6330' : ''}"
                      class="wordTransition"
                  >Gallery
                  </v-list-item-title>
                </router-link>

              </v-hover>

            </v-list-item>
            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title
                    style="font-weight:bold; font-size:40px;"
                    :style="{'color' : hover? '#ff6330' : ''}"
                    class="wordTransition"
                >
                  Climate
                </v-list-item-title>
              </v-hover>

            </v-list-item>

            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title   style="font-weight:bold; font-size:40px;"
                                     :style="{'color' : hover? '#ff6330' : ''}"
                                     class="wordTransition">Health</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title       style="font-weight:bold; font-size:40px;"
                                         :style="{'color' : hover? '#ff6330' : ''}"
                                         class="wordTransition">Justice</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title      style="font-weight:bold; font-size:40px;"
                                        :style="{'color' : hover? '#ff6330' : ''}"
                                        class="wordTransition">Science</v-list-item-title>
              </v-hover>
            </v-list-item>
          </v-list-item-group>
        </v-list>


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