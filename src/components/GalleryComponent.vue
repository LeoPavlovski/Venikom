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
    <div style="background-color:#ffefd5">
      <v-row>
        <v-col cols="12">
          <div style="width:90%;margin:auto">
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
                          hide-slider
                      >

                          <v-tab
                            v-for="item in items"
                            :key="item"

                        >
                         <h6 style="font-size:25px;">{{ item }}</h6>
                        </v-tab>
                      </v-tabs>
                    </template>
                  </v-toolbar>

                  <v-tabs-items v-model="tab" >
                    <v-tab-item
                        v-for="(item, index) in items"
                        :key="item"


                    >
                      <div v-if="index === 0">
                        <v-card flat>
                          <div class="d-flex align-center">
                            <v-card-text class="py-10" v-text="text0" style="font-size:20px;"></v-card-text>
                            <router-link to="/classA">
                              <v-btn color="primary" outlined class="mr-2">Види Повеќе!</v-btn>
                            </router-link>
                          </div>

                        </v-card>
                      </div>
                      <div v-if="index === 1">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text1" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" outlined class="mr-2">Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>
                      <div v-if="index === 2">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text2" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" outlined class="mr-2">Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>
                      <div v-if="index === 3">
                        <v-card flat>
                          <div class="d-flex align-center">
                          <v-card-text class="py-10" v-text="text3" style="font-size:20px;"></v-card-text>
                          <v-btn color="primary" outlined class="mr-2">Види Повеќе!</v-btn>
                          </div>
                        </v-card>
                      </div>

                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>

            </v-row>
            <div v-if="$vuetify.breakpoint.mdAndDown" class="mt-10">
            <v-carousel hide-delimiters cycle interval="5000" >
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0064.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0260.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <!-- Add more images as needed -->
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0260.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <!-- Add more images as needed -->
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row style="cursor:pointer;">
                  <v-col cols="12" sm="6" md="3">
                    <v-img src="../../public/venikom slike/IMAG0260.jpg" aspect-ratio="1" class="elevation-10"></v-img>
                  </v-col>
                  <!-- Add more images as needed -->
                </v-row>
              </v-carousel-item>
            </v-carousel>
              </div>
            <div v-if="$vuetify.breakpoint.mdAndUp">
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
            </div>


          </div>
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
      'Величина А', 'Величина Л', 'Величина М', 'Величина XL'
    ],
    text0: '"Пробајте ја Величината A наша јајца - симбол на свежина и квалитет. Набавете ги сега и уживајте во сочни и вкусни оброци. Вашиот избор за врвен стандард!"',
    text1: '\n' +
        '"Откријте ги јајцата од Величината L - идеален извор на хранливи супстанци. Со висок стандард на квалитет, овие јајца се прекрасен избор за здрава и вкусна исхрана. Побрзајте и научете зараз!"',
    text2: '"Испробајте ги јајцата од Величината M - совршен избор за економична исхрана. Споделете го вкусот на квалитетни јајца по достапни цени. Вкусни и практични за вашата кујна!"',
    text3: '\n' +
        '"Освежете ја вашата исхрана со јајцата од Величината XL - големи, сочни и богати со протеини. Изберете врвен стандард за вкус и квалитет за вашето здравје и уживајте во оброците."',
    menuIsOpen:false,
    icons: [
      'mdi-home'
        ]
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
.v-slide-group__prev{
  display:none !important;
}
</style>