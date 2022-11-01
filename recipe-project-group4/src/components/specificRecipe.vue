<template>
  <main v-if="recipe">
    <h1>{{ recipe.title }}</h1>

    <div id="imgAndDesc">
      <div id="infoAndDescriptionContainer">
        <p id="description">{{ recipe.description }}</p>
        <p id="info">
          <star-rating v-if="recipe.avgRating" id="starRating" v-bind:showRating="true" v-bind:increment="0.1"
            v-bind:read-only="true" v-bind:star-size="parseInt(40)" v-bind:rating="parseFloat(ratingScore.toFixed(1))">
          </star-rating>
          <star-rating v-else v-bind:showRating="false" id="starRating" v-bind:read-only="true">
          </star-rating>

          {{ recipe.ingredients.length }} Ingredienser |{{
              recipe.timeInMins
          }}min
        </p>
      </div>

      <div id="pictureContainer">
        <img :src="recipe.imageUrl" alt="pictureOfFood" />
      </div>
    </div>
    <div id="ingredientsAndInstructions">
      <section id="ingredients">
        <h3>Ingredienser</h3>
        <ul v-for="ingredient in recipe.ingredients">
          <li>
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </li>
        </ul>
      </section>
      <section id="instructions">
        <h3>Gör så här</h3>
        <ul v-for="toDo in recipe.instructions">
          <li>
            {{ toDo }}
          </li>
        </ul>
      </section>
    </div>
  </main>
  <main id="skeletonMain" v-else>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
    <div id="imgAndDesc">
      <div id="infoAndDescriptionContainer">
        <p id="description">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        </p>
        <p id="info">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        </p>
      </div>
      <div id="pictureContainer">
        <div class="skeleton skeleton-img"></div>
      </div>
    </div>
    <div id="ingredientsAndInstructions">
      <section id="ingredients">
        <h3>Ingredienser</h3>
        <ul v-for="n in 5">
          <li>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </li>
        </ul>
      </section>
      <section id="instructions">
        <h3>Gör så här</h3>
        <ul v-for="n in 5">
          <li>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import StarRating from "vue-star-rating";

export default {

  components: {
    StarRating,
  },
  props: {
    recipe: Object,
    ratingScore: Number
  },

};
</script>

<style scoped>
* {
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 700;
}

main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  flex-wrap: wrap;
  border-bottom: solid 1px;
}

ul {
  list-style: none;
  padding: 0;
}

img {
  width: 13vw;
  border-radius: 20px;
}

#infoAndDescriptionContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  font-size: 1.3em;
}

#info {
  background-color: rgba(154, 162, 163, 0.966);
  border-radius: 5px;
  padding: 5px;
}



section {
  width: 50%;
}

h1 {
  width: 100%;
  text-align: center;
  font-size: 2em;
  text-decoration: underline;
}

#ingredients {
  width: 30%;
}

#ingredientsAndInstructions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  font-size: 1em;
}

#imgAndDesc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  font-size: 1em;
}

h3 {
  text-align: center;
  font-size: x-large;
  border-bottom: 2px solid;
}

li {
  background-color: rgba(154, 162, 163, 0.966);
  border-radius: 5px;
  padding: 5px;
}
.skeleton {
  opacity: .7;
  animation: skeleton-loading 1s linear infinite alternate;
}
.skeleton-img{
  width: 13vw;
  height: 200px;
  border-radius: 20px;
  margin-top: 15px;
}
.skeleton-text {
  width: 100%;
  height: .5rem;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  border-radius: .25rem;
}
.skeleton-text:last-child {
  width: 80%;
}
@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
