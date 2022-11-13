<template>
    <div class="card">
        <div class="card__header">
            {{ message }}
        </div>
        <div class="card__body">

        </div>
    </div>
</template>

<script>
    export default {
        name: "rick-and-morty-character",
        data() {
            return {
            }
        }, 
        props: {
            title: String,
            message: String,
        }, 
        created() {
            this.$emit('initialize');
        },
    }
</script>

<style lang="scss">
    .card {
        width: clamp(100%, 300px, 100%);
        border-radius: 10px;
        border: 1px solid hsl(0, 0%, 90%);
        overflow: hidden;
        margin-top: 2rem;
        
        &__header {
            width: 100%;
            font-size: 1rem;
            min-height: 2rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid hsl(0, 0%, 90%);
            background-color: hsl(0, 0%, 95%);
            
        }

        &__body {
            width: 100%;
            font-size: 1rem;
            min-height: 2rem;
        }
    }
</style>