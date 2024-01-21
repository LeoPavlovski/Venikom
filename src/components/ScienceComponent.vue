<template>
  <div style="margin-top: 80px;">
    <h5 style="font-size: 25px;">Science</h5>
    <v-row style="margin-top: 80px;">
      <v-col
          v-for="image in images"
          :key="image.src"
          cols="12"
          sm="12"
          md="12"
          lg="4"
          style="position:relative"
      >
        <div class="image-container">
          <div class="content-container d-flex justify-center align-center" >
            <img
                :src="image.src"
                class="mr-5"
                :style="{ width: '100%', height: $vuetify.breakpoint.smAndDown ? '200px' : '100%', objectFit: 'cover', overflow: 'hidden' }"
            />
            <div class="description">
              Fish Feel Pain, Science Shows — But Humans Are Reluctant To Believe It
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
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-60.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-61.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2023/12/Story-Images-56.png' },
        // Add more images as needed
      ],
    };
  },
};
</script>
