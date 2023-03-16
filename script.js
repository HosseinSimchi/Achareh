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
        mapInfo : false
      }
    },  
    methods : {
      mapInfoFunction(){
        this.mapInfo = true
        this.passedGooglePage = false
        this.informationPage = true

        async function postDataToApi(url="", data={}){
          const response = await fetch(url, {
            method: "POST",
            headers:{'Content-type': 'application/json', 'Authorization' :'Basic MDkxMjEwNzAxNTc6QWNoYXJlaEAxMjM0'},
            body: JSON.stringify(data)
          })
        }

        postDataToApi("https://stage.achareh.ir/api/karfarmas/address", {
          first_name : this.name ,
          last_name : this.lastName ,
          coordinate_mobile : this.phoneNumber,
          coordinate_phone_number : this.homeNumber,
          address : this.address,
          region : '1',
          lat : 12.256658,
          lng : 25.8988989,
          gender : 'male'
        })
        .then((response) => {
          return response.json()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))

        console.log(this.name, this.lastName,this.phoneNumber, this.homeNumber, this.address)
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