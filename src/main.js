import { createApp } from 'vue'
import {
    Quasar,
    Notify
} from 'quasar'

import quasarLang from 'quasar/lang/ru'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'


import router from './router'

import store from './store'

const myApp = createApp(App)


myApp.use(Quasar, {
    plugins: {
        Notify
    },
    lang: quasarLang,
    extras: [
        'fontawesome-v6',
    ]
})

myApp
    .use(router)
    .use(store)
    .mount('#app')


