<script setup>

</script>

<template>
  <v-app-bar
      elevation="5"
      color="white"
      elevate-on-scroll
      style="position:sticky; top:0;left:0;width:100%; z-index:1"
  >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>

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
</template>

<style scoped>

</style>