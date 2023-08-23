import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHouse,
  faArrowUpRightFromSquare,
  faRectangleXmark,
  faPlus,
  faUser,
  faLock,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'

// initialize firebase services
import '@/firebase.js'

// Icons
library.add(
  faHouse,
  faArrowUpRightFromSquare,
  faRectangleXmark,
  faPlus,
  faUser,
  faLock,
  faEye,
  faEyeSlash
)

const app = createApp(App)

app.component('FaIcon', FontAwesomeIcon)

app.use(router)
app.use(WaveUI, { theme: 'dark' })
app.use(createPinia())
app.mount('#app')
