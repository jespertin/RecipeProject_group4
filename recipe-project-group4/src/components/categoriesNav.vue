<template>
  <ul>
    <div>
      <li>Huvudrätt: ({{ calculateAmount() }})</li>
    </div>
  </ul>
</template>

<script>

   
export default {
  data() {
    return {
      apiData: null,
     
    };
  },
  created() {
    fetch("https://jau21-grupp4-4d9plfkz634h.sprinto.se/recipes")
      .then((response) => response.json())
      .then((data) => (this.apiData = data))
      .catch((error) => console.log("error: " + error));

     
  },

  methods: {
   
    calculateAmount() {
        
     var amount;

      for (recipe in this.apiData) {
        if (recipe.categories === "huvudrätt") {
          amount++
        }
        
      }
      return amount;
    },
  },
};
</script>

<style scoped>
div {
  border: solid 2px;
  height: 40px;
  width: 20px;
}
</style>
