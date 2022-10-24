<template>
  <div id="Border">
    <h2>Vad tyckte du om receptet?</h2>
    <h3>Klicka på en stjärna för att ge ditt betyg!</h3>
    <form @submit.prevent="addRating">

      <div class="form-control">
        <!-- <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label> -->
        <star-rating id="starRating" @update:rating="setRating" v-on:click="addRating()">
        </star-rating>
        <!-- v-bind:rating-message="ratingMessage" v-bind:star-text="starText" -->
        <div class="tyComment">
          <p v-if="chosenRating != '`'">{{ratingMessage}}</p>
          <h2 v-if="chosenRating != '`'">{{starText}}</h2>
        </div>

      </div>
    </form>
  </div>

</template>
  
<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  data() {
      return {
        chosenRating: null,
        ratingMessage: 'Du gav receptet:',
        starText: 'Stjärnor'
      };
    },

  methods: {
    setRating(rating) {
      this.chosenRating = rating;
    },
    // props: ['ratingMessage', 'starText'],
    addRating() {
      console.log(this.chosenRating)


      fetch('https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/' + this.$route.params.recipeId + "/ratings", {
        method: 'POST',
        body: JSON.stringify({
          rating: this.chosenRating
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    },
  }
}
</script>

<style scoped>
#starRating {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: #11999E;
  font-family: 'Montserrat', sans-serif;
}

#Border {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.tyComment {
  color: #11999E;
		font-family: 'Montserrat', sans-serif;
		background-color: #e3d50d;
		width: 0;
		height: 0;
		border: thick double #03031b;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		box-sizing: border-box;
		border-radius: 10px;
		transform-origin: center;
		transform: scale(0) rotate(-90deg);
		transition: width 0ms linear 1250ms, height 0ms linear 1250ms, transform 680ms cubic-bezier(0.68, 0.55, 0.27, 1.55)1125ms;
}
</style>
  
  
  