<template>
 
  <div>
    <h3>Kategorier</h3>
    <ul v-if="apiData">
      <router-link class="routerLink"  v-for="category in apiData" :to="'/category/' + category.name">
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

.routerLink{
  text-decoration: none;
}

p {
  color: black;
  
}
a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 7px 18px 7px 4px;
  display: inline-block;
  border-radius: 20px;
  
}


a:hover,
a:active,
a.router-link-active{
  border-color: aqua;
  background-color: rgb(147, 249, 215);
}


</style>
