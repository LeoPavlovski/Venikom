<template>
  <v-app>
    <router-view>
    <v-main>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            color="#ff6330"
            width="450"
            style="z-index:2"
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
        <main-component></main-component>
    </v-main>
  </router-view>
  </v-app>
</template>

<script>

import MainComponent from './components/MainComponent.vue'
export default {
  components:{
    MainComponent,
  },

  data: () => ({
     drawer: false,
    group: null,
    aboutDropdownItems: ['Mission', 'People', 'Volunteer', 'Contact'],
    countryOptions: [
      { value: 'macedonia', text: 'Macedonia', image: require('@/assets/macedonia.png') },
      // Add more countries as needed
    ],
    menuIsOpen:false,
  }),
  methods:{
    handleDropdownItemClick(item) {
      // Implement the desired action when a dropdown item is clicked
      console.log(`Clicked on ${item}`);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
body,html,h1,h2,h3,h4,div,span {
  font-family: 'Oswald', sans-serif;
}
.myTransition{
  transition:0.5s;
}
.mytransition2{
  transform:translateX(50px);
  transition:1s;
}

.v-menu__content{
  box-shadow: none !important;
}
.v-expand-transition-enter-active,
.v-expand-transition-leave-active {
  transition: opacity 0.3s ease-out, max-height 0.3s ease-out;
}

.v-expand-transition-enter,
.v-expand-transition-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>

<script setup>
</script>