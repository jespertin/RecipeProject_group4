<script setup>

import Comments from '../components/comments.vue';

</script>

<template>
  
    <router-link id="buttonHome" to="/">
        <p>Tillfällig home knapp</p>
    </router-link>
    <div id="flexContainer">
        <SpecificRecipe :recipe="recipe"></SpecificRecipe>
        <Comments />
    </div>

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

<style scoped>


/* La bara till en flex container för att kolla hur det såg ut centrerat */
#flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: 0 auto;

}

</style>
