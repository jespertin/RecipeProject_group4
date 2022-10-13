<template>
  <header>
  <h1>Recipe site</h1>
  <h1>Group 4</h1>
</header>
  <categories-nav-list></categories-nav-list>
  <recipe-items :mydata="apiData"></recipe-items>
  <footer>
    <div id="footer-container">
      <p id="copyright">© A Group 4 Production.</p>
    </div>
  </footer>
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

<style>

</style>
