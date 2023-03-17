const {createApp} = Vue;

createApp({
    data() {
      return {
        name:'',
        lastName:'',
        phoneNumber:'',
        homeNumber:'',
        address : '',
        passedFormPage : true,
        passedGooglePage : false,
        informationPage : false,
        mapInfo : false,
        userInfo : []
      }
    },  
    methods : {
      sabt() {
        this.mapInfo = false
        this.passedGooglePage = false
        this.informationPage = false
        this.passedFormPage = true
        this.name = this.lastName = this.phoneNumber = this.homeNumber = this.address = '';
        },
      showInfo(){
        this.mapInfo = false
        this.passedGooglePage = false
        this.passedFormPage = false
        this.informationPage = true
      },
      mapInfoFunction(){
        this.mapInfo = true
        this.passedGooglePage = false
        this.informationPage = true
        this.userInfo.push({name:this.name, lastname : this.lastName, 
          phoneNumber:this.phoneNumber,
          homeNumber:this.homeNumber,
          address : this.address})
      },
      postData(){
        if (this.name<3 || this.lastName<3 || this.phoneNumber<11 || this.homeNumber<11 || this.address<10){
          alert("ورودی های داده شده اشتباه می باشند!")
        }else if(isNaN(this.phoneNumber) || isNaN(this.homeNumber)){
          alert("شماره تماس/شماره ثابت باید عدد باشند!")
        }else if(!isNaN(this.name) || !isNaN(this.lastName) || !isNaN(this.address)){
          alert("نام/ نام خانوادگی/ آدرس باید از جنس رشته باشند!")
        }
        else{
          this.passedFormPage = false;
          this.passedGooglePage = true;
        }
      }
    }
  }).mount('#app')

/*  Google Map Platform

const initMap = () => {
  let options = {
    zoom:8,
    center : {lat:52.587, lng:-62.859}
  }

  let map = new google.maps.Map(document.getElementById('map'), options);

  const addMarker = (coords) => {
    let marker = new google.maps.Marker({
      position:coords,
      map,
  })
  }

  google.maps.event.addListener(map, 'click', (event) => {
      addMarker({coords:event.latlng}) //GET LNG and LAT
  })

}

<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>

*/

/* Using The API to SEND and GET DAta 


const getApi = async (url) => {
  try{
      const response = await fetch(url)
      console.log(response.body)
    }catch(error){
      console.log('Error from getApi : ' + error);
    }
}


const sendApi = async (url,data) => {
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {'Authorization' : 'Basic MDkxMjEwNzAxNTc6QWNoYXJlaEAxMjM0',
                "Content-type": "application/json"},
      body:JSON.stringify(data)
    })
  }catch(error){
    console.log('Error from sendApi : ' + error);
  }
}

sendApi("https://stage.achareh.ir/api/karfarmas/address/",{
  last_name : 'this.lastName' ,
  coordinate_mobile : 'this.phoneNumber',
  first_name : 'this.name' ,
  coordinate_phone_number : 'this.homeNumber',
  address : 'this.address',
  lat : 12.256658,
  lng : 25.8988989,
  gender : 'male'
})
getApi("https://stage.achareh.ir/api/karfarmas/address")

*/