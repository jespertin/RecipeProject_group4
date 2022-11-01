<template>
  <div id="Border">
    <div v-if="!hasVoted">
      <h2>Vad tyckte du om receptet?</h2>
      <h3>Klicka på en stjärna för att ge ditt betyg!</h3>
      </div>
      <div v-else>
        <h2> Tack för din röst</h2>
      </div>
      <form @submit.prevent="addRating">
        <div>
          <star-rating id="starRating" v-bind:showRating="false" active-color="orange" v-bind:inactive-color="inactiveColor" v-bind:read-only="hasVoted" @update:rating="setRating" v-on:click="addRating()">
          </star-rating>

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
      hasVoted: false,
      inactiveColor: "#eaec53"
    };
  },

  emits: ['response'],

  watch: {
    hasVoted() {
      this.$emit( 'response' , this.hasVoted)
    },
  },
  methods: {
    setRating(rating) {
      this.chosenRating = rating;
    },
    addRating() {

      fetch('https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/' + this.$route.params.recipeId + "/ratings", {
        method: 'POST',
        body: JSON.stringify({
          rating: this.chosenRating
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => { if (response.ok) {this.hasVoted = true, this.inactiveColor = "white" }})
      
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
  color: #f5390a;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

h3{
  text-align: center;
}

#Border {
  margin: 2rem auto;
}

</style>
