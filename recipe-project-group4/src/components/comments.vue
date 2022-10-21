<template>

  <Rating></Rating>

  <div class="containerCommentSectionWrapper">
    <h1>Kommentarer</h1>

    <div>
      <h3 v-if="commentSent"> Tack för din kommentar! </h3>

      <div v-else class="containerCommentInput">
        <div id="commentTextInputDiv">
          <textarea placeholder="Skriv kommentar här" name="newCommentText" v-model="newCommentText"></textarea>
        </div>
        <div id="nameInputDiv">
          <input placeholder="Ditt namn" name="newCommentName" v-model="newCommentName">
        </div>
        <div id="sendButtonDiv">
          <button v-bind:disabled="toggleDisabled" v-on:click="addComment()"> Skicka </button>
        </div>

      </div>
    </div>

    <div>
      <ul v-if="commentsData">
        <div v-for="comment in commentsData.slice(0,commentLimit)" :key="comment.name">
          <div class="containerCommentInput" id="commentSingleDiv">
            <p id="commentNameField">{{comment.name}}</p>
            <p id="commentTextField">{{comment.comment}}</p>
            <!--<li>{{comment.date}}</li>-->
          </div>
        </div>
        <button v-if="Object.keys(commentsData).length > commentLimit" v-on:click="loadMoreComments()"> Load more
          comments</button>
      </ul>
    </div>

  </div>
</template>

<script>
import Rating from './Rating.vue'


export default {

  components: {
  Rating
  },
  data() {
    return {

      commentLimit: 5,
      newCommentDate: null,
      newCommentText: null,
      newCommentName: null,
      commentsData: null,
      commentSent: false,
      toggleDisabled: false,

    }
  },

  created() {
    this.loadCommentData()
  },


  methods: {

    loadCommentData() {
      fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId + "/comments")
        .then(response => response.json())
        .then(data => this.commentsData = data)
        .catch(error => console.log("error: " + error));

    },

    addComment() {

      this.toggleDisabled = true

      if (this.newCommentName != null && this.newCommentText != null) {

        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        this.newCommentDate = new Date().toLocaleString('se-SE', options)
        console.log(this.newCommentDate)

        fetch('https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/' + this.$route.params.recipeId + "/comments", {
          method: 'POST',
          body: JSON.stringify({
            comment: this.newCommentText,
            name: this.newCommentName,
            date: this.newCommentDate
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })

        this.commentSent = true
      }
      else
        alert("Please enter your comment and a name.")
      this.newCommentName = null;
      this.newCommentText = null;
      this.newCommentDate = null;

      this.loadCommentData()

      this.toggleDisabled = false
    },


    loadMoreComments() {
      this.commentLimit += 5
    },
    testFunctionDate() {


      //      this.toggleDisabled = true
      /*       const options = { day: 'numeric', month: 'long', year: 'numeric' }
            
            this.newCommentDate = new Date().toLocaleString('se-SE', options)
            console.log(this.newCommentDate) */

    }

  }
}
</script>
<style scoped>
.containerCommentSectionWrapper {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.containerCommentInput {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

ul {
  padding-inline-start: 0px;
}

#commentSingleDiv {
  background-color: gray;
  margin-top: 15px;
  align-content: flex-start;
  width: 90%;
}

.containerCommentInput>p {
  flex-basis: 70%;
  padding-left: 30px;
}

textarea {
  margin: 5px;
  height: 120px;
  width: 90%;
  border: 3px solid lightgray;
  border-radius: 4px;
}

#commentTextInputDiv {
  flex-basis: 90%;
  flex-grow: 1;
  flex-shrink: 0;
}

input {
  margin: 5px;
  height: 40px;
  width: 90%;
  border: 3px solid lightgray;
  border-radius: 4px;

}

#nameInputDiv {
  flex-basis: 60%;
  flex-grow: 1;
  flex-shrink: 0;
}

button {
  margin-top: 10px;
  background-color: black;
  color: white;
  font-size: 20px;
  height: 70%;
  width: 65%;
  border-radius: 40px;
  cursor: pointer;
}

#sendButtonDiv {
  flex-basis: 20%;
  flex-grow: 1;
  flex-shrink: 0;
}
</style>