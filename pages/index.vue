<template>


<div>

   

  <vuetify-google-autocomplete
            
            id="map"
             v-model='address'
            classname="form-control"
            placeholder="Please type your address"
            country="eg"
        >
        </vuetify-google-autocomplete>
  
<v-btn @click="mark">
select pin location
</v-btn>
<GmapMap
  :center="{lat:p1, lng:p2}"
  :zoom="zoom"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  


<GmapMarker
    :key="index"
    v-for="(m, index) in marker"
    :position="m"
    :clickable="true"
    :draggable="true"
    @dragend="updateCoordinates($event)"
    @click="center=m"
  />


</GmapMap> 





</div>


</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'



export default {
  components: {
    Logo,
    VuetifyLogo,
 
  },

data() {
  return {
   p1:10,
   p2:10,

  marker:[],
zoom:15,
address:"",
coo:{}


  }
},


 
created(){

this.test()

  const coord = this.$geolocation.coords
  console.log(coord);






  
 
},

mounted(){



},











methods:{
async test() {
  console.log("enter")
  //const ip = await this.$axios.$get('/api2/distancematrix/json?origins=Boston,MA|Charlestown,MA&destinations=Lexington,MA|Concord,MA&key=AIzaSyDg3XjPdJCr353qg_OMymZOzgaCgEgHMeM')
console.log("enter2")
 //console.log(ip)

},

mark(){


  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)

this.p1=position.coords.latitude
this.p2=position.coords.longitude

const add={lat:position.coords.latitude , lng:position.coords.longitude}
this.marker=[add]
console.log(this.marker)

})

},

 updateCoordinates(location) {
             this.coo = {
                lat: location.latLng.lat(),
                 lng: location.latLng.lng(),
             };

console.log(this.coo);

        },

},












}
</script>
