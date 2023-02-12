<template>
    

<div >

<v-container fluid class=" hidden-sm-and-up" >
 <v-row>
  <v-col md="12">
   
    <v-row no-gutters>

<v-col cols="4"  >


 
   
  <v-card  :color="cc ? 'theme1' : 'white'"  @click="filtershow = !filtershow, cc=!cc"  v-ripple  height="60" tile  >

 

<v-container fluid >
 <v-row  justify="center"  no-gutters>
   
    <v-col cols="4">
      <v-icon   :color="cc ? 'white' : 'theme1'" >
        mdi-filter
      </v-icon>
  </v-col>
  <v-col cols="8" class="mt-1">
    <div :class="cc ? 'white--text ' : 'black--text '"  > Filter </div>
  </v-col>
  
 </v-row>
</v-container>

  
      </v-card>
   







</v-col>

<v-col cols="8">

 <v-card height="60" tile>
   



    <v-text-field
  
        hide-details
         placeholder="Search"
       
        
    outlined
  
   color="theme1"
      >
      
       <v-icon slot="prepend-inner" color="theme1">
          mdi-magnify
       </v-icon>
      </v-text-field>

      </v-card>



</v-col>
  




 <v-col cols="12" >
<v-card
    
   
     v-show="filtershow"
  >
   <filter-bar :category="category" >
</filter-bar>
  
     

  </v-card> 
 </v-col>

 
<v-col cols="12">
  
  <restaurants  ></restaurants>

</v-col>

</v-row>
</v-col>
</v-row>
</v-container>
 

 <v-container fluid class="mt-5 hidden-xs-only" >
  <v-row >
   

 <v-col cols="3" class="hidden-sm-and-down " >

   <v-card  style="position:sticky; top:0;" >

      <v-btn @click.native="filtershow = !filtershow"  :color="$vuetify.breakpoint.xs ? 'white ' : 'theme3 '" block  class="text-capitalize" >  Filters </v-btn>

 
<v-card
    
   class="mt-1"
     v-show="filtershow"
  >
<filter-bar :category="category"  >
</filter-bar>

   </v-card>

   </v-card>
 </v-col>

<v-col cols="6" sm="12" md="9">
<v-row no-gutters justify="start" justify-sm="center" justify-md="start">
<v-col cols="11" sm="12" md="11">
<div class="titlecategory">
 {{ $t("homepage.category.title1") }}

 
      


</div> 
</v-col>

<v-col cols="11" sm="12" md="11">
   <category :category="category" >
  </category> 
 
</v-col>

</v-row>





<v-col cols="12" md="10">
  <v-row justify="center">
<v-col cols="10" md="8">

 
 <v-row  >
  <v-col cols="10">
   
    <v-card  rounded>
   

<v-row no-gutters>

<v-col cols="4" class="hidden-md-and-up ">



 

  <v-card  :color="cc2 ? 'theme1' : 'white'"  @click="$modal.show('filter'),cc2=!cc2"  v-ripple  height="60" flat  >

 

<v-container fluid >
 <v-row  justify="center"  no-gutters class="mt-1">
   
    <v-col cols="4">
      <v-icon   :color="cc2 ? 'white' : 'theme1'">
        mdi-filter
      </v-icon>
  </v-col>
  <v-col cols="8" >
    <div :class="cc2 ? 'white--text' : 'black--text'" > Filter </div>
  </v-col>
  
 </v-row>
</v-container>

  
      </v-card>
   


  







</v-col>

<v-col cols="5" md="8">
    <v-text-field
  
        hide-details
         placeholder="Search"
       
        
    outlined
  
   color="theme1"
      >
      
       <v-icon slot="prepend-inner" color="theme1">
          mdi-magnify
       </v-icon>
      </v-text-field>

</v-col>

<v-col cols="3" md="4">
<v-card height="60" flat class="theme4">
  <map-bar>
  </map-bar>
</v-card>
</v-col> 

</v-row>
      </v-card>

</v-col>



<v-col cols="2" md="2">

  <v-btn color="theme1" width="100" height="56" block   class=" white--text button1 " >
     {{ $t("homepage.search") }}
    </v-btn>
  
</v-col>


</v-row>




</v-col>


  </v-row>





</v-col>






<v-col cols="12" md="10">
 
  <restaurants  ></restaurants>
 
</v-col>












 </v-col>

  </v-row>
 </v-container>
















<modal name="filter"
 @closed="close"
      @before-open="open"
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >

         
      <v-card
    
   class="theme4"
    
  >
   
<filter-bar :category="category"  >
</filter-bar>

    
  <v-btn
        
            class="  theme1"
            
            @click=" $modal.hide('filter')"
            rounded

            
          >
          
          Done
          </v-btn>
 

  </v-card> 


</modal>





















</div>

  

</template>


<script>
import Restaurants from "~/components/Restaurants";
import FilterBar from '~/components/FilterBar';
import MapBar from '~/components/MapBar'
import Category from '~/components/Category'



export default {
    name: 'SecondSection',


  components: {
       
        Restaurants,
        
    FilterBar,
    MapBar,
    Category,
        
   
      
       
    },










data(){

return{
    
    cc:false,
    cc2:false,
    dialog: false,
    category:[],
    sorting:[],
      model: null,
      type:null,
      chips: [],
      val:null,
      test:"",
       items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        filtershow:false,
       
      
      
}

},







async fetch()  {
//console.log(this)


this.category=this.$store.state.category





},




     
async mounted(){

//console.log("mount sec sec")

//this.category=this.$store.getters.getcat(check)
//this.category=this.$store.state.category

//console.log(this.category)

// if(check==true){
//   console.log(this.$store.state.usercat)
// this.type=this.$store.state.usercat
// console.log(this.type)



// }  
          
        },


 
methods:{







 close(){

   this.cc2=!this.cc2

 document.documentElement.style.overflow = 'auto'




},

open(){
  document.documentElement.style.overflow = 'hidden'
},



},

      
   



};
</script>

<style scoped>



.column_wrapper {
  column-count: 2;
}

.middle{
   position: absolute; 
 top:1009px;
 
 
}
.middle2{
   position: absolute; 
 top:980px;
left:285px;


 
}

.choose{
   position: absolute; 
 top:1080px;
}


.image{
    
   position: absolute; 
  top:18px;
  left:35px;
 width:30px;
  height:30px;
 
}
.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}



.v-select--outlined >>> fieldset {
  border-color:transparent;
}
.image2{
    
   position: absolute; 
  top:20px;
  left:45px;
 width:35px;
  height:35px;
 
}
.optiontitle{
  
  
   text-align:center;
   font-size: 12px;
    
 
 
}


.optiontitle2{
  
  
   text-align:center;
   font-size: 16px;
  
    
 
 
}


.inside{
  
text-align:center;
font-size: 14px;


}



.titlecategory{
    
text-align: center;
 font-size: 22px;
 text-transform: uppercase;
 
}

/* 
.v-dialog--fullscreen {
 border-radius: 0;
 margin: 0;
 height: 100%;
 position: fixed;
 overflow-y: auto;
 top: 300px; 
 left: 0;
} */

.filter{

  
width:278px;



}


.filterm{

   position: absolute; 
 
  top:420px;
  
  left:10px;
width:380px;



}




.titlecategory2{
    
   position: absolute; 
  top:1200px;
  left:633px;
 font-size: 22px;
 text-transform: uppercase;
 
}


</style>