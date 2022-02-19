import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            posts: []
        }
    },
    mutations: {
        addPost(state, payload){
            state.posts.push(payload);
        }
    },
    actions: {
    },
    modules: {
    }
})
