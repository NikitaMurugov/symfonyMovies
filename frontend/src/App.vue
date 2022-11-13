<template>
    <div id="app">
        <nav>
            <router-link to="/">Рик и Морти</router-link>
            <router-link to="/character">Персонажи</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        
        width: 900px;
        margin: 0 auto;
    }
    nav {
        width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        a {

            text-decoration: none;
            font-weight: 700;
        }
    }
</style>
