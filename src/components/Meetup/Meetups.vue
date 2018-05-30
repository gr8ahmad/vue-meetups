<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout justify-center>
       <v-flex xs12 sm9 md8>
        <v-card v-for="meetup in meetups" :key="meetup.id" class="mb-3">
        <v-layout row wrap>
        <v-flex xs5 sm4 md4>
            <v-card-media :src="meetup.imageUrl" height="200px">
            </v-card-media>
        </v-flex>
        <v-flex xs7 sm4 md8>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{meetup.title}}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" :to="'/meetups/' + meetup.id">Read More<v-icon>arrow_right</v-icon></v-btn>
        </v-card-actions>            
        </v-flex>            
        </v-layout>
      </v-card>
       </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
    computed: {
        meetups() {
            return this.$store.getters.getMeetups;
        }
    }
}
</script>