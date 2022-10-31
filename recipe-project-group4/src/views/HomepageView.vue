<template>
  <div id="homePageWrapper">

    <banner :name="name" />

    <div id="mainContainer">
      <div id="navbarContainer">
        <categories-nav-list id="categoryMenu" />
      </div>
      
      <div v-if="!listOfRecipes" id="componentContainerSkeleton">
        <RecipeItemsSkeleton></RecipeItemsSkeleton>
      </div>
      <div v-else id="componentContainer">
        <FilterRecipes id="searchBar" :recipes="apiData" @filtered-data="handleSearchEvent" />
        <recipe-items id="recipeList" :mydata="listOfRecipes" />
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
    },

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

#homePageWrapper{
  min-width: 1000px;
  display: flex;
  flex-direction: column;
}
#mainContainer {
  display: flex;
  flex-direction: row;
  width: 100%;

}

#navbarContainer {
  display: flex;
  flex-basis: 15%;
  min-height: 1500px;
}

#componentContainer {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
}

#componentContainerSkeleton {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
}

#recipeList{
}

#categoryMenu {
}

a {
  max-width: 13%;
}

.headerCurrentCategory {
  width: 15vw;
}

@media screen and (max-width: 1000px) {
  #componentContainer {
    flex-wrap: wrap;
  }

  #categoryMenu {
    height: auto;
  }
}
</style>
