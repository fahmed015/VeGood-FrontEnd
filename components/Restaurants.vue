<template>
   

   <div >
 



<v-container fluid >
    <v-row   no-gutters>

<!-- <v-col
 cols="9">

</v-col> -->


<v-col
 cols="12"
 
v-for="n in suppliers"
        :key="n.id" 
  >
 <!--  <div class="d-flex flex-column mb-6"> -->
  
   <NuxtLink class="link" :to="{path: `/RestaurantPage/${n.id}`, query: { name: `${n.supplier_name}` }  }">   

 <v-card
 


      
   
   elevation="2"
   class="mb-5"

   :height="$vuetify.breakpoint.xs ? '400 ' : '300 '" 

   
   
  >
    
    
<v-container fluid>
  <v-row no-gutters>
    <v-col cols="12" md="6" sm="6">
      
    <v-card
  flat
   
   
  >















<v-carousel

     
    :height="$vuetify.breakpoint.xs ? '140 ' : '280 '"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-moon-full"
    hide-delimiters
   
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



    <v-carousel-item
      v-for="e in n.photos"
      :key="e.photos" 
    >
    <v-img
    
    
    :src="`${e.photo.photo}`"
  
   height="100%"
  

  >
<!--         
 <v-chip
      class="mb-0 "
      color="white"
     
   
      label
     
    > 

      <v-icon  left color="theme2">
        mdi-car
      </v-icon>     
  <div class="black--text">   4 KM </div>
    
 
    </v-chip> -->




<v-btn
      class="mt-5 ml-5  text-center"
      color="white"
      
       label
     
      
    >      
 
  <div class="theme2--text">   $</div>
  <div class="theme3--text">   $</div>
  <div class="theme3--text">   $</div>
    </v-btn>


      </v-img> 
 

 


    </v-carousel-item>
  </v-carousel>

    </v-card>


    </v-col>
    <v-col cols="12" md="6" sm="6" >
     

<v-row no-gutters justify="end">
      <v-col
      cols="2"
      >



<v-btn
     
      color="theme3"
      icon
      x-large
     
    >      
 
      <v-icon  >
        mdi-bookmark
      </v-icon>
  
    </v-btn>



      </v-col
      
      >
</v-row >






<v-row no-gutters class="ml-2" >
      <v-col
      cols="2"
      align-self="end"
      
      >

<!-- <v-avatar> -->
   <v-img
    
    
     :src="`${n.logo}`"
     class="imgmain"
  
  
  

  >
        
      </v-img>
<!-- </v-avatar> -->


      </v-col>


  <v-col
      cols="7"
      >


<v-row no-gutters >
      <v-col
      cols="12"
      >
    {{n.supplier_name}} 
   
      </v-col>



 <v-col
      cols="12"
      >




<div

     class="locationm theme2--text " 


    >      

      <v-icon  color="theme2">
        mdi-map-marker
      </v-icon>
    {{n.city}}
  
    </div>




 </v-col>

</v-row>





</v-col>


<v-col cols="3">



 <v-chip
     
      color="theme4"
     
      label
      
     
    >      
 
      <v-icon  left color="theme2">
        mdi-star
      </v-icon>
        <div :style="$vuetify.breakpoint.xs ? 'font-size:12px;':'font-size:15px;'" >   {{n.rating}} </div> 

    </v-chip>

</v-col>


      
      
</v-row >



<v-row no-gutters class="ml-2 mt-3">
      <v-col
      cols="12"
      >



      <div     class=" grey2--text " 
>
       simply dummy text of the printing 
      </div>




      </v-col
      
      >
</v-row >



<v-row no-gutters class="ml-2 mt-3">
      <v-col
      cols="12"
      >



     <v-chip-group

     column
       class="chip"
     
      
      >
        <v-chip   v-for="e in n.labels"
        :key="e.label.id" color="theme3"  label > {{e.label.label}} </v-chip>

        
      </v-chip-group>
      




      </v-col
      
      >
</v-row >





    </v-col>
  </v-row> 
</v-container>









  </v-card>
  </NuxtLink>

  </v-col>

   </v-row>
</v-container > 
  

    <infinite-loading v-if="suppliers.length && this.enter==true" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>







</div>




















</template>

<script>



export default {
    name: 'Restaurants',
fetchOnServer: false,

    data(){
      return{
        page: 1,
        suppliers:[],
        extra:"",
        enter:true,
         filtershow:false,
          type:null,
      chips: [],
         items: ["egg","beef","chicken","fish", "cheese" , "milk","vegatables" , "fruit","bread"],
        sort:["price","rating" ,"distance"],
        price:["high to low" , "low to high"],
        stop:false,
        
        
        

      }
    },
 created: function()
        {
          this.datafetch();
        console.log("created")

        },

 mounted () {

  },









computed: {
    cat:{
      get:function() {
        console.log("computed")
      return this.$store.state.cat
    },

    set: function(newValue) {
	console.log("Setting new name resturant: " + newValue);
          this.$store.commit('setcat', newValue);

      }

   
  },

},




 watch: { 
        cat:'$fetch',
        
        // {
        //  immediate: true,
        //   async handler (val) {
        //   console.log("watch resturant cateogry")
        //   this.$fetch
//           console.log(val)
//           this.page=1
// var url=''
//           if(!!val){
//             url='/api4/branches/query?labels='+val+'&?page='+this.page
//           }
//         else{
//           url='/api4/branches/query?page='+this.page
//         }
       
//         const ip = await this.$axios.$get(url)

//          console.log(url)
//                   console.log("up")

//         this.extra=val
// console.log(ip.suppliers)
//   this.suppliers=ip.suppliers
//   if(ip.next==null){
//     this.enter=false
//   }
//   else{
//     this.enter=true
//   }

     //   }




        
   // },

 },



async fetch()  {
//console.log(this)

  console.log("renderrrrrrr rest")
  console.log(this.cat)
var url=''
          if(!!this.cat){
             url='/api4/branches/query?labels='+this.cat+'&?page='+this.page
           }
       else{
          url='/api4/branches/query?page='+this.page
        }
       
     console.log(url)  


try {
        let response = await  this.$axios.$get(url)
      
 console.log(response)
// this.chips=response[0].restricted_ingredients


this.suppliers=response.suppliers


 if(response.next==null){
    this.enter=false
   }
   else{
     this.enter=true
   }

        

      } catch (err) {
        console.log(err)
      }










                
console.log("testt")
     





},




async mounted(){


 




          
        },
 



methods:{
 


async  datafetch () {
  console.log("api call createddd")
  // console.log(this.$auth.strategy.token.get())
  // const a=this.$auth.strategy.token.get()



//    const ip = await this.$axios.$get('/api4/branches/query?page='+this.page
   
   
// )

// console.log(ip)
//   this.suppliers=ip.suppliers
//   if(ip.next==null){
//    this.stop=ip.next
//   }
  
//  console.log(this.enter)





  },


 async infiniteScroll($state) {
     console.log("testtttt infinte scroll")
console.log(this.extra)
this.page++;
var url
if(this.extra){
 url='/api4/branches/query?page='+this.page+'&labels='+this.extra
}
else{
 url='/api4/branches/query?page='+this.page
}
        
        console.log(url)
       
          const res = await this.$axios.$get(url,
          
          //,{
 // headers: {
 //   'Authorization': token
 // }
//}
)
         const  response=res.suppliers
        // const stop= res.next
        // console.log(stop)
           console.log(response)
            // if (stop!=null) {
            //   response.forEach(item => this.suppliers.push(item));
            //   $state.loaded();
            // } else {
            //     if (stop==null){
            //        response.forEach(item => this.suppliers.push(item));
            //         $state.complete();
            //     }
             
            // }

            if(stop==false){
 response.forEach(item => this.suppliers.push(item));
              $state.loaded();
            }

            else{
               $state.complete();
            }
     
         
   
    }
  



















}




};
</script>

<style scoped>


.cardres{
 position: absolute; 
 
  top:100px;
  
  left:10px;


}

.filter{

   position: absolute; 
 
  top:10px;
  
  left:10px;
width:278px;



}


.filterm{

   position: absolute; 
 
  top:40px;
  
  left:10px;
width:380px;



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
  top:1210px;
  left:290px;
 
}

.restaurantsm{

  position: relative; 
  top:450px;
  left:0px;
 
}
.restaurant{

  position: absolute; 
  top:18px;
  left:38px;
 
}
.title{

  position: absolute; 
  top:26px;
  left:460px;
 
  text-align: center;
  
 
}
.titlem{

  position: absolute; 
  top:150px;
  left:60px;
 
  /* text-align: center; */
  
 
}



.link{


  text-decoration: none; color:black; font-weight: normal;font-size: 15px;
}


.rating{

  position: absolute; 
  top:55px;
  left:770px;
 /*  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color:rgba(121, 154, 148,0.15); */
 
}


.ratingm{

  position: absolute; 
  top:155px;
  left:280px;
 /*  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color:rgba(121, 154, 148,0.15); */
 
}





.chip{

 
  width:314px;
  height:100px;

  

}


.chipm{

 position: absolute; 
  top:220px;
  left:10px;
  width:380px;
  height:100px;

  

}


.images{

position: absolute; 
  top:0px;
  left:0px;

}



.imgmain{

width:51px;
  height:49px;
}

.distance{
position: absolute; 
  top:20px;
  left:280px;

}

.location{
position: absolute; 
  top:55px;
  left:455px;
  width:130px;
 
}

.locationm{

  width:130px;
 
}

.subt{
  
  width:320px;
 
}

.subtm{
   position: absolute; 
  top:200px;
  left:10px;
  width:320px;
 
}
.save{
   position: absolute; 
  top:-10px;
  left:800px;
 
}
.money{
position: absolute; 
  top:20px;
  left:22px;


}
 
</style>