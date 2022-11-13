<template>
    <div>
        <span>one Character</span>
        <character-block></character-block>
    </div>
</template>

<script>
    import CharacterBlock from "@/components/CharacterBlock.vue"
    export default {
        name: "rick-and-morty-character",
        components: {
            CharacterBlock
        }
    }
</script>
