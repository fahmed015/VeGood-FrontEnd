<template>






<div>


     <v-btn
              icon
      
          class="mt-3"
          
          @click="open"
            >
               <v-icon color="theme1">mdi-map-marker</v-icon>
            </v-btn> 




<modal name="map"
 @closed="close"
      
        :reset="true"
        height="auto"
       :width="$vuetify.breakpoint.xs ? '100% ' : '90%'"
        :scrollable="true"
        
       
         >

      <v-card>
          <!-- <v-btn
        
            class=" mt-2 ml-2"
            icon
            @click="dialog = false"
             v-if="show==true"
            
          >
          
           <v-icon  v-if="show==true" color="black"  >
        mdi-close
      </v-icon>
          </v-btn> -->
        <v-card-actions>


 <vuetify-google-autocomplete
            
            id="map"
             v-model='address'
             class="a2"
             
         
             clearable
        solo
        prepend-inner-icon="mdi-magnify"
        placeholder="Find an area"
        color="theme1"
            country="eg"
            v-on:placechanged="getAddressData"
            
            
        >
        </vuetify-google-autocomplete>


 </v-card-actions>


 <v-card-actions>


        <GmapMap
  :center="{lat:currentLocation.lat, lng:currentLocation.lng}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 800px; height: 500px"
  
  @click='updateCoordinates2($event)'
>
  


<GmapMarker
    
    :position="{lat:marker.lat, lng:marker.lng}"
    :clickable="true"
    :draggable="true"
    @dragend="updateCoordinates2($event)"
   
   
   
  />


</GmapMap> 

 


        </v-card-actions>

        <v-card-actions>
        


<v-btn @click="mark" class="mx-auto " color="theme4">
go to my current  location
</v-btn>


        </v-card-actions>
      </v-card> 


  </modal>
</div>


</template>

<script>


export default {
     name: 'MapButton',

 


   data(){
      
      return{

   
 select:"",
 currentLocation : { lat : 0, lng : 0},
     marker:{ lat : 0, lng : 0},

address:"",
coo:{},
dialog: false,
   show:true,   


      }
    },

methods:{

open(){

    this.$modal.show('map' )
     document.documentElement.style.overflow = 'hidden'
     this.mark()

},

close(){

 document.documentElement.style.overflow = 'auto'

//this.$modal.hide('example')



},



 getAddressData: function (addressData) {
               // this.address = addressData;
               console.log("methoda gddeda")
console.log(addressData)
console.log(addressData.latitude)

this.currentLocation = {
          lat: addressData.latitude,
          lng: addressData.longitude
        };

        this.marker = {
           lat: addressData.latitude,
          lng: addressData.longitude
        };








            },

mark(){


  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)

this.p1=position.coords.latitude
this.p2=position.coords.longitude


this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.marker = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
this.mark2()
// const add={lat:position.coords.latitude , lng:position.coords.longitude}
// //const add2={lat:29.9836703 , lng:31.3161957}
// this.marker=[add]
// console.log("what")
// console.log(this.marker)

})

},








 updateCoordinates(location) {
             this.coo = {
                lat: location.latLng.lat(),
                 lng: location.latLng.lng(),
             };

console.log(this.coo);

        },

         updateCoordinates2(location) {
          
             this.marker = {
                lat: location.latLng.lat(),
                 lng: location.latLng.lng(),
             };
              this.currentLocation = {
                lat: location.latLng.lat(),
                 lng: location.latLng.lng(),
             };

this.mark2()

        },


        mark2(){


const geocoder = new google.maps.Geocoder();
var input

 
    input=this.marker
 
 
console.log(input)
geocoder.geocode({ location: input }, (results, status) => {
    if (status === "OK") {
      if (results[0]) {
     
       
        console.log(results[0].formatted_address);
        this.address=results[0].formatted_address

        this.currentLocation = {
          lat: input.lat,
          lng: input.lng
        };

        this.marker = {
           lat: input.lat,
          lng: input.lng
        }

        console.log(this.marker)
        
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });


//this.dialog = false

 


        },


 mark3() {
   var geocoder = new google.maps.Geocoder();
    var add = this.address;
    console.log("mark3")
    console.log(add)
    geocoder.geocode( {'address': this.address}, (results, status) =>{
      if (status === 'OK') {
         if (results[0]) {
        var latitude = results[0].geometry.location.lat();
var longitude = results[0].geometry.location.lng();


    console.log('show')
    console.log(results[0])
    console.log(latitude)
    console.log(longitude)
//     const add2={lat:results[0].geometry.location.lat() , lng:results[0].geometry.location.lng()}
//     this.marker=[]
// this.marker=[add2]
// const add2={lat:29.9836703 , lng:31.3161957}
// this.marker=[add2]
// console.log("marker ")
// console.log(this.marker)

 var a=29.98229932257132
 var b=31.310028658197016




this.marker = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
this.currentLocation = {
          lat:  results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        
console.log(this.marker)
//           this.currentLocation.lat = results[0].geometry.location.lat();
//           console.log(this.currentLocation.lat)
//           this.currentLocation.lng = results[0].geometry.location.lng();
//  console.log(this.currentLocation.lng)
//           this.marker.lat = results[0].geometry.location.lat();
//           this.marker.lng = results[0].geometry.location.lng();


        
// console.log(this.marker)
// console.log(this.currentLocation)
       




//  this.currentLocation = {
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng()
//         };

// this.marker = {
//           lat: results[0].geometry.location.lat(),
//           lng: results[0].geometry.location.lng()
//         };
        
// console.log(this.marker)
// console.log(this.currentLocation)
       
       
     } } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
 }







}





























}
</script>


<style scoped>











</style>
