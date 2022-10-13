

<template>
<RouterView />
    
    
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
#footer-container {
    background-color: #11999E;
    margin: auto;
    padding-top: 0%;
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
    text-align: center

} 
header {
  width: 100%;
  height: 5 rem;
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
  background-color:  #11999E;
 

}
h3 {
    color: #11999E;
    font-family: 'Montserrat', sans-serif;



}


</style>
    