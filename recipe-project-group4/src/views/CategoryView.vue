<template>
  <h1>This is the Category page</h1>

  <categories-nav></categories-nav>
  <recipe-items :mydata="apiData"></recipe-items>

</template>

<script>
import RecipeItems from "../components/recipeItems.vue";
import CategoriesNav from "../components/categoriesNavList.vue";
import { RouterLink } from "vue-router";

export default {
    components: {
    RecipeItems,
    CategoriesNav,
  },

  data() {
    return {
      apiData: null,
    };
  },
  created() {
    fetch(
      "https://jau21-grupp4-4d9plfkz634h.sprinto.se/categories/" +
        this.$route.params.categoryId +
        "/recipes"
    )
      .then((response) => response.json())
      .then((data) => (this.apiData = data))
      .catch((error) => console.log("error: " + error));
  },
};
</script>
