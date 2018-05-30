<template>
<v-container>
    <v-layout row wrap mb-4 mt-2>
        <v-flex xs12 sm6 class="text-sm-right text-xs-center">
            <v-btn large 
            class="info" 
            to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
            <v-btn large 
            class="info"
            to="/meetup/new">Organize Meetup</v-btn>
        </v-flex>
    </v-layout>
    <v-layout row mb-3>
        <v-flex xs12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click.native.stop="navigateToMeetup(meetup.id)" style="cursor:pointer">
                        <div class="title-wrapper">
                            <span class="title">
                                {{ meetup.title }}
                            </span>
                        </div>
                    </v-carousel-item>
                  </v-carousel>
          </v-flex>
    </v-layout>
        <v-layout row wrap mb-3>
            <v-flex xs12 class="text-xs-center">
            <p>Join our awesome meetups!</p>
        </v-flex>
    </v-layout>
</v-container>  
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed: {
          meetups(){
            return  this.$store.getters.featuredMeetups
        }  
        },
        methods: {
            navigateToMeetup(id) {
                this.$router.push('/meetups/'+ id);
            }
        }
    }

</script>


<style scoped>
    .title-wrapper {
        position: absolute;
        bottom: 64px;
        width: 100%;
        text-align: center;
    }
    .title {
        background-color: rgba(0,0,0,.5);
        color: #fff;
        padding: 15px 30px;
    }
</style>