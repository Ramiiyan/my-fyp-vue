import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io';
import * as io from 'socket.io-client';

Vue.config.productionTip = false

// Vue.use(socket);

// const socket = io.connect('http://localhost:5000', {
//   transports: ['websocket'],
// });
Vue.use(VueAxios,axios);
const socket = io.connect('http://localhost:5000');

Vue.prototype.$socket = socket;
// Vue.use(VueSocketIOExt,socket);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
