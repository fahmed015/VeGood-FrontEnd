<template>
      <div>






<modal name="order"
 @closed="close"
  
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '70%'"
        :scrollable="true"
        
       
         >


 <v-card >

<v-container>

    

<v-row justify="center">
    <v-col cols="11" >



        
        <v-tabs
          v-model="tabs"
         fixed-tabs
         
          
         slider-color="theme1"
          color="theme1"
          background-color="theme4"
         
          show-arrows
        >
       


<v-tab
            
     >
        Delievery
          </v-tab>



       
  
<v-tab
            
     >
      Pick up
          </v-tab>



        </v-tabs>




    </v-col>





<v-col cols="11" >



<v-tabs-items v-model="tabs">
      <v-tab-item>


<v-row >
  <v-col cols=12 md=12> 
mmvvv
  </v-col>
</v-row>

      </v-tab-item>





    </v-tabs-items>


</v-col>





<v-col cols="11" >



        
        <v-tabs
          v-model="tabs2"
         fixed-tabs
         
          
         slider-color="theme1"
          color="theme1"
          background-color="theme4"
         
          show-arrows
        >
       


<v-tab
            
     >
        Work
          </v-tab>



       
  
<v-tab
            
     >
      Home
          </v-tab>

    
  
<v-tab
            
     >
      New location
          </v-tab>


        </v-tabs>




    </v-col>





<v-col cols="11" >



<v-tabs-items v-model="tabs2">
      <v-tab-item>


<v-row >
  <v-col cols=12 md=12> 
mmvvv
  </v-col>
</v-row>

      </v-tab-item>





    </v-tabs-items>


</v-col>















<v-col cols="11" >



        
        <v-tabs
          v-model="tabs3"
         fixed-tabs
         
          
         slider-color="theme1"
          color="theme1"
          background-color="theme4"
         
          show-arrows
        >
       


<v-tab
            
     >
        Credit Card
          </v-tab>



       
  
<v-tab
            
     >
      Cash
          </v-tab>



        </v-tabs>




    </v-col>





<v-col cols="11" >



<v-tabs-items v-model="tabs3">
      <v-tab-item>

<v-container>
<v-row >
  <v-col cols=12 > 
 <v-row no-gutters >  
    <v-col cols=12  >
      Card number
    </v-col>

      <v-col cols=8  >
          <v-text-field
              type="text"
              outlined
                             

           color="theme1"
            v-model="promocode"
             background-color="white"
           
          ></v-text-field>
        
      </v-col>


  </v-row>



<v-row >


<v-col cols=6>
      <v-row>
 <v-col cols=12  >
      Exp
    </v-col>

  

  
        <v-col cols=12  >
              <v-row no-gutters>
                    <v-col cols=4>
          <v-text-field
              type="text"
              outlined
                             

           color="theme1"
            v-model="promocode"
             background-color="white"
           
          ></v-text-field> 
                    </v-col>
<v-col cols=2 align-self="center" >
      <v-icon large>
mdi-slash-forward
      </v-icon>
</v-col>
  <v-col cols=4>
          <v-text-field
              type="text"
              outlined
                             

           color="theme1"
            v-model="promocode"
             background-color="white"
           
          ></v-text-field> 
                    </v-col>



              </v-row>
      </v-col>
      </v-row>
</v-col>

   




<v-col cols="6">
      <v-row>
        <v-col cols=12  >
          
        CVC
      </v-col>

      <v-col cols=6>
          <v-text-field
              type="text"
              outlined
                             

           color="theme1"
            v-model="promocode"
             background-color="white"
           
          ></v-text-field>
        
      </v-col>
      </v-row>

</v-col>


</v-row>




  </v-col>





<v-row>










</v-row>

</v-row>
</v-container>
      </v-tab-item>





    </v-tabs-items>


</v-col>





<v-col cols=11>
    <v-btn
     
        color="theme1"
       block
      
      >
       
       Place Order
      </v-btn>

</v-col> 





  </v-row>

</v-container>






 </v-card>










         

</modal>




















      </div>










</template>

<script>
export default {
    name: 'Order',


data(){
      return{
            tabs: null,
                        tabs2: null,
                                            tabs3: null,

      }
},

methods:{




close(){

 document.documentElement.style.overflow = 'auto'

},


},












};
</script>

<style scoped>







</style>