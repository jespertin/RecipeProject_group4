

<template>

    <RouterView />

    <!-- Kommenterat bort denna tillfälligt, funkar ej att gå tillbaks från RecipeView till HomepageView när den här är igång -->
    <!-- <RouterView v-slot="slotProps">
        <Transition name="routeTransition" mode="out-in">
            <component :is="slotProps.Component"></component>
        </Transition>
            
    </RouterView> -->

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
    