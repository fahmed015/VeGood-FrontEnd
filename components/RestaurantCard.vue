<template>
   

   <div >
 




<v-container  fluid>

<v-row  justify="center">
<v-col cols=12 md=10 class="hidden-sm-and-down">
<v-row>

<v-col cols="3">
    <v-select
       
          label="select"
          outlined
        ></v-select>
  </v-col>

  <v-col cols=8>
    <v-row>
  <v-col cols=9>
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

  <v-col cols=3>
 <v-btn color="theme1"  height="56" block   class=" white--text button1 " >
     {{ $t("homepage.search") }}
    </v-btn>
    </v-col>
    </v-row>
  </v-col>

<v-col cols=1>


  <v-card     @click="cartshow = !cartshow"  v-ripple     >

 

<v-container fluid >
 <v-row    no-gutters>
   
    <v-col cols="2">
      <v-icon   color="theme1" >
        mdi-cart
      </v-icon>
  </v-col>
 
  
 </v-row>
</v-container>

  
      </v-card>
   


</v-col>


</v-row>
</v-col>




 <v-col md="12" class=" hidden-md-and-up">
   
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
       class="c"
        
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
   
 <filter-bar :category="category">
 </filter-bar>
      

  </v-card> 
 </v-col>

 


</v-row>
</v-col>

</v-row>



<v-row justify="center" >












<v-col cols="12" :md="cartshow ? '8' :'10'">


<v-card
   flat
   
    
    v-for="n in info"
        :key="n.id"
  
  >

<v-container fluid>
<v-row>
<v-col cols=12>


<v-breadcrumbs :items="items2" nuxt>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
</v-col>

<v-col cols="12">





<v-card
  flat
    
     
   
  >
<v-carousel

    
    
   
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-moon-full"
    hide-delimiters
     :height="$vuetify.breakpoint.xs ? '140 ' : '500'"
   
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
     v-for="e in n.photos"
      :key="e.photos" 


    >
     <v-img
    
       :src="`${e.photo.photo}`"
  
  
   height="100%"
   
  

  >
        
      </v-img>
    </v-carousel-item>
  </v-carousel>




</v-card> 

</v-col>




<v-col cols="12">



<v-row no-gutters>
<v-col cols="2">
  
   <v-img
    
    

  
  class="imgmain "
    :src="`${n.logo}`" 

  >

      </v-img>
</v-col>

<v-col cols="8">

<v-row no-gutters>

<v-col cols=12>
     <div >{{n.supplier_name}}</div>
</v-col>
<v-col cols=12>

<div
      class="theme2--text text-capitalize "
    >      
   {{n.address_line_1}}  {{n.address_line_2}} 
    </div>

</v-col>

<v-col col=12>
 <v-chip-group
        :class="$vuetify.breakpoint.xs ? ' chipm ' : ' chip '"

      v-for="e in n.labels"
        :key="e.label.id"
      >
        <v-chip   color="theme3"  label >{{e.label.label}}</v-chip>

        
      </v-chip-group>
</v-col>


     </v-row>

</v-col>

<v-col cols="2">


 <v-chip
      color="theme4"
  
      label
     
    >      
 
      <v-icon  left color="theme2" >
        mdi-star
      </v-icon>
       <div :style="$vuetify.breakpoint.xs ? 'font-size:12px;':'font-size:15px;'" >   {{n.rating}} </div> 
 
    </v-chip>
</v-col>

</v-row>







</v-col>






</v-row>

</v-container>

</v-card>


</v-col>


   





<v-col cols=3>

  <v-card
    
   v-show="cartshow"
  >
   
 <cart>
 </cart>
      

  </v-card> 

</v-col>


</v-row>











</v-container>





















</div>




















</template>

<script>
import FilterBar from '~/components/FilterBar';
import Cart from '~/components/Cart';



export default {
    name: 'RestaurantCard',
fetchOnServer: false,


components: {
       
       
        
        
   
FilterBar,
Cart
      
       
    },
    data(){
      return{
     cc:false,  
info:[],
   category:[],
items2: [
        {
          text: 'Home',
           nuxt:true,
          disabled: false,
          to: '/Home',
         
        },
        {
          text: 'Restaurant',
          disabled: true,
          to: 'RestaurantPage',
           nuxt:true
        },
       
      ],

       items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        filtershow:false,
        chips: [],
        cartshow:false,
        type:null,

      }
    },



created()
        {
         // this.datafetch();
        },


async fetch()  {
//console.log(this)

  console.log("renderrrrrrr cardd")



try {
        let response = await  this.$axios.$get(`/api4/branches/id/${this.$route.params.id}`)
      
 console.log(response)
// this.chips=response[0].restricted_ingredients


 this.info=response;
 


 

        

      } catch (err) {
        console.log(err)
      }







},




// async mounted(){

// var check=false
// var check=this.$auth.loggedIn
// console.log(check)

// this.category=this.$store.getters.getcat(check)
// console.log(this.category)

// if(check==true){
//   console.log(this.$store.state.usercat)
// this.type=this.$store.state.usercat
// console.log(this.type)
// }  
          
//         },



methods:{
 


async  datafetch () {

   const ip = await this.$axios.$get(`/api4/branches/id/${this.$route.params.id}`)
 
 this.info=ip;
 
   
  





  },

clear(){
this.$store.commit('setclear');
this.chips=[]
this.type=null
},

notactive(id,name){
  this.type=id
this.category.forEach(function(item) {
  item.active=false
})

 const newCard = this.category[id-1];
newCard.active=true

this.$store.commit('setcat', name);
this.$store.commit('setcategory', this.category);
},

show(type){

console.log("enter")

console.log(this.$store.getters.isLoggedIn)
var check=this.$auth.LoggedIn

//const check =this.$store.getters.isLoggedIn

// if(localStorage.getItem('token')) {
//         check=true
         
// }
var a
if(check==true){
a=this.$store.state.userfood

if(a==null){
  a =this.$store.getters.getfood(type)
}

}
else{
 a =this.$store.getters.getfood(type)
}


this.chips=a

console.log(a);


},
 remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },




selectcategory(v){


  this.$store.commit('setcat', v);
},




}










};
</script>

<style scoped>



.c.v-text-field--outlined >>> fieldset {
  border-color:transparent;
}




.ww{
  position: relative;  
}

.s{

  position: absolute; 
 top:150px;
  left:130px;
  
  width:700px;
  height:50px;

}
.titlerestuarant{
 position: absolute; 
  top:1135px;
  left:610px;
 height:900;
 font-size: 18px;
  font-weight: bold;
 text-transform: uppercase;


}

.restaurants{

  position: absolute; 
  top:200px;
  left:280px;
 
 
 
}


.restaurantsm{

  position: absolute; 
  top:150px;
  left:20px;
 
 
 
}

.filter{

   position: absolute; 
 
  top:1100px;
  
  left:10px;
width:278px;



}

.filtert{

   position: absolute; 
 
  top:0px;
  
  left:10px;
width:278px;



}

.restaurant{

  position: absolute; 
  top:18px;
  left:38px;
 
}
.title{

  position: absolute; 
  top:530px;
  left:140px;
 
  text-align: center;
 
}


.titlen{

  position: absolute; 
  top:155px;
  left:45px;
 
  text-align: center;
 
}

.rating{

  position: absolute; 
  top:540px;
  left:870px;
 /*  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color:rgba(121, 154, 148,0.15); */
 
}


.ratingn{

  position: absolute; 
  top:150px;
  left:300px;
 /*  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color:rgba(121, 154, 148,0.15); */
 
}

.chip{

 position: absolute; 
  top:650px;
  left:150px;
  width:314px;
  height:100px;

  

}
.chipm{

 position: absolute; 
  top:230px;
  left:20px;
  width:314px;
  height:100px;

  

}


.b1{

position: absolute; 
top:0px;
  left:545px;

}

.a{

  position: absolute; 

  left:3px;
  width:550px;
  
  
}
.s{
position: absolute; 

  left:700px;
 width:800px;
}



.images{

position: absolute; 
  top:0px;
  left:0px;

}



.imgmain{

width:70px;
  height:68px;
}

.imgmainm{
position: absolute; 
  top:150px;
  left:10px;
width:30px;
  height:28px;
}

.distance{
position: absolute; 
  top:20px;
  left:280px;

}



.location{
position: absolute; 
  top:570px;
  left:140px;
 
 
}

.locationm{
position: absolute; 
  top:175px;
  left:40px;
 
 
}

.subt{
   position: absolute; 
  top:95px;
  left:400px;
  width:320px;
 
}
.save{
   position: absolute; 
  top:-10px;
  left:900px;
 
}
.savem{
   position: absolute; 
  top:-10px;
  left:330px;
 
}
.money{
position: absolute; 
  top:470px;
  left:450px;
  width:80px;



}

.moneym{
position: absolute; 
  top:120px;
  left:160px;
  width:50px;



}
 
</style>