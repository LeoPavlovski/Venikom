<template>
<div>
  <div class="d-flex align-center justify-center " style="margin:130px 0;"  :class="{'flex-column' : $vuetify.breakpoint.mdAndDown , 'text-center' : $vuetify.breakpoint.mdAndDown}">
    <h5 :style="{marginRight : $vuetify.breakpoint.lgAndUp ? '150px' : ''}" style=" font-size:55px;">Квалитет, иновации и <br> безбедност на храната.</h5>
    <div>
      <p style="font-size:20px;">Во рамките на нашата компанија, ние се посветени на постигнување на висок степен на квалитет, <br> иновации и безбедност на храната. Сме предана организација која ги вградува овие принципи во секој аспект на нашето работење.</p>
      <v-btn width="200" class="ml-auto mr-auto py-7" color="primary" style="color:white; ">Галерија</v-btn>
    </div>
  </div>
  <div style="width:60%; margin:auto;" :style="{width: $vuetify.breakpoint.lgAndDown  ? '100%' : '60%' , margin:$vuetify.breakpoint.lgAndDown ? 'auto' : 'auto'}">
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
          <p>Добредојдовте во светот на нашите малени пиленца - слатки и игриви мали животни кои ја исполнуваат нашата ферма со живост и веселие. Ние се грижиме за нив со посебна внимателност, обезбедувајќи здрава и среќна растежна фаза</p>
          <div class="d-flex align-center">
            <router-link to="/classA">
              <v-btn style="font-size:20px;" color="primary">Повеќе</v-btn>
            </router-link>
          </div>

        </v-card>
      </v-col>


    </v-row>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
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