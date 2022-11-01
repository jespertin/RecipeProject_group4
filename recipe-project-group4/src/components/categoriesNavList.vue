<template>

  <div>
    <h3>Kategorier</h3>
    <ul v-if="apiData">
      <router-link class="routerLink" v-for="category in apiData" :to="'/category/' + category.name">
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.1rem;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  width: 12rem;
  border-radius: 20px;
  margin-left: 10px;
  background-color: white;
  border: solid 1px;
}

ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
}

li {
color: black;
}

h3 {
  text-align: left;
  color: black;
  font-size: 1.3rem;

}

.routerLink {
  text-decoration: none;
}

p {
  margin-left: 10px;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 20px;

}

a.router-link-active {
  font-weight: 900;
  pointer-events: none;
  cursor: default;
}


a:hover {
  background: lightgray;
  border-radius: 0;
}
</style>
