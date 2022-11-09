<template>

    <div class="recipes-flex-container" v-if="mydata">
        <div id="ifListEmpty" v-if="!mydata.length">
            <h2 id="listEmptyText">Inget recept hittat</h2>
        </div>

        <router-link class="recipe-link" v-for="recipe in mydata" :to="'/recipe/' + recipe._id">
            <div class="receptDiv">
                <h1 id="recipeTitle">{{ recipe.title }}</h1>
                <div class="pictureAndDescription">
                    <p class="description" id="info">{{ recipe.description }}</p>
                    <img :src="recipe.imageUrl" alt="pictureOfFood" />
                </div>
                <star-rating v-if="recipe.avgRating" class="starRating" v-bind:showRating="false" v-bind:increment="0.1"
                    v-bind:read-only="true" v-bind:rating="parseFloat(recipe.avgRating.toFixed(1))"
                    inactive-color="white" border-color="black" v-bind:border-width="parseInt(2)"
                    v-bind:star-size="parseInt(20)">
                </star-rating>
                <star-rating v-else class="starRating" v-bind:read-only="true" v-bind:showRating="false"
                    inactive-color="white" border-color="black" v-bind:border-width="parseInt(2)"
                    v-bind:star-size="parseInt(20)">
                </star-rating>
                <p class="pStyle">Ingredienser: {{ recipe.ingredients.length }}</p>
                <p class="pStyle">Tid: {{ recipe.timeInMins }}min</p>
            </div>
        </router-link>
    </div>

</template>
<script>

import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating
    },
    name: "RecipeItems",
    props: {
        mydata: Array
    }
}
</script>

<style scoped>
#recipeLink {
    margin-bottom: 20px;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    font-size: 100%;
}

.pStyle {
    background-color: rgba(190, 232, 238, 0.966);
    border-radius: 5px;
    padding: 5px;
    pointer-events: none;
}

img {
    width: 100%;
    max-width: 125px;
    height: 125px;
    border-radius: 20px;
    margin: 0;
    border: solid 1px;
}

a {
    color: black;
    text-decoration: none;
}

.description {
    align-self: flex-start;
    width: 70%;
    height: 100%;
    overflow-y: auto;
}

.pictureAndDescription {
    flex-basis: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.receptDiv {
    border: 1px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
    padding-left: 2px;
    padding-right: 2px;
    height: 300px;
    width: 500px;

}

.recipe-link :hover {
    background-color: lightgray;
}

h1 {
    text-align: center;
    text-decoration: underline;
    color: black;
}

.recipes-flex-container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
}

.recipe-link {
    flex-basis: 20%;
    height: 50%;
    margin-bottom: 20px;
}

ul {
    list-style: none;
}

#ifListEmpty {
    text-align: center;
    font-style: italic;
}

#listEmptyText {
    text-align: center;
}

#recipeTitle {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.7rem;
}

@media screen and (max-width: 800px) {

    .recipe-link {
        flex-basis: 100%;
        align-self: center;
    }

    .receptDiv {
        width: 94%;
        margin-right: 1%;
        margin-left: 1%;
    }

    #recipeTitle {
        width: 93%;
        text-overflow: clip;
    }

}

@media screen and (max-width: 500px) {
    #recipeTitle {
        font-size: 1.3rem;
    }

}
</style>

