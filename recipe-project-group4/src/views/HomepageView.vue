<template>
  <div>
    <header>
      <h1>Receptsajten</h1>
      <h2>Grupp 4</h2>
    </header>
    <div id="componentContainer">
      <div id="navbarContainer">
        <categories-nav-list id="categoryMenu" />
      </div>
      <div id="listContainer">
        <recipe-items id="recipeList" :mydata="apiData" />
      </div>
    </div>
    <footer>
      <div id="footer-container">
        <p id="copyright">© A Group 4 Production.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import RecipeItems from "../components/recipeItems.vue";
import CategoriesNavList from "../components/categoriesNavList.vue";

export default {
  components: {
    RecipeItems,
    CategoriesNavList,
  },
  data() {
    return {
      apiData: null,
      value: null
    };
  },
  created() {
    fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
      .then((response) => response.json())
      .then((data) => (this.apiData = data))
      .catch((error) => console.log("error: " + error));
  },
};
</script>


#listContainer {}

#navbarContainer {
  
}

#categoryMenu {
  
}

#recipeList {
}
</style>
