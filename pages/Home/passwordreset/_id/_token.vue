<template>
   <div>

        
        <main-section></main-section>
      <second-section>
      </second-section>
      <password>
      </password>
     
       

     
        
</div>
       
</template>

<script>
import MainNavigation from '~/components/MainNavigation';
import MainSection from"~/components/MainSection";
import SecondSection from "~/components/SecondSection";
import Restaurants from "~/components/Restaurants";
import Password from "~/components/Password";







export default {
 auth: false
,
    name: 'passwordreset',
    components: {
        MainNavigation,
        MainSection,
        Restaurants,
       
        SecondSection,
        Password
     
       
    },

    data(){
        return{

        }
    },

    
methods:{

open () {

 

    this.$modal.show('password' )
     document.documentElement.style.overflow = 'hidden'
    


  
  },


},



async mounted(){


 
                   
this.$nextTick(function () {
                                  this.open()
})

 



                          
                   
        
        },









};
</script>

<style>
</style>