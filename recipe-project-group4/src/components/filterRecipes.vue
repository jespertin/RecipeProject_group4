<template>

<button @click="filterRecipeList">Starts With K</button>
</template>

<script>
export default {
    props: {
        recipes:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            filteredList: null
        }
    },
    methods:{
        filterRecipeList(){
            this.$emit("emitTester",  this.recipes.filter(recipe => recipe.title.startsWith("K")))
        }

    }
}
</script>

<style>

</style>