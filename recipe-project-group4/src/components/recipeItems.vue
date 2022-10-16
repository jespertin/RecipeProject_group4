<template>
    <!-- Todo: filterRecipeList metoden funkar..hur? Läs om hur indexOf metoden på String funkar, samt varför !== -1 ?-->
    <ul v-if="mydata">
        <div>
            <!-- <filter-recipes :recipes="mydata" @emit-tester="handleCustomChange"></filter-recipes> -->
            <input type="text" v-model="searchString" placeholder="Search"/>
            <router-link v-for="recipe in filterRecipeList" :to="'/recipe/' + recipe._id">
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
import FilterRecipes from "./filterRecipes.vue";

export default {
    name: "RecipeItems",
    props: {
        mydata: Array
    },
    components: { FilterRecipes },
    data() {
        return {
            searchString: "",
        }
    },
    computed: {
        filterRecipeList() {
            return this.mydata.filter(recipe => recipe.title.toLowerCase().indexOf(this.searchString.toLowerCase()) !==  -1) 
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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