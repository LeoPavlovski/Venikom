<template>
  <div>
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


      </v-app-bar>      <v-navigation-drawer
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
                  <v-list-item-title  :style="{ 'background-color': hover ? 'white' : '#0078c9' , 'color' :hover? '#0D47A1' : 'white' }" class="py-5 pl-5" :class="{ mytransition2: drawer  }" style="font-weight:bold; font-size:40px;">Почетна</v-list-item-title>
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
      <div style="width:90%; margin:auto" class="text-center mt-10">
        <h6 style="font-size:40px;">Контакт</h6>
        <h6 style="font-size:20px;">Ние сме овде да одговориме на сите ваши прашања, а исто така <br> ги цениме и вашите коментари и критики</h6>
        <h4 class="mt-5" style="font-size:20px;">Пополнете го формуларот</h4>
        <v-card height="400" class="my-15" elevation="10">
          <v-row>
            <!-- Contact Information Section -->
            <v-col cols="12" md="4">
              <v-card class="pa-2 ml-2 mr-2" color="#0078c9" height="380">
                <div class="pa-5 text-left" style="color:white;">
                  <h6 style="color:white; font-size:24px; font-weight:normal">Информации за контакт</h6>
                  <p style="color:white;">Сме достапни 24/7 за вас!

                    За сите вашите потреби во врска со Вени-ком, ние сме тука непрекинато. Контактирајте нè преку телефон или е-пошта во секое време на денот и ноќта. Вашето задоволство е наш приоритет!</p>

                  <!-- Phone numbers -->
                  <div class="d-flex align-center">
                    <v-icon color="white" class="mr-2">mdi mdi-phone</v-icon>
                    <div>
                      <p style="font-size:14px" class="my-0">+389 44 520 805</p>
                    </div>
                  </div>

                  <!-- Gmail icon and text -->
                  <div class="d-flex align-center">
                    <v-icon color="white" class="mr-2">mdi mdi-gmail</v-icon>
                    <p style="font-size:14px; margin-top: 12px;">venikom@live.com</p>
                  </div>

                  <!-- Map marker icon and text -->
                  <div class="d-flex align-center">
                    <v-icon color="white" class="mr-2">mdi-map-marker</v-icon>
                    <p style="font-size:14px; margin-top: 12px;">Ul. 101 B.B., Celopek, Republic of Macedonia</p>
                  </div>
                </div>
              </v-card>
            </v-col>

            <!-- Contact Form Section -->
            <v-col cols="12" md="8">
              <form>
                <v-row class="d-flex align-center justify-space-between">
                  <v-col xs="12" sm="6" md="6">
                    <v-text-field  v-model="name" color="#0078c9" label="Вашето Име" class="px-10"></v-text-field>
                  </v-col>
                  <v-col xs="12" sm="6" md="6">
                    <v-text-field v-model="email" color="#0078c9" label="Email Адреса" class="px-10"></v-text-field>
                  </v-col>
                </v-row>

                <v-textarea v-model="message" color="#0078c9" no-resize label="Порака" class="px-10"></v-textarea>
                <v-btn
                    type="submit"
                    color="#0078c9"
                    style="color:white;"
                    class="px-10 ml-10 float-left"
                    @click="sendEmail"
                >
                  Испрати Порака!
                </v-btn>
              </form>

            </v-col>
          </v-row>
        </v-card>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.454838266546!2d20.986322877285897!3d41.94756456106028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353fa2db6a8adb3%3A0xb8fb0d4c5ebab63d!2sVeni%20Kom!5e0!3m2!1sen!2smk!4v1705958666206!5m2!1sen!2smk" width="100%" height="450" :style="{ 'margin-top': $vuetify.breakpoint.smAndDown ? '400px' : '150px' }" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    </div>
</template>

<script>
export default{
  data(){
    return{
      drawer:false,
      name: '',
      email: '',
      message: '',
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods:{
    sendEmail() {
      const subject = 'Subject of the email';
      const body = `Name: ${this.name}%0D%0AEmail: ${this.email}%0D%0AMessage: ${this.message}`;

      console.log(body);

      const mailtoLink = `mailto:lp29379@seeu.edu.mk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    },
  },
}
</script>

<style>

</style>