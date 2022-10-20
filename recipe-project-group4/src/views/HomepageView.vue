<template>
  <div>
    <header>
        <h1>Receptsajten</h1>
        <h2>Grupp 4</h2>
    </header>

  
  <categories-nav-list></categories-nav-list>
  <recipe-items :mydata="apiData"></recipe-items>

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
    CategoriesNavList
  },
  data() {
    return {
      apiData: null,
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


