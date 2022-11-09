<template>

  <div id="mainContainer">
    <banner :name="name" />
    <categories-nav-list id="categoryMenu" />
    <div v-if="!listOfRecipes" class="recipesAndSearchbarContainer">
      <RecipeItemsSkeleton></RecipeItemsSkeleton>
    </div>

    <div v-else class="recipesAndSearchbarContainer">
      <FilterRecipes id="searchBar" :recipes="apiData" @filtered-data="handleSearchEvent" />

      <recipe-items id="recipeList" :mydata="listOfRecipes" />
    </div>
    <div id="footerContainer">
      <foot />
    </div>
  </div>

</template>

<script>
import RecipeItems from "../components/recipeItems.vue";
import CategoriesNavList from "../components/categoriesNavList.vue";
import Banner from '../components/banner.vue'
import Foot from '../components/foot.vue'
import FilterRecipes from "../components/filterRecipes.vue";
import RecipeItemsSkeleton from "../components/recipeItemsSkeleton.vue";


export default {
  components: {
    RecipeItems,
    CategoriesNavList,
    Banner,
    Foot,
    FilterRecipes,
    RecipeItemsSkeleton
  },
  data() {
    return {
      apiData: [],
      listOfRecipes: null,
      category: null,
      name: ""
    };
  },

  methods: {
    fetchData(doFetchAllRecipes) {
      if (doFetchAllRecipes) {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
          .then((response) => response.json())
          .then((data) => (this.apiData = data))
          .catch((error) => console.log("error: " + error))
          .finally(() => this.name = "Alla Rätter")
      } else {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/categories/" + this.$route.params.categoryName + "/recipes")
          .then((response) => response.json())
          .then((data) => (this.apiData = data))
          .catch((error) => console.log("error: " + error))
          .finally(() => { this.name = this.$route.params.categoryName })

      }
    },
    handleSearchEvent(searchResult) {
      this.listOfRecipes = searchResult;
    }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.categoryName) {
          this.fetchData(false)
        }
        else {
          this.fetchData(true)
        }
      }, { immediate: true }
    )
  },
  watch: {
    apiData() {
      this.listOfRecipes = this.apiData
    }
  }
};
</script>

<style scoped>
#footerContainer {
  width: 100%;
  clear: both;
}

#mainContainer {
  width: auto;
}

.recipesAndSearchbarContainer {
  float: right;
  width: 84%;
  margin: auto;
}

#categoryMenu {
  float: left;
  width: 15%;
  height: 500px;
  overflow-y: auto;

}

#searchBar {
  align-self: center;
  width: 50%;
  margin-bottom: 3%;
  margin-top: 3%;
}


@media screen and (max-width: 800px) {
  #categoryMenu {
    float: none;
    height: auto;
    width: 94%;
    margin-right: 3%;
    margin-left: 3%;
    margin-bottom: 3%;
    border-radius: 20px;
  }

  .recipesAndSearchbarContainer {
    float: none;
    width: 100%;
    margin-right: 1%;
    margin-left: 1%;
  }

  #searchBar {
    width: 94%;
    margin-bottom: 3%;
  }
}
</style>
