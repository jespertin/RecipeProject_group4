<template>
    <div id="recipeViewWrapper">
        <Banner :name="name" />
        <div id="flexContainer">
            <SpecificRecipe :recipe="recipe" :ratingScore="ratingScore"></SpecificRecipe>
            <Rating v-on:response="(childHasVoted) => hasVoted = childHasVoted" />
            <Comments />
        </div>
        <Foot />
    </div>
</template>

<script>
import SpecificRecipe from '../components/specificRecipe.vue'
import Rating from '../components/Rating.vue'
import Banner from '../components/banner.vue'
import Foot from '../components/foot.vue'
import Comments from '../components/comments.vue';

export default {
    data() {
        return {
            recipe: null,
            ratingScore: 1.2,
            ratingTitle: 'Thank you!',
            ratingMessage: 'You rated this project:',
            starText: 'star/s',
            name: [],
            hasVoted: false
        }
    },
    components: {
        SpecificRecipe,
        Rating,
        Banner,
        Foot,
        Comments
    },
    methods: {

        loadRecipeData() {

            fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId)
                .then(response => response.json())
                .then(data => this.recipe = data)
                .catch(error => console.log("error: " + error))
                .then(() => { this.ratingScore = this.recipe.avgRating, this.name = this.recipe.categories })
        }
    },

    created() {
        this.loadRecipeData()
    },

    watch: {
        hasVoted() {
            this.loadRecipeData()
        },
    },
}
</script>

<style scoped>

#recipeViewWrapper{
    display: flex;
    flex-direction: column;
}
#flexContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    margin: 0 auto;

}
</style>
