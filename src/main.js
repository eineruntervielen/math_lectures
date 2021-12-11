import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faList} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faBars, faTimes, faList)


const app = createApp(App).use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
