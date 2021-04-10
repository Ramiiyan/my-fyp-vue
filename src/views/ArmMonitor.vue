<template>
  <v-container>
    <!-- {{this.passChanges}} -->
    
    <!-- <v-responsive
      :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
      height="300px"
    ></v-responsive> -->
    <RoboticArmDT :j1="j1" :j2="j2" :j3="fe"/>
    <v-card class="e4">
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="base"
              :max="255"
              label="Base"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="base"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="j1"
              :max="255"
              label="j1"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="j1"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="j2"
              :max="255"
              label="j2"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="j2"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
          <v-col cols="12">
            <v-slider
              v-model="fe"
              :max="255"
              label="Final Effector"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="fe"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
    <h4> MQTT MSG: {{this.mqtt_message}}</h4>
  </v-container>
</template>
<!--<script src="https://cdn.socket.io/3.1.1/socket.io.min.js" integrity="sha384-gDaozqUvc4HTgo8iZjwth73C6dDDeOJsAgpxBcMpZYztUfjHXpzrpdrHRdVp8ySO" crossorigin="anonymous"></script>-->
<script>
// import { Socket } from 'socket.io-client';
import RoboticArmDT from '../components/RoboticArmDT.vue';
  
  export default {
    name: 'ArmMonitor',
    components:{
        RoboticArmDT,
    },
    data() {
      return {
        mqtt_message:null,
        base:0,
        j1: 0,
        j2: 0,
        fe: 0,
        
      }
    },
    // sockets:{
    //   connect() {
    //     console.log('socket connected')
    //   },
    //   customEmit(val) {
    //     console.log(val + 'this method was fired by the socket server. eg: io.emit("customEmit", data)')
    //   },
      
    // },
    created() { 
      this.connectWebsocket();
      console.log("Monitor initiated.");
      this.activateMonitor();
    },
    beforeDestroy() {
      // this.disconnectWebsocket(); 
    },
    computed:{
      // passChanges:function(){
      //   var msg = '{"red" : "'+this.red + '", "Blue" : "'+this.blue +'", "Green" : "'+this.green+'"}';
      //   // this.$socket.on('connect',()=> {
      //   //   this.$socket.emit('on_publish', {data: 'data 1'});
      //   // });
      //   this.$socket.emit('my event', {data: msg});
        
      //   console.log(msg);
      //   return msg;
      // },
    },
    mounted(){
      //printing mqtt message.
      this.$socket.on('mqtt_message', (message) => { 
          console.log(message);
          // this.mqtt_message = message;
          console.log(message.payload);
          if (message.payload) {
            this.mqtt_message = message.payload;
            // console.log(message.payload["b"]);
            this.j1 = parseInt(message.payload["b"]);
            this.j2 = parseInt(message.payload["j2"]);
            this.fe = parseInt(message.payload["fe"]);
          } 
        });
    },
    methods: {
      activateMonitor(){
        let control_mode = '{"action":"monitor","param":{"mac":"1119"}}'
        this.$socket.emit('my event', {data: control_mode});
        console.log(control_mode);
      },
      connectWebsocket() { 
       
      //  this.socket = io.connect('http://localhost:5000');
        this.$socket.on('connect_socket', (message)=>{
          console.log(message);
          // this.$socket.emit('socket', "I'm connected from Vue!");

        });
      }, 
      disconnectWebsocket() {
        if (this.$socket) {
          // this.$socket.emit('unsubscribe_all');
          this.$socket.emit('unSubscribe_all');
          this.$socket.disconnect();
        }
      } 
    },
  }
</script>
<style scoped>
.e4{
  width: 40%;
  margin: auto;
}
</style>
