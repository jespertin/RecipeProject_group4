<template>
    <div>

        <Banner :name="name" />
        <categories-nav-list></categories-nav-list>
        <recipe-items :mydata="apiData"></recipe-items>

        <Foot/>
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
        Foot
    },

    data() {
        return {
            apiData: null,
            name: ""

        }
    },
    methods: {
        fetchData() {
            fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/categories/" + this.$route.params.categoryName + "/recipes")
                .then((response) => response.json())
                .then((data) => (this.apiData = data))
                .catch((error) => console.log("error: " + error))
                .finally(() => { this.name = this.$route.params.categoryName })

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

a {
    max-width: 13%;

}

</style>
