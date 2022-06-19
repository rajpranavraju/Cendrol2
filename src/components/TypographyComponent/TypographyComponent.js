// import HeaderComponent from '../HeaderComponent/HeaderComponent.vue'
// import MainScreen from '../MainScreen/MainScreen.vue'
export const TypographyComponent = {

components: {
// HeaderComponent,
// MainScreen
},
props: {
    type:{
        type: String
    },
    textContent:{
        type:String
    },
    col:{
        type:String,
        default: 'black'
    },
    itemAlign:{
        type:String,
        default: 'center'
    },
    size: {
        type: String,
        default: '16px'
    }
},
data() {
    return{
        
    }

},
computed: {

}
}
export default TypographyComponent