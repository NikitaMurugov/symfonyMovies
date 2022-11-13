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

    div {
        box-sizing: border-box;
    } 

    nav {
        font-size: 1.5rem;
        margin-bottom: 1em;
        a {
            text-decoration: none;
            font-weight: 700;
            color: #596f84
        }
        a:after {
            content: " |"
        }
        a:before {
            content: " "
        }
        a:last-child:after {
            content: ""
        }
        a.active {
            color: #2c3e50
        }
    }
</style>
