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
      <ul v-if="dataArray">
        <div v-for="comment in dataArray.slice(0,commentLimit)" :key="comment.name">
          <div class="containerCommentInput" id="commentSingleDiv">
            <p id="commentNameField">{{comment.name}}</p>
            <p id="commentDateField">{{comment.createdAt}}</p>
            <p id="commentTextField">{{comment.comment}}</p>
          </div>
        </div>
        <div id="loadMoreCommentsButtonDiv">
          <button id = "loadMoreCommentsButton" v-if="Object.keys(commentsData).length > commentLimit" v-on:click="loadMoreComments()"> Load more
            comments</button>
        </div>

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
      dataArray: null,

    }

  },
  watch: {
    commentsData() {
      this.convertCommentDataToArray()
    },
    
  },

  created() {
    this.loadCommentData()
  },


  methods: {

   
    convertCommentDataToArray() {

      this.dataArray = Object.keys(this.commentsData).map((id) => { return this.commentsData[id] })
      this.dataArray = this.dataArray.reverse()

      const options = { day: 'numeric', month: 'long', year: 'numeric' }

      this.dataArray.forEach(element => {

        var date = new Date(element.createdAt).toLocaleString('se-SE', options)

        element.createdAt = date
      })
    },

    loadCommentData() {

      fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId + "/comments")
        .then(response => response.json())
        .then(data => this.commentsData = data)
        .catch(error => console.log("error: " + error))
    },

    addComment() {

      this.toggleDisabled = true

      if (this.newCommentName != null && this.newCommentName.length < 36 && this.newCommentText != null && this.newCommentText.length < 1000) {

        fetch('https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/' + this.$route.params.recipeId + "/comments", {
          method: 'POST',
          body: JSON.stringify({
            comment: this.newCommentText,
            name: this.newCommentName,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then (() => {this.loadCommentData()})

        this.commentSent = true
      }
      else
        alert("Please enter your comment (max. 1000 characters) and a valid name (max. 40 characters).")

      this.newCommentName = null;
      this.newCommentText = null;
      this.newCommentDate = null;

      this.toggleDisabled = false
    },


    loadMoreComments() {
      this.commentLimit += 5
    },

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
  word-break: break-all;

}

ul {
  padding-inline-start: 0px;
}

#commentSingleDiv {
  background-color: white;
  border-color: black;
  border-style: hidden hidden ridge;
  border-width: 1px;
  margin-top: 15px;
  align-content: flex-start;
  width: 90%;
}



#commentNameField {
  flex-basis: 60%;
  padding-left: 30px;
  font-size: 18px;

}

#commentDateField {
  flex-basis: 15%;
  padding-left: 30px;
  font-size: 12px;
  margin-top: 22px;
}

#commentTextField {
  flex-basis: 80%;
  padding-left: 30px;
  font-size: 12px;
  word-break: break-word;
}


textarea {
  margin: 5px;
  height: 120px;
  width: 90%;
  border: 3px solid lightgray;
  border-radius: 4px;
  resize: none;
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
  margin-top: 12px;
  background-color: black;
  color: white;
  font-size: 14px;
  height: 55%;
  width: 75%;
  border-radius: 40px;
  cursor: pointer;
}

#sendButtonDiv {
  flex-basis: 20%;
  flex-grow: 1;
  flex-shrink: 0;
}

#loadMoreCommentsButtonDiv {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 25%;
  align-self: center;
  width: 60%;
}
#loadMoreCommentsButton{
  font-size: 12px;
  background-color: white;
  color: black;
  border-style: hidden;
  font-weight: bold;
}

</style>