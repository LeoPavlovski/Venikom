
<template>
<div>
  <v-app-bar
      elevation="5"
      color="#0078c9"
      style=" position:sticky; top:0;left:0;width:100%; z-index:1"
  >
    <v-app-bar-nav-icon style="color:white;" @click="drawer = true"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div v-if="!$vuetify.breakpoint.smAndDown">
      <v-btn style="color:white;" to="/" text>Почетна</v-btn>
      <v-btn style="color:white;" to="/gallery" text>Галерија</v-btn>
      <v-btn style="color:white;" to="/classA" text>Производи</v-btn>
      <v-btn style="color:white;" to="/aboutus" text>За Нас</v-btn>
      <v-btn style="color:white;" to="/contact" text>Контакт</v-btn>
    </div>


  </v-app-bar>  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="white"
      width="450"
      style="position: fixed; z-index: 200;"
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
  <div style="width:90%; margin:auto" class="text-center" >
  <div class="mt-10">
    <h2 style="font-size:40px;">За нас</h2>
  </div>

    <div class="mt-10">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="4" style="display: flex; flex-direction: column;">
            <div>
              <img src="../../public/venikom slike/proizvodi/TARGET PHOTO.png" width="auto" height="500">
            </div>
            <div class="flex-grow-1">
              <v-card-text style="font-size:20px;">
                Вени-Ком ДООЕЛ како компанија започна да работи во 2003та година. Компанијата располага со сопствена живинарска фарма за производство на висококвалитетни свежи конзумни јајца од кокошка со капацитет од 24.000 јајца на ден.
              </v-card-text>
            </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" style="display: flex; flex-direction: column;">
            <div>
              <img src="../../public/venikom slike/proizvodi/TEHNOLOGIJA SLIKA.png" width="auto" height="500">
            </div>
            <div class="flex-grow-1">
              <v-card-text style="font-size:20px;">
                Фармата е лоцирана во исклучително еколошки чиста и здрава средина, во ненаселено место на патот од Челопек кон Брвеница. Вени Ком поседува и класирен центар за сортирање и пакување на јајца.
              </v-card-text>
            </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="4" style="display: flex; flex-direction: column;">
            <div>
              <img src="../../public/venikom slike/proizvodi/TIM PHOTO.png" height="500" width="auto">
            </div>
            <div class="flex-grow-1">
              <v-card-text style="font-size:20px;">
                Во склоп на фармата има и погон за производство на сточна храна за сопствени потреби. Храната со која се храни живината е квалитетна и здрава, редовно се испитува и ги исполнува највисоките стандарди за производство пропишани од надлежните институции.
              </v-card-text>
            </div>
        </v-col>
      </v-row>
      <div v-if="$vuetify.breakpoint.xs" class="my-5">
        <img  :style="{marginTop: $vuetify.breakpoint.xs ? '10px' : '0px'}"  style="width:150px;"  src="../../public/venikomlogo.png"/>
        <div>
          <p style="color:black;" class="mt-5"> Вени-Ком ДООЕЛ</p>
         </div>
      </div>
    </div>
  </div>
  <div :style="{marginTop: $vuetify.breakpoint.xs  ? '0px' : '360px'}">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.454838266546!2d20.986322877285897!3d41.94756456106028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fa2db6a8adb3%3A0xb8fb0d4c5ebab63d!2sVeni%20Kom!5e0!3m2!1sen!2smk!4v1705958666206!5m2!1sen!2smk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <v-card>
      <v-footer
          class="ma-0 pa-0"
          absolute
          v-bind="localAttrs"
      >
        <v-card
            flat
            tile
            width="100%"
            height="150"
            class="blue lighten-1 text-center"
        >
          <v-card-text>
            <v-btn
                v-for="(icon,index) in icons"
                :key="icon"
                class="mx-4"
                icon
            >
              <div v-if="index ===  0 ">
                <router-link to="/">
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </router-link>

              </div>
            </v-btn>
          </v-card-text>
          <router-link to="/contact">
            <v-chip light  color="white" style="font-size:20px; cursor:pointer;">Контакт</v-chip>
          </router-link>
          <v-card-text class="white--text mt-5">
            {{ new Date().getFullYear() }} — <strong>Веником &#169; Сите права се задржани</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
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

  }, computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
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