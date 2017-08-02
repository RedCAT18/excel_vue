
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        users : {}
    },
    getters : {
        getUsers : state => { return state.users; }
    },
    mutations : {
        setUsers(state, value){ state.users = value; }
    },
    actions : {
        setUsers({commit}, value) { commit('setUsers', value) }
    }
})