<template>
    <h1>This is Homepage</h1>

    <recipe-item></recipe-item>
    <categori-nav-bar></categori-nav-bar>
   
    

</template>

<script>
    import RecipeItem from '../components/recipeItems.vue'
    import CategoriNavBar from '../components/categoriesNavList.vue'
export default {
    components: {
        RecipeItem,
        CategoriNavBar

    }   
}
</script>