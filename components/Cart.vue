<template>
     
<div>


     <v-card-title class="theme2">
<div class="te">
 
    Your Order
</div>
     </v-card-title>


<v-container fluid>
  <v-row no-gutters >  
    <v-col cols=12  >
      promo code
    </v-col>

      <v-col cols=12  >
          <v-text-field
              type="text"
              outlined
                             

           color="theme1"
            v-model="promocode"
             background-color="white"
           
          ></v-text-field>
        
      </v-col>


  </v-row>

<v-row justify="center">


<v-col cols=6>
    <v-btn
        rounded
        color="theme1"
       block
      >
       
        Apply
      </v-btn>

</v-col>   

</v-row>




<v-row > 

  <v-col cols="12">
    Restuarant name
  </v-col>

   <v-col cols="12">
   
<v-row no-gutters>

  <v-col cols=4>
meal name
  </v-col>

 <v-col cols="2">
<v-btn icon>
  <v-icon>
mdi-minus-circle-outline
  </v-icon>

</v-btn>


  </v-col >
 <v-col cols=1 >
4
  </v-col>

 <v-col cols=2>
<v-btn icon>
  <v-icon>
mdi-plus-circle-outline
  </v-icon>

</v-btn>


  </v-col>


 <v-col cols=2>
3.5$
  </v-col>

 <v-col cols=1>
<v-btn icon x-small>
  <v-icon>
mdi-delete
  </v-icon>

</v-btn>
  </v-col>


</v-row>


  </v-col>


</v-row>





<v-row justify="center" >
<v-col cols="11">
<v-sheet
            rounded=lg
           color="theme4"
          >

          <v-row >
<v-col class="ml-1">
  Summary
</v-col>
          </v-row>
          
          <v-row justify="center">

<v-col cols="7">
<v-row no-gutters>
  <v-col cols="12">
sub total
  </v-col>
    <v-col cols="12">
Delievery fee
  </v-col>

   <v-col cols="12" class="mt-3 to">
    
Total

  </v-col>
</v-row>



</v-col>


<v-col cols="3">

<v-row no-gutters>
  <v-col cols="12">
14
  </v-col>
    <v-col cols="12">
20
  </v-col>

    <v-col cols="12" class="mt-3 to " >
20
  </v-col>
</v-row>
</v-col>


          </v-row>
          
          
          
          </v-sheet>

</v-col>

</v-row>












</v-container>

<v-row >


<v-col cols=12>
    <v-btn
     
        color="theme1"
       block
       @click="ordershow"
      >
       
        Checkout
      </v-btn>

</v-col>   

</v-row>


<order>
</order>


</div>












        
</template>

<script>
import Order from '~/components/Order';

export default {
    name: 'cart',

    components: {
       
       
        
    Order 
       
    },

methods:{



  ordershow(){


     this.$modal.show('order' )
     document.documentElement.style.overflow = 'hidden'
  }
}









     
};
</script>

<style scoped>

.te{
  
  color: white;

}

.to{
font-weight: bold;
}



</style>