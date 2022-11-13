import Vue from "vue"
import VueRouter from "vue-router"
import RickAndMortyList from "../views/RickAndMortyList"
import RickAndMortyCharacter from "../views/RickAndMortyCharacter"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: RickAndMortyList,
    },
    {
        path: "/character",
        name: "character",
        component: RickAndMortyCharacter,
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
