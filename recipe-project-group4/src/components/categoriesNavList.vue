<template>
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
import { RouterLink } from 'vue-router'
import CategoryViewVue from '../views/CategoryView.vue';
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
  },
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

a:link {
  text-decoration: none;
}

p {
  color: black;
}
</style>
