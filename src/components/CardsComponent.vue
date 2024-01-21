<template>
  <div class="mt-16 d-flex justify-center align-center">
    <v-row>
      <v-col
          v-for="image in images"
          :key="image.src"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          style="position:relative; cursor:pointer;"
      >
        <div>
          <div
              :class="{ 'darker-overlay': $vuetify.breakpoint.mdAndDown }"
              :style="{ position: 'relative', width: '100%', height: $vuetify.breakpoint.smAndDown ? '200px' : '400px' }"
          >
          <img
              :src="image.src"
              :style="{ width: '100%', height: $vuetify.breakpoint.smAndDown ? '200px' : '400px', objectFit: 'cover', overflow: 'hidden' }"
          >
          <div :class="{'layer': !$vuetify.breakpoint.mdAndDown}">
            <div style="position:absolute;top:10%;left:20px; text-align: left;">
              <h6  style="font-size:20px; font-weight:normal; color:white">
                Explainer | Health
              </h6>
              <h6  style="font-size:25px;  margin-bottom:30px; color:white " class="mt-5">Plant-Based Meat:<br>Healthy Option or Vegan<br>Junk Food?</h6>
              <div v-if="!$vuetify.breakpoint.mdAndDown">
                <h6  style="font-size:20px; font-weight:normal; color:white; max-width:70%; ">Plant-based meat comes in many forms, some healthier than others.</h6>
                <h6  style="font-size:20px; font-weight:normal; color:white  " class="mt-3">By <strong>Tracy Keeling</strong></h6>
                <h6   style="font-size:20px; font-weight:normal; color:white; " class="mt-3">November 14, 2023 - 5 min read</h6>
                <v-btn style="margin-top:50px;" outlined color="white">Read More</v-btn>
              </div>
            </div>
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