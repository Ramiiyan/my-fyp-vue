<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      
    >
      <div class="d-flex align-center">
          <v-img
          alt="ROVO Logo"
          class="shrink mr-3"
          contain
          :src="require('@/assets/rovo.png')"
          transition="scale-transition"
            width="120"
          />

        <!-- <h2>Platform</h2> -->
      </div>

      <v-spacer></v-spacer>
      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/ArmMonitor">ArmMonitor</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/ArmController">ArmController</router-link>
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
