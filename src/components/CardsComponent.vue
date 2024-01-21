<template>
  <div>
    <v-row class="mt-16">
      <v-col xl="12" lg="4" md="4" sm="12" xs="12" v-for="image in images" :key="image.src" style="position:relative; cursor:pointer;">
        <div>
          <img :src="image.src" :style="{ width: '100%', height: $vuetify.breakpoint.smAndDown ? '400px' : ($vuetify.breakpoint.mdAndDown ? '400px' : '550px'), objectFit: 'cover', overflow: 'hidden' }">
          <div class="layer">
            <div style="position:absolute;top:10%;left:10px; text-align: left;">
              <h6 style="font-size:20px; color:white; font-weight:normal">
                Explainer | Health
              </h6>
              <h6 style="font-size:25px; color:white; margin-bottom:30px;" class="mt-5">Plant-Based Meat:<br>Healthy Option or Vegan<br>Junk Food?</h6>
              <h6 style="font-size:20px; font-weight:normal; max-width:70%; color:white; ">Plant-based meat comes in many forms, some healthier than others.</h6>
              <h6 style="font-size:20px; font-weight:normal; color:white;" class="mt-3">By <strong>Tracy Keeling</strong></h6>
              <h6 style="font-size:20px; font-weight:normal; color:white;" class="mt-3">November 14, 2023 - 5 min read</h6>
              <v-btn style="margin-top:50px;" outlined color="white">Read More</v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
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
<style>
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