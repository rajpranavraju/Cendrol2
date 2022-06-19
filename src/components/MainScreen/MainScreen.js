import ButtonComponent from '../ButtonComponent/ButtonComponent.vue'
import TypographyComponent from '../TypographyComponent/TypographyComponent.vue'
// import CendrolLogo from '../assets/cendrollogo1.png'


export const MainScreen = {

components: {
    ButtonComponent,
    TypographyComponent
},
data() {
    return{
        headerItems: ['Sand tech', 'About us', 'Contact']

        
    }
  

},
computed: {
    
}
}
export default MainScreen