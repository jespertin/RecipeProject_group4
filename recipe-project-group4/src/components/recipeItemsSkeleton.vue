<template>

    <div>
        <div id="searchBarSkeleton">
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        </div>
        <div id="recipeListContainer">
            <div class="recipeLink" v-for="n in 8">
                <div class="receptDiv">

                    <div id="recipeTitle" class="skeleton skeleton-text"></div>

                    <div class="pictureAndDescription">
                        <div class="description" id="info">
                            <ul v-for="n in 10">
                                <div class="skeleton skeleton-text"></div>
                            </ul>

                        </div>
                        <div class="skeleton skeleton-img"></div>

                    </div>
                    <div class="skeleton skeleton-text"></div>

                    <div class="skeleton skeleton-text"></div>


                    <div class="skeleton skeleton-text"></div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

}

</script>
<style scoped>
.skeleton {
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-img {
    width: 20vw;
    height: 200px;
    border-radius: 20px;
    margin-top: 15px;
    margin-right: 10px;
}

.skeleton-text {
    width: 100%;
    height: .5rem;
    margin-bottom: -0.75rem;
    margin-top: 0.25rem;
    margin-right: 10px;
    border-radius: .25rem;
}

.skeleton-text:last-child {
    width: 80%;
}

@keyframes skeleton-loading {
    0% {
        background-color: hsl(200, 20%, 70%);
    }

    100% {
        background-color: hsl(200, 20%, 95%);
    }
}

#searchBarSkeleton{
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    width: 50%;
    height: 20px;
    justify-content: space-around;
}
#recipeListContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: visible;
    justify-content: space-around;
}

.recipeLink {
    flex-basis: 20%;
    height: 50%;
    margin-bottom: 20px;
}

.recipeLink :hover {
    background-color: lightgray;
}

* {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
}

#pStyle {
    background-color: rgba(190, 232, 238, 0.966);
    border-radius: 5px;
    padding: 5px;
    pointer-events: none;
}

img {
    height: 13rem;
    width: 13rem;
    border-radius: 20px;
    border: solid 1px;
    margin-left: 10px;
    margin-right: 10px;
}

a {
    color: black;
    text-decoration: none;
}

.description {
    align-self: flex-start;
    width: 25rem;
    height: 13rem;
    overflow-y: auto;
    margin-left: 15px;
    margin-right: 10px;
    font-size: 1.0rem;
}

.pictureAndDescription {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

}

.receptDiv {
    border: 1px solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 20px;
    background-color: white;
    padding-left: 2px;
    padding-right: 2px;
    height: 300px;
    width: 500px;
}


h1 {
    text-align: center;
    text-decoration: underline;
    color: black;
    border-radius: 20px;
}

main {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

#ifListEmpty {
    text-align: center;
    font-style: italic;
}

#listEmptyText {
    text-align: center;
}

#recipeTitle {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.7rem;
}

@media screen and (max-width: 800px) {

.recipe-link {
    flex-basis: 100%;
    align-self: center;
}

.receptDiv {
    width: 94%;
    margin-right: 1%;
    margin-left: 1%;
}

}
</style>