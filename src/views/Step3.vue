<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-16 mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>
      <v-col cols="12">
          <v-item-group v-model="selected">
            <v-row justify="center">
              <v-item 
                v-slot="{ active, toggle }"
                value="Cinque">
                <v-col cols="1">
                  <v-btn
                    color="accent"
                    :outlined="active === false"
                    rounded
                    large
                    @click="toggle">
                    5
                  </v-btn>
                </v-col>
              </v-item>
              <v-item 
                v-slot="{ active, toggle }"
                value="Sei">
                <v-col cols="1">
                  <v-btn
                    color="accent"
                    :outlined="active === false"
                    rounded
                    large
                    @click="toggle">
                    6
                  </v-btn>
                </v-col>
              </v-item>
            </v-row>
          </v-item-group>
      </v-col>
      <!-- <v-col cols="12">
        <div class="d-flex justify-center">
          <v-btn
            class="mx-2"
            color="accent"
            outlined
            rounded
            large>
            1
          </v-btn>
          <v-btn
            class="mx-2"
            color="accent"
            outlined
            rounded
            large>
            2
          </v-btn>
          <v-btn
            class="mx-2"
            color="accent"
            outlined
            rounded
            large>
            3
          </v-btn>
          <v-btn
            class="mx-2"
            color="accent"
            outlined
            rounded
            large>
            4
          </v-btn>
        </div>
      </v-col> -->
      <v-col cols="12">
        <v-btn
          class="white--text"
          color="green"
          :disabled="selected === '' || selected === null || selected === undefined"
          rounded
          x-large
          @click="goToNextStep">
          Prosegui
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Step3 extends Vue {
  selected = "";

  mounted() {
    this.selected = this.$route.params.s3;
  }

  goToNextStep() {
    this.$router.push({ name: 'home' });
  }
}
</script>
