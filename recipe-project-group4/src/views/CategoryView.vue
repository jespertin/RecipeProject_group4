<template>
    <div>
    <header>
    <h1 id="headerCategoryView">{{this.$route.params.categoryName}}</h1>
    <router-link id="buttonHome" to="/"><h2>Receptsajten</h2></router-link>
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
        }
    },
    methods: {
        fetchData() {
            fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/categories/" + this.$route.params.categoryName + "/recipes")
                .then((response) => response.json())
                .then((data) => (this.apiData = data))
                .catch((error) => console.log("error: " + error));
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },

            { immediate: true }
        )
    }
}
</script>

<style scoped>
#buttonHome {
    
background: #19b9bf;
 
  margin-inline-end: 19%;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 100%;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  
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


</style>
