<template>
  <div class="containerCommentSectionWrapper">
    <h1>Kommentarer</h1>
    <div>
      <h3 v-if="commentSent"> Tack för din kommentar! </h3>

      <div v-else class="containerComment">
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

    <div id="commentList">
      <ul v-if="commentDataArray">
        <div class="containerComment" id="commentSingleDiv" v-for="comment in commentDataArray.slice(0, commentLimit)"
          :key="comment.id">
          <p id="commentNameField">{{ comment.name }}</p>
          <p id="commentDateField">{{ comment.createdAt }}</p>
          <p id="commentTextField">{{ comment.comment }}</p>
        </div>
        <div id="loadMoreCommentsButtonDiv">
          <button id="loadMoreCommentsButton" v-if="Object.keys(commentsData).length > commentLimit"
            v-on:click="loadMoreComments()"> Load more comments</button>
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
      commentDataArray: null,
      commentSent: false,
      isDisabled: true,

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

    loadCommentData() {

      fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes/" + this.$route.params.recipeId + "/comments")
        .then(response => response.json())
        .then(data => this.commentsData = data)
        .catch(error => console.log("error: " + error))
    },

    convertCommentDataToArray() {

      this.commentDataArray = Object.keys(this.commentsData).map((id) => { return this.commentsData[id] })
      this.commentDataArray = this.commentDataArray.reverse()

      const options = { day: 'numeric', month: 'long', year: 'numeric' }

      this.commentDataArray.forEach(element => {

        var date = new Date(element.createdAt).toLocaleString('se-SE', options)

        element.createdAt = date
      })
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
          .catch(error => { console.log(error.message) })
          .then((response) => { if (response.ok) { this.commentSent = true, this.loadCommentData() } return response.json(); })
      }

      else {
        alert("Please enter your comment (max. 1000 characters) and a valid name (max. 40 characters).")
      }

      this.newCommentName = "";
      this.newCommentText = "";
      this.newCommentDate = "";
    },

    toggleDisable() {

      if (this.newCommentText.length > 0 && this.newCommentName.length > 0)
        this.isDisabled = false
      else
        this.isDisabled = true
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

.containerComment {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  word-break: break-word;

}

#commentList {
  margin-top: 50px;
}

ul {
  padding-inline-start: 0px;
}

#commentSingleDiv {
  border-color: black;
  border-style: hidden hidden ridge;
  border-width: 1px;
  margin-top: 20px;
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
  margin-bottom: 20px;
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
  background-color: #FFFAF0;
  color: black;
  border-style: hidden;
  font-weight: bold;
  width: 50%;
}
</style>