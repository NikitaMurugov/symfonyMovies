import Vue from "vue"
import Vuex from "vuex"
import axiosInstance from "@/api/index";
import { CHARACTERS } from "@/api/routes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        characters: {},
    },
    mutations: {
        setCharacters(state, {page, characters}) {
            state.characters[page] = characters;
        },
    },
    actions: {
        fetchCharacters() {
            return axiosInstance.get(CHARACTERS)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    },
})
