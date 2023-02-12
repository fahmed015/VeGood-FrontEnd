<template>
   

   <div >

<v-container fluid>
<v-row>

  <v-col cols=12>


      
<v-card flat >

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
        <v-btn   active-class="aa"   @click="$vuetify.goTo('#men')">
          <span  >  Menu</span>

        </v-btn >

        <v-btn  >
          <span > Restuarant Info</span>

         
        </v-btn>

        <v-btn  @click="$vuetify.goTo('#review')" >
          <span >Reviews</span>

        
        </v-btn>

       
      </v-btn-toggle>

</v-row>














</v-card>
  </v-col> 

<v-col cols=12 id="men">


  <v-row justify="center">
    <v-col cols="12" md="10">



        
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
            Main Course
          </v-tab>

<v-tab
           
          >
           Main Course
          </v-tab>

<v-tab
            
     >
        Main Course
          </v-tab>

          
<v-tab
            
     >
        Main Course
          </v-tab>


<v-tab
            
     >
        Main Course
          </v-tab>



       
  
<v-tab
            
     >
        Main Course
          </v-tab>

<v-tab
            
     >
        Main Course
          </v-tab>



        </v-tabs>




    </v-col>
  </v-row>









  </v-col>



<v-col cols=12>
<v-row>



 <v-col cols="2" class="hidden-sm-and-down " >



      <v-card  style="position:sticky; top:0;" >
    <v-btn @click.native="filtershow = !filtershow"  :color="$vuetify.breakpoint.xs ? 'white ' : 'theme3 '" block  class="text-capitalize" >  Filters </v-btn>

 
<v-card
    
   class="mt-1"
     v-show="filtershow"
  >
   
    
 <filter-bar :category="category">
 </filter-bar>


  </v-card> 


  
      </v-card>


 </v-col>

<v-col cols="12" md=10>



<v-tabs-items v-model="tabs2">
      <v-tab-item>


<v-row >
  <v-col cols=12 md=12> 
<meals-info>
  </meals-info>
  </v-col>
</v-row>

      </v-tab-item>





    </v-tabs-items>


</v-col>

</v-row>
</v-col>

<v-col cols=12 id=review>
<reviews>
</reviews>
</v-col>


</v-row>


</v-container>














</div>










</template>

<script>

import Meals from '~/components/Meals';
import MealsInfo from '~/components/MealsInfo';
import FilterBar from '~/components/FilterBar';
import Reviews from '~/components/Reviews';




export default {
    name: 'RestaurantBar',

components: {
  Meals,
FilterBar,
  MealsInfo,
  Reviews


  },

    data(){
      return{
        category:null,
  info:[], 
   filtershow:false,
   overlay: false,
      zIndex: 3,
  info2:[],    
menushow:false,
tabs: null,
tabs2: null,
tabs3:null,
dialogshow: false,
showcard1:false,

          
         
          
          
      }

      
    },






async fetch()  {
//console.log(this)


this.category=this.$store.state.category





},


     
async mounted(){

// var check=this.$auth.loggedIn
// console.log(check)


// console.log("change?")
// this.category=this.$store.getters.getcat(check)
// console.log(this.category)

// if(check==true){
//   console.log(this.$store.state.usercat)
// this.type=this.$store.state.usercat
// console.log(this.type)



// }  
          
        },

// created()
//         {
//           this.datafetch();
//         },

// methods:{
 




// async  datafetch () {


//    const ip = await this.$axios.$get(`/api/products/query/?supplier=${this.$route.query.name}`)

//  this.=ip.products;
 
   
  





//   },




// async  getinfo (id) {

//    const ip = await this.$axios.$get(`/api4/branches/id/${id}/`)

//  this.info2=ip;
//  console.log(this.info2)
 
//     this.overlay = !this.overlay

//     //this.$modal.show('modal' )
  





//   },


// }







};
</script>

<style scoped>



 
.ac{
  border-bottom-style: solid;
  border-bottom-color: coral;
}

    





.mealtitlem{
  position: absolute; 
  top:105px;
  left:10px;
  font-weight: bold;
}

.main{
position: absolute; 
  top:1000px;
  left:320px;
}


.mainm{
position: absolute; 
  top:500px;
  left:0px;
}
   .demo-modal-class {
    height: auto  !important;
  }



.tst{
  position: relative; 
 left:60px;
}

.tst1{
  position: relative; 
 left:5px;
}

.main2{

position: absolute; 
  top:1320px;
  left:50px;

}

.divider{
position: absolute; 
  top:380px;
  left:200px;
 

}



.m{
position: absolute; 
  top:620px;
  left:1000px;
 

}

.ing{
position: absolute; 
  top:350px;
  left:10px;
 width:120px;
 font-size: 15px;


}

.ingm{
position: absolute; 
  top:160px;
  left:10px;
 width:120px;
 font-size: 15px;


}

.aa{


border-bottom: 30px solid #FFA100;

background-color:transparent;
}

.nut{

  position: absolute; 
  top:40px;
  left:20px;
}


.price{
position: absolute; 
  top:360px;
  left:185px;
 width:120px;
 font-size: 14px;


}

.pricem{
position: absolute; 
  top:160px;
  left:220px;
 width:120px;
 font-size: 14px;


}

.price2{
position: absolute; 
  top:360px;
  left:245px;
 width:120px;
 font-size: 14px;
font-weight: bold;

}

.price2m{
position: absolute; 
  top:160px;
  left:300px;
 width:120px;
 font-size: 14px;
font-weight: bold;

}

.tablet{
  position: absolute; 
top:100px;
 left:90px;
}

.tablecard{
position: absolute; 
top:600px;
 left:100px;
 

}
.tableextra{
  font-size: 13px;
width:180px;
}
.cardmain2{
  position: absolute; 
  top:3000;
}

.tool{

position: absolute; 
  top:900px;



}

.ttt{
  position: absolute; 
  top:30px;
 
}



.ing2{
position: absolute; 
  top:350px;
  left:130px;
 width:120px;
 font-size: 15px;


}
.ing2m{
position: absolute; 
  top:150px;
  left:230px;
 width:120px;
 font-size: 15px;


}

.des{
position: absolute; 
  top:850px;

}



.close{
  position: absolute; 

  left:15px;

}
.images2{
position: absolute; 
  top:150px;
  left:20px;

}

.title{
  position: absolute; 

  top:5px;
  left: 700px;
  font-size: 16px;
 

}


.b1{
  position: absolute; 

  left:150px;
height: 40px;
}

.b1m{
  position: absolute; 

  left:20px;
height: 40px;
}

.b1mm{
   position: absolute; 

  left:10px;
 font-size: 10px;
}
.b2mm{
   position: absolute; 

  left:80px;
 font-size: 20px;
}
.b3mm{
   position: absolute; 

  left:180px;
 font-size: 10px;
}

.b2mm{
   position: absolute; 

  left:10px;
 font-size: 10px;
}



.b2{
  position: absolute; 
 
  left:400px;
  height: 40px;
}
.b2m{
  position: absolute; 
 
  left:120px;
  height: 40px;
}

.b3{
  position: absolute; 
height: 40px;
  left:750px;
}

.b3m{
  position: absolute; 
height: 40px;
  left:300px;
}


.meals{
position: absolute; 
  top:1450px;
  left:350px;
  

}
.maincard{
position:inherit;


 
  
}
.button{
    border-bottom: 4px solid ;
}


.ctitle{
font-size: 20px;
text-align: center;
position:absolute;

top:0px;
left:540px
}

.cchips{
  width:600px;
  position:absolute;
left:100px;
top:650px;
}
.cchips0{
  font-size: 15px;
  position:absolute;
left:90px;
top:626px;

}

.ing0{
  font-size: 15px;
  position:absolute;
left:90px;
top:720px;
}

.ing1{
  width: 600px;
  font-size: 15px;
  position:absolute;
left:110px;
top:750px;
}


.infot{
   position:absolute;
left:90px;
top:800px;
}

.food{

  width:40px;
  height:40px;
   position:absolute;
left:90px;
top:840px;
}

.foodimg{
  position:absolute;
left:0px;
top:0px;
}
.food1{
  position:absolute;
right:0px;
top:0px;
}
.food2{
  position:absolute;

bottom:0px;
}



.cal{

  width:80px;
  height:40px;
   position:absolute;
left:200px;
top:840px;
}

.calimg{
  position:absolute;
left:0px;
top:0px;
}
.cal0{
  position:absolute;
left:23px;
}
.cal1{
  position:absolute;
right:0px;
top:0px;
}
.cal2{
  position:absolute;

bottom:0px;
}

.pricet{
  position: absolute; 
  top:800px;
  left:800px;
}

.price3{

position: absolute; 
  top:830px;
  left:820px;
 width:500px;

}












.imgg{
  position:absolute;
left:200px;
}
 .inside{

position: absolute; 
  top:260px;
  left:10px;
  font-weight: bold;
  font-size: 16px;


 }

.chip{
position: absolute; 
  top:450px;
  left:10px;
width:300px;

}


.chipm{
position: absolute; 
  top:250px;
  left:10px;
width:300px;

}
 .inside2{

position: absolute; 
  top:285px;
  left:10px;
width:300px;
font-size: 12px;
 }

.inside2m{

position: absolute; 
  top:135px;
  left:10px;
width:300px;
font-size: 12px;
 }


</style>



        
     <!-- <div class="grey2--text tablet"> Nutrional Info </div>    

<v-card   width=260  class="tablecard">  


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

<div class="tableextra">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </tr>
        
      </tbody>
    
  </v-simple-table>

 </v-card>  -->

