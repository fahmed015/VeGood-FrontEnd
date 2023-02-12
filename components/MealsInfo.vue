<template>
<div>


  <meals @mealinfo="info">
  </meals>
 
<modal name="meal"
 @closed="close"
 
  
      
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >


  <v-card 
   

  v-for="n2 in info2"
        :key="n2.id"
     
    >  

     
<v-container fluid>
      
   
<v-row justify="center">
   <v-col cols=12>
       <v-row>
           <v-col cols=3>

                <v-btn
            class=" mt-2 ml-2"
            icon
            @click="$modal.hide('meal')"
          >
          
           <v-icon color="black" large >
        mdi-close
      </v-icon>
          </v-btn>
           </v-col>

 <v-col cols=7 class="hidden-xs-only">
     <div style="font-size: 25px; text-align: center; " class="black--text " >  {{n2.product_name}}</div>

           </v-col>
       </v-row>

   </v-col>

<v-col cols=12 md=10 >



     
<v-card
  flat
   
   color="white"
  > 

<v-carousel

    :height="$vuetify.breakpoint.xs ? '140 ' : '530'"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-moon-full"
    hide-delimiters
   
  >





 <template v-slot:prev="{ on, attrs }">
      <v-icon
        x-large
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-left-bold-circle</v-icon>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-icon
        x-large
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-right-bold-circle</v-icon>
    </template>



    <v-carousel-item
     v-for="e in n2.photos"
      :key="e.photos" 
    >
     <v-img
  :aspect-ratio="20/9"
     :src="`${e.photo.photo}`"
  
  
  

  >
        
      </v-img>
    </v-carousel-item>
  </v-carousel>


</v-card>   


</v-col>


<v-col cols=12 md=10>


<v-row no-gutters>

<v-col cols=11>

<v-row no-gutters>

    <v-col cols=12>

                 <div class="grey2--text"> Labels </div>

    </v-col>



      <v-col cols=12>



 <v-chip-group
 

  
      
      >
       <v-chip   v-for="e in n2.labels"
        :key="e.label.id"  color="theme4"  class="black--text" label> {{e.label.label}} </v-chip>

 

        
      </v-chip-group>



    </v-col>

</v-row>


</v-col>

<v-col cols=1 class="hidden-xs-only">

    

<v-chip
     
      color="theme4"
      
      label
      class="black--text"
     
    >      
 
      <v-icon  left color="theme2">
        mdi-star
      </v-icon>
       <div style="font-size:15px;" > {{n2.rating}} </div>
 
    </v-chip> 

</v-col>
</v-row>
<div class="hidden-sm-and-up">
<v-divider></v-divider>
</div>
</v-col>


<v-col cols=12 class="hidden-sm-and-up">
<v-row>
<v-col cols=9 >
     <div style="font-size: 20px;  font-weight:bold; " class="black--text " >  {{n2.product_name}}</div>

           </v-col>


<v-col cols=3 >

    

<v-chip
     
      color="theme4"
      small
      label
      class="black--text"
     
    >      
 
      <v-icon  left color="theme2">
        mdi-star
      </v-icon>
       <div style="font-size:15px;" > {{n2.rating}} </div>
 
    </v-chip> 

</v-col>
<v-col cols=12>




   
<v-row no-gutters>
    <v-col cols="12">
<div class="grey2--text price"> Price </div>

    </v-col>


<v-col cols=12>

<v-row no-gutters>
<v-col cols=4 >

<v-row  no-gutters>

    <v-col cols=2>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=5 >

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=3>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>


<v-col cols=4 >

<v-row  no-gutters>

    <v-col cols=2>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=5 >

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=3>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>

<v-col cols=4 >

<v-row  no-gutters>

    <v-col cols=2>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=5 >

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=3>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>





</v-row>
</v-col>




    </v-row>



</v-col>








       </v-row>
<div class="hidden-sm-and-up">
<v-divider></v-divider>
</div>
</v-col>







<v-col cols=12 md=10>


<v-row >

<v-col cols=12 md=8 >



    <v-col cols=12>
<v-row no-gutters>
<v-col cols=12>
 <div class="grey2--text"> Ingredients </div>

    </v-col>



      <v-col cols=12>

<div class="black--text ml-4 "> Egg whites, Dates, Almonds, Cashew, Ginger </div>
      </v-col>

</v-row>
    </v-col>







<div class="hidden-sm-and-up">
<v-divider></v-divider>
</div>

<v-col cols=12>
<v-row no-gutters>
    <v-col cols=12>

 <div class="grey2--text "> Meal Info </div>


    </v-col>



      <v-col cols=12>




<v-row justify="center" justify-md="start" >

<v-col cols=3 md=3>
    <v-row no-gutters>
        <v-col cols="2">
             <v-img
 
        src="/food.png"
  
  
   width="26"
   height="20"
   
  

  >
        
      </v-img>
        </v-col>

         <v-col cols="1" class="ml-1">
                   <div class="theme1--text "> 2 </div>

        </v-col>

        <v-col cols=12>
                   <div class="grey2--text "> Serves </div>

        </v-col>

    </v-row>

</v-col>

<v-col cols=3 md=3>
    <v-row no-gutters>
        <v-col cols=2 >
             <v-img
 
       src="/calories.png"
  
  
   width="20"
   height="23"
  

  >
        
      </v-img>
        </v-col>

         <v-col cols="10" >


             <v-row no-gutters>
                 <v-col cols="5" md=3 class="ml-1">
   <div class="theme1--text "> 205 </div>
                 </v-col>


  <v-col cols="3">
       <div class="grey2--text " style="font-size:12px;"> Cal </div>

                 </v-col>

             </v-row>



        </v-col>

        <v-col cols=12 >
                          <div class="grey2--text "> Calories </div>


        </v-col>

    </v-row>

</v-col>



</v-row>








    </v-col>

</v-row>
</v-col>

</v-col>

<v-col cols=4 class="hidden-xs-only" >

    
<v-row no-gutters>
    <v-col cols="12">
<div class="grey2--text pricet"> Price </div>

    </v-col>
<v-col cols=8>

<v-row no-gutters>
<v-col cols=12 >

<v-row  no-gutters>

    <v-col cols=1>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=7 md="3">

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=4>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>



<v-col cols=12 >

<v-row  no-gutters>

    <v-col cols=1>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=7 md="3">

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=4>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>


<v-col cols=12 >

<v-row  no-gutters>

    <v-col cols=1>
<v-icon small color="grey2" >
        mdi-checkbox-blank-circle-outline
      </v-icon>
        </v-col>

        <v-col cols=7 md="3">

            <div     style="font-weight:bold;" class="theme1--text"  >
20 EGP
            </div>

 

            </v-col>


<v-col cols=4>
 <div   style="text-align:left;"   class="price theme5--text  "  >
     Small
 </div>
</v-col>

    </v-row>


</v-col>





</v-row>
</v-col>






    </v-row>



</v-col>
</v-row>

</v-col>







 <v-col cols=12>
<v-card flat  color="theme4">

<v-row
        align="center"
        justify="center"
      >

<v-btn-toggle
     tile
        borderless
        group
        background-color="white"
        
       
       
      >
        <v-btn  class="mr-16 ml-5"    @click="$vuetify.goTo('#info')">
          <span  >  Discription</span>

        </v-btn >

       

        <v-btn class="mr-16"  >
          <span >Reviews</span>

        
        </v-btn>

       
      </v-btn-toggle>

</v-row>














</v-card>


 </v-col>






<!-- 


   <v-col cols=12>
        <v-tabs
          v-model="tabs3"
          centered
          
            fixed-tabs
          
          slider-color="theme2"
          color="theme2"
            background-color="theme4"
        >
          <v-tab
           
          >
            Discription
          </v-tab>



 <v-tab
           
          >
           Reviews
          </v-tab>


        </v-tabs>
   </v-col> -->


<v-col cols=10 id=info>
   

     <v-card flat>   


         <v-container fluid>
             <v-row>

                 <v-col cols=12 md=4>

                     <v-row>
                         <v-col cols=12>
                              <div class="grey2--text "> Nutrional Info </div>    

                         </v-col>

                          <v-col cols=12>
                              
<v-card  >  


<v-simple-table  class="theme4 black--text "  >
    
      <thead>
       
      </thead>
      <tbody>



<tr
         
        >
          <td style="font-weight:bold"> Colaries</td>
          <td style="font-weight:bold">205</td>
        </tr>

        <tr
         
        >
          <td> Total carbs </td>
          <td >12g</td>
        </tr>


 <tr
         
        >
          <td>Protein </td>
          <td>12g</td>
        </tr>

         <tr
         
        >
          <td>Total sugar </td>
          <td>12 g</td>
        </tr>
         <tr
         
        >
          <td>Dietry Fibers </td>
          <td>6g</td>
        </tr>
         <tr
         
        >
          <td class="grey2--text"> Sodium </td>
          <td class="grey2--text">112mg</td>
        </tr>

 <tr
         
        >
          <td class="grey2--text"> Clorestrol </td>
          <td class="grey2--text">80mg</td>
        </tr>


        <tr class="theme3--text" >

<div >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </tr>
        
      </tbody>
    
  </v-simple-table>

 </v-card>  

                         </v-col>


                     </v-row>

                 </v-col>
 <v-spacer></v-spacer>
                 <v-col cols=12 md=6>
                   
                         <v-col cols=12>
                              <div class="grey2--text "> Macronutrition </div>    

                         </v-col>

                 <v-col cols=8>
                          <client-only>
        <pie-chart :data="chartData"></pie-chart>
    </client-only>

                 </v-col>


                 </v-col>

             </v-row>

         </v-container>


     </v-card>



















        

        
     

</v-col>

</v-row>
</v-container>
      
   


 





 














































 








      
 </v-card>
     

  </modal>







</div>
</template>



<script>
import Meals from '~/components/Meals'

export default {
  fetchOnServer: false,

    name: 'MealsInfo',

components: {
     
       Meals
    },
    // props: ['info'],
 data(){
        return{
info2:[],
idmeal:null,
  chartData: {
     labels: ["Foo", "Bar", "Baz"],
         datasets: [
          {
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"],
            data: [10, 20, 40]
          }
         ]
        },
        
         

        }
    },
// watch: { 
//       	info:{
//       handler(newValue, oldValue) { 
//         console.log("CHECKKK" )

//         console.log(newValue )
//         console.log(oldValue )
//    this.$fetch()
      
      
//       },
     
//     },
// },



   


async fetch()  {
console.log("enter")


  console.log("enter22")
  try {
        let response = await this.$axios.$get(`/api4/products/id/`+this.idmeal)
      
 console.log(response)
// this.chips=response[0].restricted_ingredients


 this.info2=response;
 
 
   this.$modal.show('meal' )
     document.documentElement.style.overflow = 'hidden'


 

        

      } catch (err) {
        console.log(err)
      }

  
 
  },
  
methods:{

open(){
  this.$modal.show('meal' )
     document.documentElement.style.overflow = 'hidden'

},

close(){

 document.documentElement.style.overflow = 'auto'




},
 info(id){
         
  this.idmeal=id
  this.$fetch()
  
    },

 

}
};



</script>






<style>


</style>
