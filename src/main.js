import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faList} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Sidebar from "@/components/Sidebar.vue";
import Definition from "@/components/Definition.vue";
import LessonSummary from '@/components/LessonSummary.vue';
import InfoBox from '@/components/InfoBox.vue';
import router from './router';

library.add(faBars, faTimes, faList)


const app = createApp(App).use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('LessonSummary', LessonSummary)
app.component('Sidebar', Sidebar)
app.component('Definition', Definition)
app.component('InfoBox', InfoBox)

app.mount('#app')
