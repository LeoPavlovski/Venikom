
<template>
<div>
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
  <div style="width:90%; margin:auto" class="text-center" >
  <div class="mt-10">
    <h2 style="font-size:40px;">За нас</h2>
  </div>

    <div class="mt-10">
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="5" lg="3" xl="2">
          <v-card class="text-center" elevation="5">
            <v-img src="../../public/venikom slike/za TEHNOLOGIJA U ABOUT US.jpg" width="100%" />
            <div class="overlay pa-5" >
              <p class="white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consectetur doloribus eius error, fuga magni minima natus nobis non, quaerat quis quod, soluta temporibus vitae voluptatem voluptates voluptatum!</p>
            </div>
            <p class="text-left ml-2" style="font-size:20px;">Технологија</p>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" lg="3" xl="2">
          <v-card class="text-center" elevation="5">
            <v-img src="../../public/venikom slike/ZA TIM U ABOUT US.jpg" width="100%" />
            <div class="overlay pa-5" >
              <p  class="white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consectetur doloribus eius error, fuga magni minima natus nobis non, quaerat quis quod, soluta temporibus vitae voluptatem voluptates voluptatum!</p>
            </div>
            <p class="text-left ml-2" style="font-size:20px;">Тим</p>
          </v-card>
        </v-col>

        <v-col cols="12" md="2" lg="3" xl="2">
          <v-card class="text-center" elevation="5">
            <v-img src="../../public/venikom slike/ZA U ABOUT US ZA 3 KARTA 'CEL'.jpg" width="100%" style="position:relative;" />
            <div class="overlay pa-5" >
              <p class="white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias blanditiis consectetur doloribus eius error, fuga magni minima natus nobis non, quaerat quis quod, soluta temporibus vitae voluptatem voluptates voluptatum!</p>
            </div>
            <p class="text-left ml-2" style="font-size:20px;">Цел</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data(){
    return{
      drawer:false,
    }
  },
  methods:{

  }
}
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.overlay2{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}
</style>