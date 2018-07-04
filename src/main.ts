import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faAddressBook, faDatabase, faAddressCard
, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight
} from '@fortawesome/free-solid-svg-icons'
//@ts-ignore
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome initialization
library.add(faHome, faAddressBook, faDatabase, faAddressCard
  , faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight)
Vue.component('fa-icon', FontAwesomeIcon)

// Bootstrap initialization
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
