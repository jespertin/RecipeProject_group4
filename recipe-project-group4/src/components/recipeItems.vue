<template>
    <!-- Todo: Centrera namnet, Bilden ska vara bredvid description, description skall ha en bestämd storlek så att alla items i listan blir lika stora -->
    <ul v-if="mydata">
        <div>
            <router-link v-for="recipe in mydata" :to="'/recipe/' + recipe._id">
                <li>
                    <h3 id="Title">{{recipe.title}}</h3>
                    <img id="FoodImage" :src="recipe.imageUrl" alt="pictureOfFood">
                    <p id="Description">{{recipe.description}}</p>
                    <p id="Rating">Rating: {{recipe.avgRating}}</p>
                    <p id="IngredientAmount">Ingredients: {{recipe.ingredients.length}}</p>
                    <p id="TimeToCook">Time: {{recipe.timeInMins}}min</p>
                </li>
            </router-link>
        </div>
    </ul>

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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

a {
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
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: cadetblue;
}

#Description {
    width: 70%;
}

#Title {
    width: 100%;
    align-self: center;
}

</style>