<template>
<div>
 
 
   
 <v-sheet
    
  
    height=150
    class=" hidden-xs-only"
    color="white"
  >

    <v-slide-group
     center-active
     
      show-arrows="always"
      
    
      
     
    >

 <template v-slot:prev="{ on, attrs }">
      <v-icon
        
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-left-bold-circle</v-icon>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-icon
        
        v-bind="attrs"
        v-on="on"
      >mdi-arrow-right-bold-circle</v-icon>
    </template>






      <v-slide-item
     
        v-for="n in category"
        :key="n.id"
       
        
      
      
      >
     
       <v-card
           v-ripple
          
        :color="n.active  ? 'theme1 ' : 'white'"
        :width="n.active  ?122 :100" 
        :height="n.active  ?99 :83" 
        
        :class="n.active ?'text-capitalize ml-2 mr-5 mt-1 mb-5  rounded-xl '  :'text-capitalize ml-2 mr-5 mt-4 mb-7 rounded-xl'" 
         
        
      
        @click.native="notactive(n.id ,n.name)"
        
        >
        
   <v-row>
        
<v-col cols=12>
<v-img
    
    
    :src="`/category${n.id}.png`"
  
    :class="n.active ?'image2' :'image'" 
   

  >

</v-img> 


</v-col>
<v-col cols=12>

<div    :class="n.active ?'optiontitle2  ' :'optiontitle '" >  {{ n.name }} </div>


</v-col>

   </v-row>
        </v-card>
     
      </v-slide-item>
  
    </v-slide-group>

 </v-sheet>




</div>
</template>






<script>
export default {
    name: 'Category',
 props: {
     category: Array,

   },



 data(){
        return{


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
        click:true,

         

        }
    },

  



    methods:{



notactive(id,name){
  console.log("testtttttt")
 
// this.$store.commit('setcat', name);
this.$store.commit('resetcategory', id);
},








 



}


    

  

};



</script>



<style scoped>


.inside{
  
text-align:center;
font-size: 14px;


}

.optiontitle{
  
  
   text-align:center;
   font-size: 12px;
    
 
 
}


.optiontitle2{
  
  
   text-align:center;
   font-size: 16px;
  
    
 
 
}


.image{
     position: relative; 
  top:20px;
  left:35px;
   
 width:30px;
  height:30px;
 
}

.image2{
      
    position: relative; 
  top:20px;
  left:40px;
 width:40px;
  height:40px;
 
}

</style>
