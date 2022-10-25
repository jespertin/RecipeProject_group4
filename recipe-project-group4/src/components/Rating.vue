<template>
  <div id="Border">
    <div>
      <div v-if="!hasVoted">
      <h2>Vad tyckte du om receptet?</h2>
      <h3>Klicka på en stjärna för att ge ditt betyg!</h3>
      </div>
      <div v-else>
        <h2> Tack för din röst</h2>
      </div>
      <form @submit.prevent="addRating">

        <div class="form-control">

          <star-rating id="starRating" v-bind:showRating="false" active-color="orange" v-bind:inactive-color="inactiveColor" v-bind:read-only="hasVoted" @update:rating="setRating" v-on:click="addRating()">
          </star-rating>

        </div>
      </form>
    </div>

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
      starText: 'Stjärnor',
      hasVoted: false,
      inactiveColor:"#eaec53"
    };
  },

  methods: {
    setRating(rating) {
      this.chosenRating = rating;
    },
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

      this.hasVoted = true
      this.inactiveColor = "white"
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
  border: thick double #03031b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  
}
</style>
