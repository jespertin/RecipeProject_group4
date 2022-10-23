<template>
  <div v-if="apiData">
    <header>
      <router-link id="buttonHome" to="/">
        <h2>Receptsajten</h2>
      </router-link>
      <div class="headerCurrentCategory">
        <h1 v-if="this.$route.params.categoryName" id="headerCategoryView">{{ this.$route.params.categoryName }}</h1>
        <h1 v-else>Alla recept</h1>
      </div>
    </header>

    <div id="componentContainer">
      <div id="navbarContainer">
        <categories-nav-list id="categoryMenu" />
      </div>

      <div id="listContainer">
        <FilterRecipes id="searchBar" :recipes="apiData" @filtered-data="handleSearchEvent" />
        <recipe-items id="recipeList" :mydata="listOfRecipes" />
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
import FilterRecipes from "../components/filterRecipes.vue";


export default {
  components: {
    RecipeItems,
    CategoriesNavList,
    FilterRecipes
  },
  data() {
    return {
      apiData: null,
      listOfRecipes: null
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
          .catch((error) => console.log("error: " + error));
      }
    },
    handleSearchEvent(searchResult) {
      console.log("Event handler in Hompage result")
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
      console.log("Watcher on HomepageView data")
      this.listOfRecipes = this.apiData
    }
  }
};
</script>

<style scoped>
#componentContainer {
  display: flex;
  justify-content: center;
  margin-top: 20vh;
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
  width: 40vw;
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
  width: 10vw;
}
</style>
