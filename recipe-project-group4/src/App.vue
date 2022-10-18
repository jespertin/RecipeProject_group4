

<template>
    <RouterView v-slot="slotProps">
        <Transition name="routeTransition" mode="out-in">
            <component :is="slotProps.Component"></component>
        </Transition>
            
    </RouterView>

    
    
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
#footer-container {
    background-color: #11999E;
    padding-top: 0%;
    border-bottom: 5%;
    margin-top: 0%;
    bottom: 10 rem;
    
}

#copyright {
    color: #EAF6F6;
    font-size: 150%;
    font-family: 'Merriweather', serif;
    padding: 20px 0;
    text-align: center;
}
body {
    background-color: #c7e9e9; 
    margin: 0;
    text-align: center;
    font-family: 'Merriweather', serif;
    color: #11999E;
}

 
h1 {
    color: #e8eeee;
    margin: 0% auto 0 auto;
    font-family: 'Merriweather', serif;;
    font-size: 2 rem;
    font-weight: bold;
    text-align: center;
    flex: 1;

} 
h2 {
    color: #e8eeee;
    margin: 0% auto 0 auto;
    font-family: 'Merriweather', serif;;
    font-weight: bold;
    flex: 1;
    text-align: center;
}
header {
  width: 100%;
  height: 4 rem;
  padding: 2% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:   #19b9bf;
  
 

}
h3 {
    color: #11999E;
    font-family: 'Montserrat', sans-serif;



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
    