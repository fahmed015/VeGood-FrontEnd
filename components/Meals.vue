<template>
   <div>

<v-container fluid>
<v-row >



<v-col cols="12" md=10 sm=12>
    <v-row>
 <v-col
          v-for="n in info"
        :key="n.id"
    
          cols="12"
          md="5"
          offset-sm="0"
          offset-md="1"
          
          
        >

 <v-card
         
             @click.native="getinfo(n.id)"
              class="mt-6"
                
              
            >
              




<v-row>

<v-col cols=12>







<v-carousel

  
     :height="$vuetify.breakpoint.xs ? '100 ' : '250 '"
 
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
        
      </v-img>
    </v-carousel-item>
  </v-carousel>


</v-col>




<v-col cols=12 class="ml-1">
  <div        class="mealtitle black--text "     >
          {{n.product_name}}

        </div>
</v-col>


<v-col cols=12 class="ml-1">
 <div  class="inside2 ">       Lorem Ipsum is simply dummy text of the printing  </div>

</v-col>



<v-col cols=12 class="ml-1">

    <v-row>

<v-col cols=6>


<v-row>
<v-col cols=7>

<div   class="ing black--text "  >
 <div>Calories  </div>
<div>Carbohydrates </div>
<div>Fat  </div>
<div>Protein </div>

</div>
</v-col>

<v-col cols=5>
    <div  class="ing2 theme1--text ">
 <div>{{n.cal}} 77g  </div>
<div>{{n.carb}}88g </div>
<div>{{n.fat}} 15g </div>
<div>{{n.pro}} 6g </div>

</div>

</v-col>

    </v-row>


    </v-col>
<v-col cols=6>



<v-row>
<v-col cols=6>

<div    class="price theme5--text "  >
 <div>Small  </div>
<div>Medium </div>
<div>Large  </div>


</div>
</v-col>

<v-col cols=6>
<div  class="price2 black--text " >
 <div>20$  </div>
<div>30$ </div>
<div>40$  </div>


</div>

</v-col>

    </v-row>





    </v-col>

    </v-row>

</v-col>




<v-col cols=12 class="ml-1">

 <v-chip-group

     column
       class="chip"
     
      
      >
        <v-chip   v-for="e in n.labels"
        :key="e.label.id" color="theme3"  label > {{e.label.label}} </v-chip>

        
      </v-chip-group>


</v-col>



<v-col cols="12">
<v-row justify="center"  class="pa-4">
     <v-btn
        rounded
        color="theme1"
         @click="addtocart(n.id)"
    
      >
        <v-icon
         color="white"
          left
        >
         mdi-plus-circle
        </v-icon>
        Add to Cart
      </v-btn>


</v-row>
</v-col>



</v-row>


      
       
















              
        
      
            

 












            </v-card>




















 </v-col>
    </v-row>
</v-col>

</v-row>


















</v-container>




</div>
       
</template>

<script>


export default {

fetchOnServer: false,


    name: 'Meals',
    

    data(){
        return{
 info:[], 

  
        id:null,
          overlay: false,
      zIndex: 3,
  info2:[], 
  tabs3:false ,
extra:null,

        }
    },

    
 
created()
        {
          
        },

computed: {
    cat:function() {
      return this.$store.state.cat
    },
     set: function(newValue) {
	console.log("Setting new name meal: " + newValue);
          this.$store.commit('setcat', newValue);

      }
   
  },





 watch: {
       cat:'$fetch',
        


        



        
    },





async fetch()  {
//console.log(this)

  console.log("renderrrrrrr meal")
  console.log(this.cat)
var url=''
          if(!!this.cat){
    url=`/api4/products/query?supplier=${this.$route.query.name}&labels=`+this.cat
           }
       else{
url=`/api4/products/query?supplier=${this.$route.query.name}`
        }
       
     console.log(url)  


try {
        let response = await  this.$axios.$get(url)
      
 console.log(response)
// this.chips=response[0].restricted_ingredients


this.info=response.products



      } catch (err) {
        console.log(err)
      }










},







methods:{
 




async  addtocart (id) {


  // const ip = await this.$axios.$post('/api4/orders/add/item/'+id+'/')

 console.log(ip)
 
   
  





  },




async  datafetch () {


//    const ip = await this.$axios.$get(`/api4/products/query?supplier=${this.$route.query.name}`)

//  this.info=ip.products;
 
   
  





  },






  getinfo (id) {
    
   
    this.$emit('mealinfo',id);

//    const ip = await this.$axios.$get(`/api4/products/id/${id}`)

//  this.info2=ip;
//  console.log(this.info2)

// this.id=id
// console.log("change")
// console.log(this.id)
 
//  this.$modal.show('meal')
//      document.documentElement.style.overflow = 'hidden'
    
  
  },
}



};
</script>

<style>




.v-dialog {
  height:100%;
}

.mealtitle{
 
  font-weight: bold;
}

.ing{

 font-size: 15px;


}
.price{

 font-size: 14px;


}

.price2{

 font-size: 14px;
font-weight: bold;

}
.ing2{

 font-size: 15px;


}

 .inside2{



font-size: 12px;
 }

 .inside{
  
text-align:center;
font-size: 14px;


}

</style>