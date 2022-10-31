

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

/* body {
    background-color: #c7e9e9; 
    margin: 0;
    text-align: center;
    font-family: 'Merriweather', serif;
    color: #11999E;
} */


/* h1 {
    color: #e8eeee;
    margin: 0% auto 0 auto;
    font-family: 'Merriweather', serif;
    font-size: 2 rem;
    font-weight: bold;
    text-align: center;
    flex: 1;
}

h2 {
    color: #e8eeee;
    margin: 0% auto 0 auto;
    font-family: 'Merriweather', serif;
    ;
    font-weight: bold;
    flex: 1;
    text-align: center;
} */


/* h3 {
    color: #11999E;
    font-family: 'Montserrat', sans-serif;
} */

.routeTransition-enter-from {
    opacity: 0;
    transform: translateY(-30px)
}

.routeTransition-leave-to {
    opacity: 0;
    transform: translateY(30px)
}

.routeTransition-enter-active {
    transition: all 0.3s ease-out;
}

.routeTransition-leave-active {
    transition: all 0.3s ease-in;
}

.routeTransition-enter-to,
.routeTransition-leave-from {

    opacity: 1;
    transform: translateY(0)
}
</style>
    