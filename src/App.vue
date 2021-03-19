<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/about">About</router-link>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import io from 'socket.io-client';
// const io = require('socket.io-client');

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },
  data: () => ({
    // socket : null,
  }),
  // created(){
  //   this.connectToWebSocket();
  // },
  // beforeDestroy() {},
  // methods: {
  //   connectToWebSocket() {
  //     this.socket = io('http://localhost:5000');
  //     this.socket.on('mqtt_message', (data)=>{
  //       console.log('my Data : ');
  //       console.log(data);
  //     })
  //   },
  //   disconnectToWebSocket() {},
  // },
  // mounted() {
  //   this.socket = io('http://localhost:5000');
  //   this.socket.on('mqtt-message', (data)=>{
  //     // debugger;
  //     console.log(data);
      
  //   })
  // },
};
</script>
