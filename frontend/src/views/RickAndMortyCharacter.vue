<template>
    <div>
        <span>one Character</span>
        <character-block 
            v-on:initialize="initialize"
            v-bind:message="characterTitle"
            >
        </character-block>
    </div>
</template>

<script>
    import CharacterBlock from "@/components/CharacterBlock"
    export default {
        name: "rick-and-morty-character",
        data() {
            return {
                characterTitle: 'morty'
            }
        },
        components: {
            CharacterBlock
        },
        methods: {
            initialize () {
                console.log('дочерний компонент инициализиорван');
            }
        }
    }
</script>
