<template>
  <div style="width:90%; margin:auto; padding:50px;">
      <div class="d-flex align-center justify-center">
        <img src="https://sentientmedia.org/wp-content/uploads/2020/07/sentient-logo.png" style="width:200px;" class="mt-3">
      </div>
      <div class="d-flex align-center justify-start mt-15" v-if="$vuetify.breakpoint.mdAndUp">
        <v-list flat>
          <v-list-item-group
              v-model="group"
              class="ml-3 fadein d-flex align-center float-start"
          >
            <v-list-item >
              <v-hover v-slot="{ hover }">
                <v-list-item-title
                    style="font-weight:bold; font-size:40px;"
                    :style="{'color' : hover? '#ff6330' : ''}"
                    class="wordTransition"
                >Agriculture</v-list-item-title>
              </v-hover>

            </v-list-item>
            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title
                    style="font-weight:bold; font-size:40px;"
                    :style="{'color' : hover? '#ff6330' : ''}"
                    class="wordTransition"
                >
                  Climate
                </v-list-item-title>
              </v-hover>

            </v-list-item>

            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title   style="font-weight:bold; font-size:40px;"
                                     :style="{'color' : hover? '#ff6330' : ''}"
                                     class="wordTransition">Health</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title       style="font-weight:bold; font-size:40px;"
                                         :style="{'color' : hover? '#ff6330' : ''}"
                                         class="wordTransition">Justice</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title      style="font-weight:bold; font-size:40px;"
                                        :style="{'color' : hover? '#ff6330' : ''}"
                                        class="wordTransition">Science</v-list-item-title>
              </v-hover>
            </v-list-item>
          </v-list-item-group>
        </v-list>


      </div>
    <v-row>
      <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12"
          md="4"
          sm="4"
          xs="12"
          lg="4"
          class="mt-15"
      >
        <v-img
            v-if="$vuetify.breakpoint.mdAndUp"
            style="cursor:pointer;"
            :src="image.src"
            :style="{ height: index === 0 ? '400px' : '150px', width: index === 0 ? '100%' : '100%' }"
            class="d-flex align-center justify-center"
            :class="{ 'd-none': $vuetify.breakpoint.mdAndUp }"
        />
        <v-img
            v-else
            style="cursor:pointer;"
            :src="image.src"
            height="300px"
            width="300px"
            class="d-flex"
            :class="{ 'd-flex': $vuetify.breakpoint.mdAndDown }"
        />
        <div v-if="index === 0">
          <div class="mt-5">
            <h6 style="font-size:20px;">
              Reported | Agriculture
            </h6>
            <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">8 Alternative Protein <br> Market Predictions for 2024</h6>
            <h6 style="font-size:15px;">By Björn Ólafsson</h6>
            <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
          </div>
        </div>
        <div v-if="index === 1">
          <div class="mt-5">

            <h6 style="font-size:20px;">
              Reported | Agriculture
            </h6>
            <h6 style="font-size:25px; color:black; margin-bottom:30px;" class="mt-5 wordTransition">8 Alternative Protein <br> Market Predictions for 2024</h6>
            <h6 style="font-size:15px;">By Björn Ólafsson</h6>
            <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
            <img src="https://placekitten.com/800/400" alt="Random Image" class="img-fluid" style="  width: 100%; max-height: 400px; object-fit: cover;">
            <h6 style="font-size:20px;">
              Analysis
              |
              Health
            </h6>
            <h6 style="font-size:25px; color:black; margin-bottom:30px;" class="mt-5 wordTransition">Vegan Documentaries Like ‘You Are What You Eat’ Seem Damned If They Do or Don’t</h6>
            <h6 style="font-size:15px;">By Jessica Scott-Reid</h6>
            <h6 style="font-size:15px;">January 17, 2024 - 5 min read</h6>
          </div>
        </div>
        <div v-if="index === 2">
          <div class="mt-5">
            <h6 style="font-size:20px;">
              Explainer
              |
              Health
            </h6>
            <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">Colostrum Claims To Be a <br> Superfood — But It’s Meant for Newborn Calves</h6>
            <h6 style="font-size:15px;">By Björn Ólafsson</h6>
            <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
          </div>
          <div class="mt-5">
            <h6 style="font-size:20px;">
              Explainer
              |
              Health
            </h6>
            <h6 style="font-size:25px; color:black;margin-bottom:30px;" class="mt-5 wordTransition">Colostrum Claims To Be a <br> Superfood — But It’s Meant for Newborn Calves</h6>
            <h6 style="font-size:15px;">By Björn Ólafsson</h6>
            <h6 style="font-size:15px;">January 18, 2024 - 5 min read</h6>
          </div>

        </div>
      </v-col>
    </v-row>



  </div>
</template>

<script>

import vuetify from "@/plugins/vuetify";
import {defineComponent} from "vue";

export default defineComponent({
  data(){
    return{
      images: [
        { src: 'https://sentientmedia.org/wp-content/uploads/2021/02/Story-Images-77-740x600.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2024/01/Story-Images-76-370x230.png' },
        { src: 'https://sentientmedia.org/wp-content/uploads/2024/01/Story-Images-74-370x230.png' },
      ]
    }
  },
  methods: {
    vuetify() {
      return vuetify
    }
  }
})

</script>

<style>
.wordTransition {
  background: linear-gradient(#ff6330, #ff6330) left no-repeat, black;
  background-size: 0% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.5s ease-in-out;
}
.wordTransition:hover{
  background-size: 100% 100%;
}
.custom-img {
  width: 100%;
  height: auto;
}
</style>