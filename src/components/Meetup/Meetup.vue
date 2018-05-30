<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout>
       <v-flex xs12>
        <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{meetup.title}}</h3>
          </div>
        </v-card-title>
        <v-card-media :src="meetup.imageUrl" height="500">
        </v-card-media>
        <v-card-text>
           <div class="info--text">{{meetup.date}}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consequuntur officia rem aliquam nobis blanditiis, odio nam quibusdam dolores aspernatur quam sint fuga veniam! Magnam, reiciendis neque beatae cumque repellendus.</div>
        </v-card-text>
        <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn color="primary">Register</v-btn>
        </v-card-actions>
      </v-card>
       </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
export default {
    props: ['id'],
    computed: {
        meetup() {
        return this.$store.getters.getMeetup(this.id)
        }
    }
}
</script>