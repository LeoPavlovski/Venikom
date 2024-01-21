<template>
  <div style="width:90%; margin:auto; padding:50px;">
      <div class="d-flex align-center justify-center mt-5">
        <img src="https://sentientmedia.org/wp-content/uploads/2020/07/sentient-logo.png" style="width:200px;" class="mt-3">
      </div>
      <div class="d-flex align-center justify-start mt-15">
        <v-list-item-group
            v-model="group"
            class="ml-3 fadein d-flex align-center float-start"
        >
            <v-list-item >
              <v-hover v-slot="{ hover }">
                <v-list-item-title
                    style="font-weight:bold; font-size:35px;"
                    :style="{'color' : hover? '#ff6330' : ''}"
                    class="wordTransition"
                    >Agriculture</v-list-item-title>
              </v-hover>

            </v-list-item>
            <v-list-item>
              <v-hover  v-slot="{ hover }">
                <v-list-item-title
                    style="font-weight:bold; font-size:35px;"
                    :style="{'color' : hover? '#ff6330' : ''}"
                    class="wordTransition"
                >
                  Climate
                </v-list-item-title>
              </v-hover>

            </v-list-item>

            <v-list-item>
              <v-hover  v-slot="{ hover }">
              <v-list-item-title   style="font-weight:bold; font-size:35px;"
                                   :style="{'color' : hover? '#ff6330' : ''}"
                                   class="wordTransition">Health</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
              <v-list-item-title       style="font-weight:bold; font-size:35px;"
                                       :style="{'color' : hover? '#ff6330' : ''}"
                                       class="wordTransition">Justice</v-list-item-title>
              </v-hover>
            </v-list-item>


            <v-list-item>
              <v-hover  v-slot="{ hover }">
              <v-list-item-title      style="font-weight:bold; font-size:35px;"
                                      :style="{'color' : hover? '#ff6330' : ''}"
                                      class="wordTransition">Science</v-list-item-title>
              </v-hover>
            </v-list-item>
        </v-list-item-group>
      </div>



  </div>
</template>

<script>

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
</style>