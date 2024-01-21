<template>
  <div style="margin-top:80px;">
    <h5 style="font-size:25px;">Agriculture</h5>
    <div class="d-flex justify-center align-center">
      <v-row style="margin-top:80px;">
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
                class="image-container"
            >
              <img
                  style="filter:brightness(50%)"
                  class="scale"
                  :src="image.src"
                  :style="{ width: '100%', height: $vuetify.breakpoint.smAndDown ? '200px' : '400px', objectFit: 'cover', overflow: 'hidden' }"
              >

              <div class="outscale" style="position:absolute;top:60%;left:20px; text-align: left;" :class="{ 'outscale-hover': $vuetify.breakpoint.mdAndDown }">
                <h6 style="font-size:20px; font-weight:normal; color:white">
                  Perspective
                  |
                  Agriculture
                </h6>
                <h6 style="font-size:25px; margin-bottom:30px; color:white" class="mt-5">Sentient’s Most-Read Stories <br> of 2023</h6>
                <a href="" style="text-decoration:none; color:white;">Read more</a>
              </div>
            </div>
          </div>
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
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-60.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-61.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-56.png' },
        // Add more images as needed
      ],
    };
  },
};
</script>

<style scoped>
.scale{
  transition:0.5s;
}
.scale:hover{
  transform:scale(1.05);
}
.outscale{
  transition:0.5s;
}
.outscale:hover{
  transform:translateY(-40px);
}

</style>
