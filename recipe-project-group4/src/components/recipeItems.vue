<template>

    <main v-if="mydata">
        <div>
            <div id="ifListEmpty" v-if="!mydata.length">
                <h2 id="listEmptyText">Inget recept hittat</h2>
            </div>
            <router-link v-for="recipe in mydata" :to="'/recipe/' + recipe._id">
                <div class="divHover">
                    <div class="receptDiv">
                        <h1>{{ recipe.title }}</h1>
                        <div class="pictureAndDescription">
                            <p class="description" id="info">{{ recipe.description }}</p>
                            <div class="imgSize">
                                <img :src="recipe.imageUrl" alt="pictureOfFood" />
                            </div>
                        </div>
                        <p id="pStyle">Rating: {{ recipe.avgRating }}</p>
                        <p id="pStyle">Ingredients: {{ recipe.ingredients.length }}</p>
                        <p id="pStyle">Time: {{ recipe.timeInMins }}min</p>
                    </div>
                </div>
            </router-link>
        </div>
    </main>
</template>
<script>

export default {
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
    font-size: 105%;
}

#pStyle {
    background-color: rgba(154, 162, 163, 0.966);
    border-radius: 5px;
    padding: 5px;
}

.imgSize {
    width: 300px;
    height: 300px;
}

img {
    max-width: 100%;
    height: 100%;
    border-radius: 20px;
}

a {
    color: black;
    text-decoration: none;
}

/* a:link :hover {
  background-color: lightgray;
} */

.description {
    width: 40%;
    height: auto;
}

.pictureAndDescription {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.receptDiv {
    width: 40vw;
    border: 1px solid;

    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
}

.divHover :hover {
    background-color: lightgray;
}

#info {
    background-color: rgba(154, 162, 163, 0.966);
    border-radius: 5px;
    padding: 5px;
}

h1 {
    text-align: center;
    text-decoration: underline;
    font-size: 150%;
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

#ifListEmpty{
    width: 40vw;
    text-align: center;
    font-style: italic;
}

#listEmptyText{
    text-align: center;
}
</style>

