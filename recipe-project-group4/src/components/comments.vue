<template>
  <div class="containerCommentSectionWrapper">
    <h1>Kommentarer</h1>
    <div>
      <h3 v-if="commentSent"> Tack för din kommentar! </h3>

      <div v-else class="containerCommentInput">
        <div id="commentTextInputDiv">
          <textarea placeholder="Skriv din kommentar" name="newCommentText" v-model="newCommentText"
            v-on:input="toggleDisable()"></textarea>
        </div>
        <div id="nameInputDiv">
          <input placeholder="Ditt namn" name="newCommentName" v-model="newCommentName" v-on:input="toggleDisable()">
        </div>
        <div id="sendButtonDiv">
          <button v-bind:disabled="isDisabled" v-on:click="addComment()"> Skicka </button>
        </div>

      </div>
    </div>

    <div>
      <ul v-if="dataArray">
        <div v-for="comment in dataArray.slice(0, commentLimit)" :key="comment.id">
          <div class="containerCommentInput" id="commentSingleDiv">
            <p id="commentNameField">{{ comment.name }}</p>
            <p id="commentDateField">{{ comment.createdAt }}</p>
            <p id="commentTextField">{{ comment.comment }}</p>
          </div>
        </div>
        <div id="loadMoreCommentsButtonDiv">
          <button id="loadMoreCommentsButton" v-if="Object.keys(commentsData).length > commentLimit"
            v-on:click="loadMoreComments()"> Load more
            comments</button>
        </div>

      </ul>
    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {

      commentLimit: 5,
      newCommentDate: null,
      newCommentText: "",
      newCommentName: "",
      commentsData: null,
      commentSent: false,
      isDisabled: true,
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

    toggleDisable() {

      if (this.newCommentText.length > 0 && this.newCommentName.length > 0)
        this.isDisabled = false
      else
        this.isDisabled = true
    },

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

      this.isDisabled = true

      if (this.newCommentName.length > 0 && this.newCommentName.length < 36 && this.newCommentText.length > 0 && this.newCommentText.length < 1000) {

        fetch('https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/' + this.$route.params.recipeId + "/comments", {
          method: 'POST',
          body: JSON.stringify({
            comment: this.newCommentText,
            name: this.newCommentName,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .catch(error => {console.log(error.message)})
          .then((response) => { if (response.ok) { this.commentSent = true, this.loadCommentData() } return response.json(); })
          //.then((response) => { if (!response.ok) { console.log("error" + response.json()) } })

        //.catch(error => { console.log("error: " + error), this.isDisabled = false })
      }
      else
        alert("Please enter your comment (max. 1000 characters) and a valid name (max. 40 characters).")

      this.newCommentName = "";
      this.newCommentText = "";
      this.newCommentDate = "";

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
  width: 100%;
  border-top: solid 1px;

}

.containerCommentInput {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  word-break: break-word;

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
  width: 100%;
}



#commentNameField {
  flex-basis: 65%;
  padding-left: 30px;
  font-size: 18px;

}

#commentDateField {
  flex-basis: 22%;
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
  margin-bottom: 5px;
 resize: none;
  padding: 0%;
  height: 120px;
  width: 100%;
  border: 3px solid lightgray;
  border-radius: 4px;
 
}

#commentTextInputDiv {
  
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
}

input {
  margin-bottom: 5px;
  padding: 0%;
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
  width: 70%;
  border-radius: 40px;
  cursor: pointer;
}

button:disabled {
  background-color: lightgray;
  border-style: solid;
  border-color: lightgray;
  color: gray;
  cursor: auto;
}

#sendButtonDiv {
  flex-basis: 20%;
  flex-grow: 1;
  flex-shrink: 0;
}

#loadMoreCommentsButtonDiv {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 30%;
  width: 60%;
}

#loadMoreCommentsButton {
  font-size: 12px;
  background-color: white;
  color: black;
  border-style: hidden;
  font-weight: bold;
  width: 50%;
}
</style>