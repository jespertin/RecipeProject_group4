<script setup>

import Comments from '../components/comments.vue';

</script>

<template>
    <Banner :data="recipe" :name="name" />
    <div id="flexContainer">
        <SpecificRecipe :recipe="recipe"></SpecificRecipe>
        <Rating />
        <Comments />
    </div>
    <Foot/>
</template>

<script>
import SpecificRecipe from '../components/specificRecipe.vue'
import Rating from '../components/Rating.vue'
import Banner from '../components/banner.vue'
import Foot from '../components/foot.vue'


export default {
    data() {
        return {
            recipe: null,
            ratingTitle: 'Thank you!',
            ratingMessage: 'You rated this project:',
            starText: 'star/s',
            name: ""
        }
    },
    components: {
        SpecificRecipe,
        Rating,
        Banner,
        Foot
    },
    created() {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId)
            .then(response => response.json())
            .then(data => this.recipe = data)
            .catch(error => console.log("error: " + error))
            .finally(() => { this.name = this.recipe.title })
    },

}
</script>

<style scoped>
/* La bara till en flex container för att kolla hur det såg ut centrerat */
#flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
