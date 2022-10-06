<template>
    <!-- Namn, bild, avg rating, ingrediens info(antal ingredienser?), tid för tillagning, gör det snyggt, 5 recept per sida, kanske? -->

    <ul v-if="apiData">
        <div>
            <a href="/recipe">
                <li v-for="recipe in apiData">
                    <h3 id="Title">{{recipe.title}}</h3>
                    <img id="FoodImage" :src="recipe.imageUrl" alt="pictureOfFood">
                    <p id="Description">{{recipe.description}}</p>
                    <p id="Rating">Rating: {{recipe.avgRating}}</p>
                    <p id="IngredientAmount">Ingredients: {{recipe.ingredients.length}}</p>
                </li>
            </a>
        </div>
    </ul>

</template>
<script>
export default {
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
}
</script>

<style scoped>
* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

a{
    text-decoration: none;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

img {
    width: 10em;
}

li {
    border: 1px solid;
    margin-bottom: 10px;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
}

#Description {
    width: 100%;
}
#Title {
    width: 100%;
}

</style>