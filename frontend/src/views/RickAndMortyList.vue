<template>
    <div>
        <span>Rick and Morty</span>
    </div>
</template>

<script>
    export default {
        name: "rick-and-morty-list",
        create() {
            this.$store.dispatch('fetchCharacters');
        }
    }
</script>
