<template>
    <h1>{{this.$route.params.categoryName}}</h1>
    <categories-nav-list></categories-nav-list>
    <recipe-items :mydata="apiData"></recipe-items>
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
