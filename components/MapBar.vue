<template>
      

<div>
 <v-row no-gutters>

    <v-col cols="4" md="3">

<map-button>
</map-button>





    </v-col>
<v-col cols="8" md="9">
<v-select
     :items="items"
   
    height="30"
      :menu-props="{ auto: true, offsetY: true }"
      background-color="#F0F9F4"
 
  outlined
  clearable

      color="theme2"
      
    >

     
    
    </v-select>
</v-col>
  </v-row>

    </div>


        
</template>

<script>
import MapBar from '~/components/MapBar';

export default {
    name: 'MapBar',




 components: {
       
      MapBar
   
      
       
    },


   data(){
      
      return{

    select:"",
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],

areas:[{
  name:"cairo",
  name2:"maadi"
},
  
  {
  name:"Alex",
  name2:"Glembay"
},]
  




      }
    },




};
</script>

<style scoped>

.v-select--outlined >>> fieldset {
  border-color:transparent;
}


.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}






</style>