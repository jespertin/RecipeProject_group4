<template>
  <div>
    <banner :name="name"/>
    
    <div id="componentContainer">
      <div id="navbarContainer">
        <categories-nav-list id="categoryMenu" />
      </div>

      <div id="listContainer">
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


export default {
  components: {
    RecipeItems,
    CategoriesNavList,
    Banner,
    Foot,
    FilterRecipes
  },
  data() {
    return {
      apiData: null,
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
          .catch((error) => console.log("error: " + error));
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
#mainContainer {
}

#componentContainer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-direction: row;
}

#listContainer {
  display: flex;
  flex-direction: column;
}

#navbarContainer {}

#categoryMenu {
  height: 100%;
}

#recipeList {}

#searchBar {
  align-self: center;
}

#buttonHome {
  background: #19b9bf;
  margin-inline-end: 19%;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 100%;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  width: 20vw;
}

#buttonHome:hover {
  background: #11cdd4;

  text-decoration: none;
}

a {
  max-width: 13%;

}

#headerCategoryView {
  margin-right: 19%;

}

.headerCurrentCategory {
  width: 15vw;
}
</style>
