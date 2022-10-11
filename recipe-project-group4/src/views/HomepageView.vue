<template>
    <h1>This is Homepage</h1>


    <recipe-items :mydata="apiData"></recipe-items>
</template>

<script>
import RecipeItems from '../components/recipeItems.vue';
export default {
    components: {
    RecipeItems
},
    data() {
        return {
            apiData: null,
        }
    },
    created() {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
            .then(response => response.json())
            .then(data => this.apiData = data)
            .catch(error => console.log("error: " + error));
    }


</script>