export const FormFieldComponent = {

components: {

},
props: {
    type:{
        type: String
    },
    placeholderText:{
        type:String,
        default: 'black'
    },
    itemAlign:{
        type:String,
        default: 'center'
    },
    items: {
        type: Array
    },
    colVal: {
        type: String,
        default:'rgb(86, 86, 86)'
    },
    validate: {
        type: Boolean,
        default: false
    },
    submitted: {
        type: Boolean,
        default: false
    }
},
data() {
    return{
        focus:false,
        blur: false
        
    }
},
methods:{
    focusHandler() {
        this.focus=true
    },
    inputHandler(e) {
        this.$emit('input',e.target.value)
    },
  
},
computed: {
    validateColor(){
        if((this.focus || this.submitted) && !this.validate){
            return 'red'
        }
        else if(this.validate) {
            return '#565656'
        }
    }

},
}
export default FormFieldComponent