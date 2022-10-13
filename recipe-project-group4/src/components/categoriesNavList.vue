<template>
  <RouterLink id="buttonHome" to="/">home</RouterLink>
  <div>
    <h3>Kategorier</h3>
    <ul v-if="apiData">
      <router-link  v-for="category in apiData" :to="'/category/' + category.name">
        <li>
          <p>{{ category.name }} ({{ category.count }})</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: null,
    };
  },
  created() {
    fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/categories")
      .then((response) => response.json())
      .then((data) => (this.apiData = data))
      .catch((error) => console.log("error: " + error));
  }
};
</script>

<style scoped>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

div {
  width: 170px;

  background-color: lightgrey;
}

ul {
  list-style: none;
  padding-left: 0%;
}

li {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

h3 {
  text-align: left;
  margin-left: 20px;
}

p {
  color: black;
}
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: rgb(0, 0, 0);
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border-radius: 20px;
}


a:hover,
a:active,
a.router-link-active{
  color: rgb(21, 19, 19);
  border-color: aqua;
  background-color: aquamarine;
}

#buttonHome {

  background: #11cdd4;
   
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
}

#buttonHome:hover {
  background: #30e3cb;
  
    text-decoration: none;
}
</style>
