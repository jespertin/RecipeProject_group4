<template>
    <!-- flexbasis för att få listan att ha 2 columner -->
    <main v-if="mydata">
        <div id="ifListEmpty" v-if="!mydata.length">
            <h2 id="listEmptyText">Inget recept hittat</h2>
        </div>
        <router-link id="recipeLink" v-for="recipe in mydata" :to="'/recipe/' + recipe._id">
            <div class="divHover">
                <div class="receptDiv">
                    <h1 id="recipeTitle">{{ recipe.title }}</h1>
                    <div class="pictureAndDescription">
                        <p class="description" id="info">{{ recipe.description }}</p>
                        <img :src="recipe.imageUrl" alt="pictureOfFood" />
                    </div>
                    <star-rating v-if="recipe.avgRating" class="starRating" v-bind:showRating="false"
                        v-bind:increment="0.1" v-bind:read-only="true"
                        v-bind:rating="parseInt(recipe.avgRating.toFixed(1))" inactive-color="white"
                        border-color="black" border-width="2" star-size="25">
                    </star-rating>
                    <star-rating v-else class="starRating" v-bind:read-only="true" v-bind:showRating="false"
                        inactive-color="white" border-color="black" border-width="2" star-size="25">
                    </star-rating>
                    <p id="pStyle">Ingredients: {{ recipe.ingredients.length }}</p>
                    <p id="pStyle">Time: {{ recipe.timeInMins }}min</p>
                </div>
            </div>
        </router-link>
    </main>
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
* {
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    font-size: 1.2rem;
}

#pStyle {
    background-color: rgba(190, 232, 238, 0.966);
    border-radius: 5px;
    padding: 5px;
}

img {
    height: 13rem;
    width: 13rem;
    border-radius: 20px;
    margin: 0;
    border: solid 1px;
}

a {
    color: black;
    text-decoration: none;
}

/* a:link :hover {
  background-color: lightgray;
} */

.description {
    align-self: flex-start;
    width: 25rem;
    height: 13rem;
    overflow-y: auto;
}

.pictureAndDescription {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

}

.receptDiv {
    width: 45rem;
    height: 25rem;
    border: 1px solid;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
    
}

.divHover :hover {
    background-color: lightgray;
}

#info {

}

h1 {
    text-align: center;
    text-decoration: underline;
    color: black;
    border-radius: 20px;
}

main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

#ifListEmpty {
    width: 40vw;
    text-align: center;
    font-style: italic;
}

#listEmptyText {
    text-align: center;
}

#recipeTitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.7rem;
}
</style>

