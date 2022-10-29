<template>
    
    
    <div v-if="mydata">
        <div id="ifListEmpty" v-if="!mydata.length">
            <h2 id="listEmptyText">Inget recept hittat</h2>
        </div>
        <div id="recipeListContainer">
            <router-link id="recipeLink" v-for="recipe in mydata" :to="'/recipe/' + recipe._id">
                <div class="receptDiv">
                    <h1 id="recipeTitle">{{ recipe.title }}</h1>
                    <div class="pictureAndDescription">
                        <p class="description" id="info">{{ recipe.description }}</p>
                        <img :src="recipe.imageUrl" alt="pictureOfFood" />
                    </div>
                    <star-rating v-if="recipe.avgRating" class="starRating" v-bind:showRating="false"
                        v-bind:increment="0.1" v-bind:read-only="true"
                        v-bind:rating="parseFloat(recipe.avgRating.toFixed(1))" inactive-color="white"
                        border-color="black" v-bind:border-width="parseInt(2)" v-bind:star-size="parseInt(25)">
                    </star-rating>
                    <star-rating v-else class="starRating" v-bind:read-only="true" v-bind:showRating="false"
                        inactive-color="white" border-color="black" v-bind:border-width="parseInt(2)"
                        v-bind:star-size="parseInt(25)">
                    </star-rating>
                    <p id="pStyle">Ingredienser: {{ recipe.ingredients.length }}</p>
                    <p id="pStyle">Tid: {{ recipe.timeInMins }}min</p>

                </div>
            </router-link>
        </div>
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
    },
    
}

</script>

<style scoped>

#recipeListContainer {
    display: flex;
    flex-direction: row;
    height: 100vh;
    flex-wrap: wrap;
    overflow-y:scroll;
    justify-content: center;
}

#recipeLink {
    margin-bottom: 20px;
    flex-basis: 22%;
    box-sizing: content-box;
    margin-left: 20px;
}

#recipeLink :hover {
    background-color: lightgray;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
}

#pStyle {
    background-color: rgba(190, 232, 238, 0.966);
    border-radius: 5px;
    padding: 5px;
    pointer-events: none;
}

img {
    height: 13rem;
    width: 13rem;
    border-radius: 20px;
    border: solid 1px;
    margin-left: 10px;
    margin-right: 10px;
}

a {
    color: black;
    text-decoration: none;
}

.description {
    align-self: flex-start;
    width: 25rem;
    height: 13rem;
    overflow-y: auto;
    margin-left: 15px;
    margin-right: 10px;
    font-size: 1.0rem;
}

.pictureAndDescription {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

}

.receptDiv {
    width: 30rem;
    height: 25rem;
    border: 1px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
    box-sizing: content-box;
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
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

#ifListEmpty {
    width: 100vw;
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

@media screen and (max-width: 750px) {
    .receptDiv {
        width: 80vw;
    }

}
</style>

