import TypographyComponent from '../TypographyComponent/TypographyComponent.vue'
import FormFieldComponent from '../FormFieldComponent/FormFieldComponent.vue'
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue'

// import CendrolLogo from '../assets/cendrollogo1.png'


export const FormComponent = {

components: {
    TypographyComponent,
    FormFieldComponent,
    ButtonComponent
},
data() {
    return{
        headerItems: ['Sand tech', 'About us', 'Contact'],
        userType:['Land/Construction Owner','Manager'],
        stageType:['Plinth'],
        fullname:'',
        phone:'',
        email:'',
        measurement:'',
        qty:'',
        floors:'',
        stage:'',
        location:'',
        area: '',
        submitClicked: false
        
    }
  

},
methods: {
    submitHandler() {
        this.submitClicked=true;
        if(this.checkname && this.checkArea && this.checkFloors && this.checkLocation && this.checkMeasurement && this.checkQty && this.checkphone && this.checkemail)
        alert('Data successfully submitted')
        else 
        alert('Please fill all the fields with valid data')

    },
    inputHandler(input,type) {
        switch(type){
            case 'name': this.fullname=input
                        break
            case 'phone': this.phone=input
                        break
            case 'email': this.email=input
                        break
            case 'qty': this.qty=input
                        break
            case 'floors': this.floors=input
                        break
            case 'measurement': this.measurement=input
                        break
            case 'area': this.area=input
                        break
            case 'location': this.location=input
                        break
        }
    }
},
computed: {
    checkname() {
        let res = (/^[a-zA-Z]+$/.test(this.fullname) && this.fullname.length>2)
        return res;
    },
    checkphone() {
        var regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        console.log('fgfg',!!this.phone.match(regExp))
        return !!this.phone.match(regExp);
    },
    checkemail() {
        return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email))

    },
    checkMeasurement() {
        return  /^[0-9a-zA-Z]+$/.test(this.measurement)

    },
    checkArea() {
        return  /^[0-9a-zA-Z]+$/.test(this.area)

    },
    checkQty(){
      return  /^[0-9a-zA-Z]+$/.test(this.qty)
    },
    checkFloors(){
        return  /^[0-9a-zA-Z]+$/.test(this.floors)

    },
    checkLocation() {
        return  /^[0-9a-zA-Z]+$/.test(this.location)
  
      }
    
}
}
export default FormComponent