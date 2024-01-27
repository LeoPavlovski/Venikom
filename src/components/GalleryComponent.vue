<template>
  <div>
    <v-app-bar
        elevation="5"
        color="white"
        elevate-on-scroll
        style="position:sticky; top:0;left:0;width:100%; z-index:1"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div style="display:flex; align-items:center; justify-content: center ">
        <img src="../assets/macedonia.png" alt="macedonia" style="width:30px; margin-right:5px;" >
      </div>

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
              <router-link to="/" class="text-decoration-none">
                <v-list-item class="mt-10">
                  <v-list-item-title  :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }" class="py-5 pl-5" :class="{ mytransition2: drawer  }" style="font-weight:bold; font-size:40px;">Дома</v-list-item-title>
                </v-list-item>
              </router-link>
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
    <div style="background-color:#ffefd5">
      <v-row>
        <v-col cols="12">
          <v-container>
            <v-row>
              <v-col cols="12">
                <h6 class="text-left" style="font-size:50px;">Галерија</h6>
                <div class="d-flex">
                 <p style="font-size:30px;">Одберете го секогаш најдоброто !</p>
                </div>
                <v-card>
                  <v-toolbar
                      color="blue"
                      dark
                      flat
                  >

                    <v-toolbar-title style="font-size:30px;">Различни типови на јајца</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <template v-slot:extension>
                      <v-tabs
                          v-model="tab"
                          align-with-title
                      >
                        <v-tabs-slider color="black"></v-tabs-slider>

                        <v-tab
                            v-for="item in items"
                            :key="item"
                        >
                         <h6 style="font-size:25px;">{{ item }}</h6>
                        </v-tab>
                      </v-tabs>
                    </template>
                  </v-toolbar>

                  <v-tabs-items v-model="tab">
                    <v-tab-item
                        v-for="(item, index) in items"
                        :key="item"
                    >
                      <div v-if="index === 0">
                        <v-card flat>
                          <div class="d-flex align-center">
                            <v-card-text class="py-10" v-text="text0" style="font-size:20px;"></v-card-text>
                            <v-btn color="primary" outlined>Види Повеќе!</v-btn>
                          </div>

                        </v-card>
                      </div>
                      <div v-if="index === 1">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text1" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" style="font-size:20px;" outlined>Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>
                      <div v-if="index === 2">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text2" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" outlined>Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>
                      <div v-if="index === 3">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text3" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" outlined>Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>

                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>

            </v-row>

            <v-carousel hide-delimiters cycle interval="5000">
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0064.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0078.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0238.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0243.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0260.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0263.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0251.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0243.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <!-- Add more images as needed -->
                </v-row>
              </v-carousel-item>
            </v-carousel>
            <v-carousel hide-delimiters cycle interval="5000">
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0244.jpg" class="elevation-10" aspect-ratio="1"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0245.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0249.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0251.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0244.jpg" class="elevation-10" aspect-ratio="1"/>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0245.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0249.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0251.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
            <v-carousel hide-delimiters cycle interval="5000">
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0064.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0078.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0238.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0243.jpg" class="elevation-10" aspect-ratio="1"></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0260.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0263.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0251.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0243.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <!-- Add more images as needed -->
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.454838266546!2d20.986322877285897!3d41.94756456106028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fa2db6a8adb3%3A0xb8fb0d4c5ebab63d!2sVeni%20Kom!5e0!3m2!1sen!2smk!4v1705958666206!5m2!1sen!2smk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <v-card height="150px">
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
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text" style="font-size:30px;">
            {{ new Date().getFullYear() }} — <strong>Веником &#169; Сите права се задржани</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>

</template>
<script>

export default {

  data: () => ({
    drawer: false,
    group: null,
    images: [
      { src: "../../public/venikom slike/IMAG0064.jpg", title: "Image 1" },
      { src: "../../public/venikom slike/IMAG0078.jpg", title: "Image 2" },
      { src: "../../public/venikom slike/IMAG0238.jpg", title: "Image 3" },
      // Add more images with titles as needed
    ],
    lightbox: false,
    lightboxIndex: 0,
    aboutDropdownItems: ['Mission', 'People', 'Volunteer', 'Contact'],
    countryOptions: [
      { value: 'macedonia', text: 'Macedonia', image: require('@/assets/macedonia.png') },
      // Add more countries as needed
    ],
    tab: null,
    items: [
      'Класа А', 'Класа Л', 'Класа М', 'Класа XL'
    ],
    text0: 'Податоци за јајцата Класа А',
    text1: 'Податоци за јајцата Класа Л',
    text2: 'Податоци за јајцата Класа М',
    text3: 'Податоци за јајцата Класа XL',
    menuIsOpen:false,
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
  }),
  methods:{
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightbox = true;
    },
    closeLightbox() {
      this.lightbox = false;
    },

    handleDropdownItemClick(item) {
      // Implement the desired action when a dropdown item is clicked
      console.log(`Clicked on ${item}`);
    },
  },
  computed: {
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
};
</script>
<style >

</style>