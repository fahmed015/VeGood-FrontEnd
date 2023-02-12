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
auth: false,

    name: 'Home',
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

    
 mounted () {
   // console.log("POsssss222222 main")
    console.log(this.$auth.user)
    //document.documentElement.scroll(0,1200)


   

  },
  
// methods: {
//   handleScroll () {
//     console.log(window.scrollY)
//   }
// },
// created () {
//     if (process.client) { 
//         window.addEventListener('scroll', this.handleScroll);
//     }
// },
// destroyed () {
//     if (process.client) { 
//         window.removeEventListener('scroll', this.handleScroll);
//     }
// }








};
</script>

<style>
</style>