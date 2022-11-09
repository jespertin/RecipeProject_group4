

<template>

    <RouterView />

</template>

<script >
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

body {
    margin: 0;
    background-color: #FFFAF0;
}

html {
    overflow-y: scroll;
}

@media screen and (max-width: 800px) {
    html{
        overflow-y: auto;
    }
}

</style>
    