import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://i.dawn.com/primary/2017/10/59edd963c69e1.jpg',
                id: 'asdfsadsf23434fsd',
                title: 'Meetup in Karachi',
                date: '2018-05-26'
                }, {
                imageUrl: 'https://cdn.mangobaaz.com/wp-content/uploads/2016/06/Lahore-Iftari.jpg',
                id: 'asdfs2342dsaf',
                title: 'Meetup in Lahore',
                date: '2018-05-25'
                }, {
                imageUrl: 'http://bolojawan.com/wp-content/uploads/2017/11/Islamabad_top_view.jpg',
                id: 'dsafsdj23423423j',
                title: 'Meetup in Islamabad',
                date: '2018-05-27'
                }, ]
    },
    getters: {
        getMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            });
        },
        getMeetup(state) {
            return (meetupId)=> {
                return state.loadedMeetups.find((meetup)=> {
                    return meetup.id == meetupId;
                })
            }
        },
        featuredMeetups(state, getters) {
            return getters.getMeetups.slice(0, 5);
        }
    }
})
