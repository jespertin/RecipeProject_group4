<template>
  <div>
    <banner/>
    
    <div id="componentContainer">
      <div id="navbarContainer">
        <categories-nav-list id="categoryMenu" />
      </div>
      <div id="listContainer">
        <recipe-items id="recipeList" :mydata="apiData" />
      </div>
    </div>
    <foot/>
  </div>
</template>

<script>
import RecipeItems from "../components/recipeItems.vue";
import CategoriesNavList from "../components/categoriesNavList.vue";
import Banner from '../components/banner.vue'
import Foot from '../components/foot.vue'

export default {
  components: {
    RecipeItems,
    CategoriesNavList,
    Banner,
    Foot,
  },
  data() {
    return {
      apiData: null,
      value: null,
      category: null
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

#listContainer {}

#navbarContainer {
  
}

#categoryMenu {
  
}

#recipeList {
}
</style>
