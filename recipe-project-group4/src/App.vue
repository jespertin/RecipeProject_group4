<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <RouterLink to="/">home</RouterLink>
    <br/>
    <RouterLink to="/recipe">recipe</RouterLink>
    <br/>
    <RouterLink to="/category">category</RouterLink>

    <RouterView />
</template>

