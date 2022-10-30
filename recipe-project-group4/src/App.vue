

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
    font-size: 100%;
}


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
    