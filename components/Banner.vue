<template>
        <v-toolbar app flat height=64 >
           <NuxtLink to="/HomePage"
      >
           <v-img
    
    src="/vegood.png"
    class="image"

  >
  </v-img>
           </NuxtLink>      
        </v-toolbar>
        
</template>

<script>
export default {
    name: 'Banner'
};
</script>

<style scoped>







.image{
  width:88px;
  height:27px;

position: absolute; 
 
  top:32px;
  left:677px;

}


</style>