<template>
    <!-- Namn, bild, avg rating, ingrediens info(antal ingredienser?), tid för tillagning, gör det snyggt, 5 recept per sida, kanske? -->

    <ul v-if="apiData">
        <div>
            <li v-for="recipe in apiData">
                <h3>{{recipe.title}}</h3>
                <p id="Description">{{recipe.description}}</p>
                <img :src="recipe.imageUrl" alt="pictureOfFood">
                <p>Rating: {{recipe.avgRating}}</p>
                <p>Ingredients: {{recipe.ingredients.length}}</p>
            </li>
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
ul {
    list-style: none;
    display: flex;
    align-items: center;
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
    flex-direction: column;
}

</style>