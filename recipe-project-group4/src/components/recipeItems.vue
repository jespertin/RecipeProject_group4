<template>
  <main v-if="mydata">
    
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
 
  </main>
</template>
<script>
export default {
  name: "RecipeItems",
  props: {
    mydata: Array,
  },
};
</script>

<style scoped>
* {
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: 105%;
}

#pStyle{
  
    background-color: rgba(154, 162, 163, 0.966);
    border-radius: 5px;
    padding: 5px;
}


.imgSize{
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
  width: 50vw;
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

.divHover :hover{
  background-color: lightgray;
}

#info{
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


</style>

<!-- <template>
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

</style> -->
