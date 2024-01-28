<template>
  <div>
    <v-app-bar
        elevation="5"
        color="white"

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
        color="white"
        width="450"
        style="z-index:100; position:fixed;"
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
            <router-link to="/gallery">
              <v-list-item class="mt-5">
                <v-list-item-title
                    class="py-3 pl-5"
                    :class="{ mytransition2: drawer }"
                    style="font-weight:bold; font-size:40px;"
                    :style="{ 'background-color': hover ? 'white' : '#0D47A1' , 'color' :hover? '#0D47A1' : 'white' }"
                >
                  Галерија
                </v-list-item-title>
              </v-list-item>
            </router-link>
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

<!--                <v-list color="#ff6330" elevation="0" class="mr-10">-->
<!--                  <v-list-item v-for="(item, index) in aboutDropdownItems" :key="index">-->
<!--                    <v-list-item-title @click="handleDropdownItemClick(item)">-->
<!--                      <h6 style="font-size:20px; font-weight:normal">{{ item }}</h6>-->
<!--                    </v-list-item-title>-->
<!--                  </v-list-item>-->
<!--                </v-list>-->
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
    <div style="width:90%; margin:auto" class="text-center mt-10">
      <h6 style="font-size:40px;">Производи</h6>

        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" sm="6" md="6" class="order-1 order-sm-2">
            <v-img src="../../public/venikom slike/proizvodi/a6L.png"></v-img>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="order-1 order-lg-2 order-xl-2 order-md-2 order-sm-2" >
            <v-card flat>
              <h5 class="pt-10" style="font-size:20px;">
                Класа А (Величина Л)
              </h5>
              <h5 style="padding:40px; font-size:18px;">
                Класа A ја претставува највисоката квалитет на јајца. Овие свежи и здрави производи гарантираат врвен стандард во исхраната, бидејќи се богати со витамини, минерали и висококвалитетни протеини. Изберете Класа A за вкусни и хранливи оброци.
              </h5>
            </v-card>
          </v-col>
          <!--        <v-col cols="12" sm="6" md="4">-->
          <!--          <v-img src="../../public/venikom slike/proizvodi/a6L.png" aspect-ratio="1"></v-img>-->
          <!--        </v-col>-->
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" sm="6" md="6" class="order-2 order-sm-2">
            <v-card flat>
              <h5 class="pt-10" style="font-size:20px;">
                Класа А (Величина М)
              </h5>
              <h5 style="padding:40px; font-size:18px;">
                Класа A ја претставува највисоката квалитет на јајца. Овие свежи и здрави производи гарантираат врвен стандард во исхраната, бидејќи се богати со витамини, минерали и висококвалитетни протеини. Изберете Класа A за вкусни и хранливи оброци.
              </h5>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="order-1 order-sm-2">
            <v-img src="../../public/venikom slike/proizvodi/a6M.png" />
          </v-col>
          <!--        <v-col cols="12" sm="6" md="4">-->
          <!--          <v-img src="../../public/venikom slike/proizvodi/a6L.png" aspect-ratio="1"></v-img>-->
          <!--        </v-col>-->

        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" sm="6" md="6">
            <v-img src="../../public/venikom slike/proizvodi/a20L.png" /></v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card flat>
              <h5 class="pt-10" style="font-size:20px;">
                Класа А (Величина L)
              </h5>
              <h5 style="padding:40px; font-size:18px;">
                Класа A ја претставува највисоката квалитет на јајца. Овие свежи и здрави производи гарантираат врвен стандард во исхраната, бидејќи се богати со витамини, минерали и висококвалитетни протеини. Изберете Класа A за вкусни и хранливи оброци.
              </h5>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" sm="6" md="6" class="order-2 order-sm-2">
            <v-card elevation="0">
              <h5 class="pt-10" style="font-size:20px;">
                Класа А (Величина XL)
              </h5>
              <h5 style="padding:40px; font-size:18px;">
                Класа A ја претставува највисоката квалитет на јајца. Овие свежи и здрави производи гарантираат врвен стандард во исхраната, бидејќи се богати со витамини, минерали и висококвалитетни протеини. Изберете Класа A за вкусни и хранливи оброци.
              </h5>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6" class="order-1 order-sm-2">

            <v-img src="../../public/venikom slike/proizvodi/a30XL.png"/></v-col>
        </v-row>
        <v-btn
            @click="clickedButton"
            class="ma-2"
            fab
            dark
            color="indigo"
        >
          <v-icon dark :class="{'mdi mdi-minus' : buttonClicked, 'mdi mdi-plus' : !buttonClicked}">
          </v-icon>
        </v-btn>

        <div v-if="this.buttonClicked">
          <v-row style="margin-top:50px;">
            <v-col cols="12" sm="4" md="4">
              <v-img src="../../public/venikom slike/proizvodi/a6L.png" class="eggTransition"></v-img>
              <h5 style="font-size:19px;">Величина L</h5>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-img src="../../public/venikom slike/proizvodi/a6M.png" class="eggTransition"></v-img>
              <h5 style="font-size:19px;">Величина М</h5>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-img src="../../public/venikom slike/proizvodi/a6XL.png" class="eggTransition"></v-img>
              <h5 style="font-size:19px;">Величина ХЛ</h5>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="4" md="3">
              <v-img src="../../public/venikom slike/proizvodi/a6M.png" aspect-ratio="2"/><h5 style="font-size:19px;">Величина M</h5>
            </v-col>
            <v-col cols="12" sm="4" md="3">
              <v-img src="../../public/venikom slike/proizvodi/a10M.png" aspect-ratio="2"/><h5 style="font-size:19px;">Величина М</h5>
            </v-col>
            <v-col cols="12" sm="4" md="3">
              <v-img src="../../public/venikom slike/proizvodi/a15M.png" /><h5 style="font-size:19px;">Величина M</h5>
            </v-col>
            <v-col cols="12" sm="4" md="3">
              <div>
                <v-img v-if="$vuetify.breakpoint.mdAndUp" src="../../public/venikom slike/proizvodi/a30M.png" aspect-ratio="2"/><h5 v-if="$vuetify.breakpoint.mdAndUp" style="font-size:19px;">Величина ХЛ</h5>
                <v-img v-if="$vuetify.breakpoint.smAndDown" src="../../public/venikom slike/proizvodi/a30M.png"/>
                <h5 style="font-size:19px;" v-if="$vuetify.breakpoint.smAndDown">Величина ХЛ</h5>
              </div>

            </v-col>
          </v-row>
      </div>
      <div class="mt-10">
        <h6 style="font-size:40px;">Наши Потрошувачи</h6>
        <v-row class="d-flex align-center justify-space-between">
          <v-col cols="6" sm="2" md="4" lg="2" class="text-center">
            <v-img src="https://iconape.com/wp-content/png_logo_vector/vero-logo.png" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
                   class="logoHover mx-auto"></v-img>
          </v-col>
          <v-col cols="6" sm="2" md="4" lg="2" class="text-center" style="margin:0 !important;">
            <v-img src="https://visitmacedonia.eu/wp-content/uploads/2019/09/ramstore.jpg" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
                   class="logoHover mx-auto"></v-img>
          </v-col>
          <v-col cols="6" sm="2" md="4" lg="2" class="text-center">
            <v-img src="https://static.wixstatic.com/media/6e4219_6d0605338b6b4bf9a5abfa2ccf8cca06~mv2.png" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
                   class="logoHover mx-auto"></v-img>
          </v-col>
          <v-col cols="6" sm="2" md="4" lg="2" class="text-center">
            <v-img src="https://kariera.mk/uploads/companies/pk8vCJ9s9UaBFsOKOu5dhg-large.jpg" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs  ? '100%' : '100%' }"
                   class="logoHover mx-auto"></v-img>
          </v-col>
        </v-row>


        </div>
      <div style="margin-top:50px;">
        <h6 style="font-size:40px;">Дистрибуција</h6>
        <v-row class="d-flex justify-center align-center" align="center">
          <v-col xs="12" sm="6">
            <v-img src="../../public/venikom slike/'POCETNA' KOMBE .png" />
          </v-col>
          <v-col xs="12" sm="6">
            <div class="text-h6 black--text font-weight-bold">
              Дистрибутивни Услуги:
            </div>
            <div class="text-body-1 black--text font-weight-medium">
              Нашиот оптимизиран процес на дистрибуција гарантира дека ќе добиете своите јајца брзо и во оптимална состојба. Користиме добро утврдена мрежа за испорака на свежи јајца на вашата локација со најголема внимателност. Нашата флота за достава е опремена да се справи со нарачки од сите големини, од мали парчиња за индивидуални потрошувачи до големи пратки за бизниси.
            </div>
          </v-col>
        </v-row>
      </div>
        </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.454838266546!2d20.986322877285897!3d41.94756456106028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fa2db6a8adb3%3A0xb8fb0d4c5ebab63d!2sVeni%20Kom!5e0!3m2!1sen!2smk!4v1705958666206!5m2!1sen!2smk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
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
</template>

<script >
export default {
  data(){
    return {
      loading:true,
      buttonClicked:false,
      drawer:false,
    }
  },
  methods:{
  clickedButton(){
    this.buttonClicked = !this.buttonClicked;
  }
  },
  computed:{

  },
  watch:{

  },
}
</script>

<style >
.eggTransition{
 transition:0.5s;
}
.eggTransition:hover{
  transform:translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  cursor:pointer;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logoHover {
  transition:0.5s;
}
.logoHover:hover{
  filter:grayscale(1);
}

.path {
  stroke: #2196F3;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -45;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -135;
  }
}
</style>