<template>
    <div id="Border">
        <h2>Vad tyckte du om receptet?</h2>
        <h3>Klicka på en stjärna för att ge ditt betyg!</h3>
      <form @submit.prevent="addRating">  
        
         <div class="form-control">
          <!-- <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label> -->
          <star-rating :increment="0.5" id="starRating" @update:rating ="setRating"></star-rating>  
          
        </div>
      
        <div>
          <button v-on:click="addRating()" >Submit Rating</button>
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

methods: {
        setRating(rating){
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

    },
    data() {
      return {
       chosenRating: null,

      };
    },
/*     created() {
      fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
        .then((response) => response.json())
        .then((data) => (this.apiData = data))
        .catch((error) => console.log("error: " + error));
    }, 
  };*/
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

</style>
  
  
  