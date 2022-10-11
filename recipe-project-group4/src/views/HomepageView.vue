<template>
  <h1>This is Homepage</h1>

  <categories-nav></categories-nav>
  <recipe-items :mydata="apiData"></recipe-items>
</template>

<script>
import RecipeItems from "../components/recipeItems.vue";
import CategoriesNav from "../components/categoriesNavList.vue";
export default {
  components: {
    RecipeItems,
    CategoriesNav
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
