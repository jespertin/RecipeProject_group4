<template>
  <RouterLink id="buttonHome" to="/">Startsida</RouterLink>
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  justify-content: space-around;
  width: 170px;
  border-radius: 20px;

  background-color: white;
}

ul {
  list-style: none;
  padding-left: 0%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  justify-content: space-around;
}

li {
  text-align: left;
 
}

h3 {
  text-align: left;
  color: black;
 
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
  border-radius: 20px;
  
}


a:hover,
a:active,
/* a.router-link-active{
  
  background-color: rgba(154, 162, 163, 0.966);
} */

a :hover{
  background-color: rgba(154, 162, 163, 0.966);
}

#buttonHome {

  background: #11cdd4;
   
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    font-size: 25px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    margin-top: 1%;
}

#buttonHome:hover {
  background: #30e3cb;
  
    text-decoration: none;
}
</style>
