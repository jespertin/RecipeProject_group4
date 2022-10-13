<template>
    <main v-if="recipe">
        <h1>{{recipe.title}}</h1>
        <div id="infoAndDescriptionContainer">
            <p id="description">{{recipe.description}}</p>
            <p id="info">Rating: {{recipe.avgRating}} | {{recipe.ingredients.length}} Ingredients |
                {{recipe.timeInMins}}min</p>
        </div>
        <div id="pictureContainer">
            <img :src="recipe.imageUrl" alt="pictureOfFood">
        </div>
        <div id="ingredientsAndInstructions">
            <section id="ingredients">
                <h3>Ingredienser</h3>
                <ul v-for="ingredient in recipe.ingredients">
                    <li>
                        {{ingredient.amount}} {{ingredient.unit}} {{ingredient.name}}
                    </li>

                </ul>
            </section>
            <section id="instructions">
                <h3>Gör så här</h3>
                <ul v-for="toDo in recipe.instructions">
                    <li>
                        {{toDo}}
                    </li>

                </ul>
            </section>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        recipe: Object
    }
}
</script>

<style scoped>
*{
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}
main {
    width: 60vw;
    border: solid 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    flex-wrap: wrap;
}

ul {
    list-style: none;
    padding: 0;
}

img {
    width: 20vw;
    border-radius: 20px;
}

#infoAndDescriptionContainer {
    width: 50%;
    font-size: 40px;
}

#info{
    background-color: rgba(154, 162, 163, 0.966);
    border-radius: 5px;
    padding: 5px;
}

#description{
}

#pictureContainer {
    width: 20vw;
}

section {
    width: 50%;
}

h1 {
    width: 100%;
    text-align: center;
    font-size: 40px;
    text-decoration: underline;
}

#instructions {
    
}

#ingredients {
    width: 30%;
}

#ingredientsAndInstructions {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;
}

h3 {
    text-align: center;
    border-bottom: 2px solid;
}

li {
    background-color: rgba(154, 162, 163, 0.966);
    border-radius: 5px;
    padding: 5px;
}

</style>