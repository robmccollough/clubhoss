import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons
import {
  faHouse,
  faArrowUpRightFromSquare,
  faRectangleXmark
} from '@fortawesome/free-solid-svg-icons'
library.add(faHouse, faArrowUpRightFromSquare, faRectangleXmark)

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
