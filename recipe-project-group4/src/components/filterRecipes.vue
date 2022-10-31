<template>

    <div class="wrapper">
        <img class="search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        <input class="searchBar" type="text" v-model="searchString" :placeholder="searchBarPlaceHolder" />
    </div>

</template>

<script>
export default {
    data() {
        return {
            searchString: "",
            resultList: null
        }
    },
    props: {
        recipes: {
            type: Array,
            required: true,
        },
        searchBarPlaceHolder: {
            type: String,
            default: "Sök efter recept"
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
    border: 1px solid grey;
    border-radius: 20px;
    height: 30px;
    width: 100%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
    text-align: center;
    box-sizing: border-box;
}

.wrapper {
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 5px;
    margin: auto;
    position: relative;
}

.search-icon {
    top: 6px;
    left: 8px;
    width: 14px;
    position: absolute;
}


.searchBar:hover,
.searchBar:focus {
    background-color: white;
    border: 2px solid black;
}
</style>