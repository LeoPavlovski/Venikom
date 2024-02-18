<template>
<div>
  <div class="d-flex align-center justify-center " style="margin:130px 0;"  :class="{'flex-column' : $vuetify.breakpoint.mdAndDown , 'text-center' : $vuetify.breakpoint.mdAndDown}">
    <h5 :style="{marginRight : $vuetify.breakpoint.lgAndUp ? '150px' : ''}" style=" font-size:55px;">Квалитет, иновации и <br> безбедност на храната.</h5>
    <div style="max-width: 700px;">
      <v-carousel hide-delimiter-background hide-delimiters show-arrows-on-hover cycle interval="5000" >
        <div class="d-flex align-center justify-center">
          <v-carousel-item>
            <div class="text-center">
              <p class="subtitle-1 font-weight-bold" style="margin-top:200px;">
                Во рамките на нашата компанија, ние се посветени на постигнување на висок степен на квалитет, иновации и безбедност на храната. Сме предана организација која ги вградува овие принципи во секој аспект на нашето работење.
              </p>
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="text-center">
              <p class="subtitle-1 font-weight-bold" style="margin-top:200px;">
                Во оквирите на нашата компанија, ние се посветени на постигнување на висок степен на квалитет, иновации и безбедност на производите. Сме предана организација која ги вградува овие принципи во секој аспект на нашето деловање.
              </p>
            </div>
          </v-carousel-item>
        </div>
      </v-carousel>
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
          <p>Добредојдовте во светот на нашите малени пиленца - слатки и игриви мали животни кои ја исполнуваат нашата ферма со живост и веселие. Ние се грижиме за нив со посебна внимателност. Нашите внимателно одгледани животни се симбол на здравје</p>
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
        <v-img src="../../public/montenegro..png" style="cursor:pointer;" width="300" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' , height :$vuetify.breakpoint.xs ? '' : '' }"  class="logoHover mx-auto"/>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="https://visitmacedonia.eu/wp-content/uploads/2019/09/ramstore.jpg"  width="300" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs ? '100%' : '100%' }"
               class="logoHover mx-auto"></v-img>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center">
        <v-img src="../../public/venikom slike/proizvodi/logo-1 (2).png" width="300"  style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs  ? '100%' : '100%' }"
               class="logoHover mx-auto"/>
      </v-col>
      <v-col cols="12" sm="2" md="4" lg="2" class="text-center" style="margin-bottom:30px;">
        <v-img src="../../public/venikom slike/proizvodi/OAZA.png"  width="300" style="cursor:pointer;" :style="{ maxWidth: $vuetify.breakpoint.xs  ? '100%' : '100%' }"
               class="logoHover mx-auto"/>
      </v-col>
    </v-row>

  </div>
  <v-row>
    <div class="text-center justify-center ml-auto mr-auto my-5">
      <img src="../../public/SRGJAN-N.png" width="200"/>
      <div>
        <div style="color: black; font-size: 24px; margin-top: 10px;">Срѓан Н.</div>
        <div style="color:gray;">Управител</div>
        <v-card-text style="color: gray; font-size: 16px; text-align: center;">
          <div >
            "Нашата мисија е да осигуриме здрава и квалитетна исхрана за нашите кокошки, обезбедувајќи висок стандард на јајцата и грижа за нивната благосостојба."
          </div>
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
.v-responsive__content{
  display:flex !important;
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