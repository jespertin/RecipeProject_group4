<template>
    <input class="searchBar" type="text" v-model="searchString" :placeholder="searchBarPlaceHolder" />
</template>

<script>
export default {
    props: {
        recipes: {
            type: Array,
            required: true,
        },
        searchBarPlaceHolder: {
            type: String,
            default: "Search"
        }
    },
    data() {
        return {
            searchString: "",
            resultList: null
        }
    },
    methods: {
        filterBySearchString() {
            this.resultList = this.recipes.filter(recipe => recipe.title.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1)
        }
    },
    watch: {
        searchString: {
            handler() {
                this.filterBySearchString()
                this.$emit("filteredData", this.resultList)
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
.searchBar {
    width: 100%;
}
</style>