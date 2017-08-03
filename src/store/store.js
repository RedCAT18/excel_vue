
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        users : {},
        menu : {
            name : '',
            slug: ''
        }
    },
    getters : {
        getUsers : state => { return state.users; },
        getMenu : state => { return state.menu; }
    },
    mutations : {
        setUsers(state, value){ state.users = value; },
        setMenu(state, value) { state.menu = value; }
    },
    actions : {
        setUsers({commit}, value) { commit('setUsers', value); },
        setMenu({commit}, value) { commit('setMenu', value); }
    }
})