<template>
    <h1>This is Homepage</h1>


    <ul v-if="apiData">
        <li v-for="recipe in apiData">{{recipe.title}}</li>
    </ul>

</template>
    
    
<script>
export default {
    data() {
        return {
            apiData: null,
        }
    },
    created() {
        fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
            .then(response => response.json())
            .then(data => this.apiData = data)
            .catch(error => console.log("error: " + error));

    }
}
</script>