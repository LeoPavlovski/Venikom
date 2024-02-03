<template>
<div>
  <div class="d-flex align-center justify-center " style="margin:130px 0;"  :class="{'flex-column' : $vuetify.breakpoint.mdAndDown , 'text-center' : $vuetify.breakpoint.mdAndDown}">
    <h5 :style="{marginRight : $vuetify.breakpoint.lgAndUp ? '150px' : ''}" style=" font-size:55px;">Квалитет, иновации и <br> безбедност на храната.</h5>
    <div>
      <p style="font-size:20px;">Во рамките на нашата компанија, ние се посветени на постигнување на висок степен на квалитет, <br> иновации и безбедност на храната. Сме предана организација која ги вградува овие принципи во секој аспект на нашето работење.</p>
      <router-link to="/gallery">
        <v-btn width="200" class="ml-auto mr-auto py-7" color="primary" style="color:white; ">Галерија</v-btn>
      </router-link>


    </div>
  </div>
  <div style="width:60%; margin:auto;" :style="{width: $vuetify.breakpoint.lgAndDown  ? '100%' : '73%' , margin:$vuetify.breakpoint.lgAndDown ? 'auto' : 'auto'}">
    <v-row>
      <v-col cols="12"
        sm="12"
        md="12"
        lg="4">
        <v-card elevation="10" class="pa-5">
          <img src="https://www.freeiconspng.com/thumbs/chicken-png/red-single-chicken-png-8.png" width="100">
          <p>Живинарска фарма</p>
          <p>Нашите внимателно одгледани животни се симбол на здравје и виталност, произведувајќи квалитетни јајца и меко месо.</p>
          <div class="d-flex align-center">
            <router-link to="/classA">
              <v-btn style="font-size:20px;" color="primary">Повеќе</v-btn>
            </router-link>
          </div>

        </v-card>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="12"
             lg="4">
        <v-card elevation="10" class="pa-5">
          <img src="https://static.vecteezy.com/system/resources/previews/025/224/995/original/package-of-eggs-in-storage-from-a-farm-isolated-on-transparent-background-ai-generated-png.png" width="100">
          <p>Свежи Јајца</p>
          <p>Вклучете се во нашиот свет на свежи јајца, каде што свако јајце е несомнено израз на прекрасната енергија на нашите кокошки.Откријте ги чистата свежина и вкусот на нашите јајца - едно искуство што го донесува фармата директно на вашиот стол.</p>
          <div class="d-flex align-center">
            <router-link to="/classA">
              <v-btn style="font-size:20px;" color="primary">Повеќе</v-btn>
            </router-link>

          </div>

        </v-card>
      </v-col>
      <v-col cols="12"
             sm="12"
             md="12"
             lg="4">
        <v-card elevation="10" class="pa-5">
          <img src="https://i.pinimg.com/736x/e7/5e/63/e75e639702c7b61e86ccfeb44af33f68.jpg" width="100">
          <p>Пилиња</p>
          <p>Добредојдовте во светот на нашите малени пиленца - слатки и игриви мали животни кои ја исполнуваат нашата ферма со живост и веселие. Ние се грижиме за нив со посебна внимателност, обезбедувајќи здрава и среќна растежна фаза. Нашите внимателно одгледани животни се симбол на здравје</p>
          <div class="d-flex align-center">
            <router-link to="/classA">
              <v-btn style="font-size:20px;" color="primary">Повеќе</v-btn>
            </router-link>
          </div>

        </v-card>
      </v-col>


    </v-row>
  </div>

  <div class="mt-16" :style="{width: $vuetify.breakpoint.lgAndDown  ? '100%' : '73%' , margin:$vuetify.breakpoint.lgAndDown ? 'auto' : 'auto'}">
    <h6 class="text-center" style="font-size:40px; margin-bottom:20px;">Наши Потрошувачи</h6>
    <v-row class="d-flex align-center justify-space-between">
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="https://iconape.com/wp-content/png_logo_vector/vero-logo.png"  width="300" height="100" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
               class="logoHover mx-auto"></v-img>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="https://visitmacedonia.eu/wp-content/uploads/2019/09/ramstore.jpg" style="cursor:pointer;"  width="300"   :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' , height :$vuetify.breakpoint.xs ? '175px' : '' }"
               class="logoHover mx-auto"></v-img>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="https://static.wixstatic.com/media/6e4219_6d0605338b6b4bf9a5abfa2ccf8cca06~mv2.png"  width="300" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
               class="logoHover mx-auto"></v-img>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="https://kariera.mk/uploads/companies/pk8vCJ9s9UaBFsOKOu5dhg-large.jpg"  width="300" height="200" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs  ? '100%' : '100%' }"
               class="logoHover mx-auto"></v-img>
      </v-col>
    </v-row>

  </div>
  <v-row>
    <div class="text-center justify-center ml-auto mr-auto my-5">
      <v-img
          src="https://www.psacramento.com/content/images/2021/10/paulo-sacramento.1024x1024-1.jpg"
          class="mx-auto"
          width="150"
          style="border-radius: 50%;"
      ></v-img>
      <div>
        <div style="color: black; font-size: 24px; margin-top: 10px;">Срѓан Н.</div>
        <v-card-text style="color: black; font-size: 20px; text-align: center;">
        Раководител .
        </v-card-text>
      </div>
    </div>
  </v-row>

</div>
</template>

<script>
export default {
  data() {
    return {
      testimonial1Rating: 4, // Set initial rating for testimonial 1
      testimonial2Rating: 5, // Set initial rating for testimonial 2
      testimonial3Rating: 3, // Set initial rating for testimonial 3
      images: [
        { src: 'https://sentientmedia.org/wp-content/uploads/2019/05/Story-Images-29.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/10/Story-Images-83.jpg' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/09/Story-Images-67.jpg' },
        // Add more images as needed
      ],
    };
  },
};
</script>
<style scoped>
.darker-overlay {
  position: relative;
  width: 100%;
  height: 100%;
}

.darker-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
}
.layer{
  background:transparent;
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  transition:0.5s;
}
.layer:hover{
  background:rgba(226,0,0,0.7);
}
</style>