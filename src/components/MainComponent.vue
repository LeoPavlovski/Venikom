<template>
  <div >
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


    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="white"
        width="450"
        style="position: fixed; z-index: 2000;"
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
        <img src="http://nilethemes.com/kits1/ongla/wp-content/uploads/sites/10/2022/11/slider-1.jpg" style="width: 100%; filter:brightness(50%);" />
        <div style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); display: flex; flex-direction: column;">
          <p :style="{fontSize:$vuetify.breakpoint.mdAndDown ? '40px' : '40px'}" style="color:white;">Фарма Веником</p>
          <p :style="{fontSize:$vuetify.breakpoint.mdAndDown ? '40px' : '40px'}" v-if="$vuetify.breakpoint.mdAndUp"  style="color:white;">Вени-Ком ДООЕЛ<br v-if="$vuetify.breakpoint.smAndDown" > е компанија чија главна дејност  е производство и дистрибуција на свежи конзумни јајца</p>
        <router-link to="/classA">
          <v-btn width="200" class="ml-auto mr-auto py-7" color="primary" style="color:white; ">Види Производи!</v-btn>
        </router-link>

        </div>
      </div>
    </div>
    <div style="width:90%; margin:auto;">
      <cards-component></cards-component>
<!--      <agriculture-component></agriculture-component>-->
<!--      <science-component></science-component>-->
    </div>
    <div style="width:100%; margin:auto;">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.454838266546!2d20.986322877285897!3d41.94756456106028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fa2db6a8adb3%3A0xb8fb0d4c5ebab63d!2sVeni%20Kom!5e0!3m2!1sen!2smk!4v1705958666206!5m2!1sen!2smk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <v-card height="140px">
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
              class="text-center"
              color="#0078c9"
          >
            <router-link to="/contact">
              <h6 class="mt-10"  style="font-size:20px; cursor:pointer; color:white; text-transform:uppercase; text-decoration: underline">Контакт</h6>
            </router-link>
            <v-card-text class="white--text mt-5" style="font-size:20px;">
              {{ new Date().getFullYear() }} — <strong>Веником &#169; Сите права се задржани</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-card>
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
  },
  mounted() {
    window.scrollTo(0, 0)
  },
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