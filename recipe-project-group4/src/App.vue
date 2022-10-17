

<template>
<RouterView />
    
    
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
    flex: 2;
    text-align: left;

} 
h2 {
    color: #e8eeee;
    margin: 0% auto 0 auto;
    font-family: 'Merriweather', serif;;
    font-size: 3 rem;
    font-weight: bold;
    flex: 1;
    text-align: left;
}
header {
  width: 100%;
  height: 5 rem;
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color:   #19b9bf;
  
 

}
h3 {
    color: #11999E;
    font-family: 'Montserrat', sans-serif;



}


</style>
    