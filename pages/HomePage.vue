<template>
   <div>

        
        <main-section></main-section>
      <second-section>
      </second-section>

       

     
        
</div>
       
</template>

<script>
import MainNavigation from '~/components/MainNavigation';
import MainSection from"~/components/MainSection";
import SecondSection from "~/components/SecondSection";
import Restaurants from "~/components/Restaurants";






export default {

    name: 'HomePage',
    components: {
        MainNavigation,
        MainSection,
        Restaurants,
        SecondSection
     
       
    },

    data(){
        return{

        }
    },

    










};
</script>

<style>
</style>