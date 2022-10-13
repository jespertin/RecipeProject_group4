<template>
<SpecificRecipe :recipe="recipe"></SpecificRecipe>
</template>


<script>
import SpecificRecipe from '../components/specificRecipe.vue'
export default {
    components: {
        SpecificRecipe
    },
    created() {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId)
            .then(response => response.json())
            .then(data => this.recipe = data)
            .catch(error => console.log("error: " + error));
    },
    data() {
        return {
            recipe: null
        }
    }
}
</script>
