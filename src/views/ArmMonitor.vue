<template>
  <v-container>
    {{this.passChanges}}
    <v-card class="e4">
    <v-responsive
      :style="{ background: `rgb(${red}, ${green}, ${blue})` }"
      height="300px"
    ></v-responsive>

    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="red"
              :max="255"
              label="R"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="red"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="green"
              :max="255"
              label="G"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="green"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-slider
              v-model="blue"
              :max="255"
              label="B"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="blue"
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

  
  export default {
    name: 'HelloWorld',

    data() {
      return {
        mqtt_message:'',
        red: 64,
        green: 128,
        blue: 0,
        
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
    },
    beforeDestroy() {
      this.disconnectWebsocket(); 
    },
    computed:{
      passChanges:function(){
        var msg = '{"red" : "'+this.red + '", "Blue" : "'+this.blue +'", "Green" : "'+this.green+'"}';
        // this.$socket.on('connect',()=> {
        //   this.$socket.emit('on_publish', {data: 'data 1'});
        // });
        this.$socket.emit('my event', {data: msg});
        
        console.log(msg);
        return msg;
      },
    },
    mounted(){
      //printing mqtt message.
      this.$socket.on('mqtt_message', (message) => { 
          console.log(message);
          // this.mqtt_message = message;
          console.log(message.payload);
          if (message.payload) {
            this.mqtt_message = message.payload;
          } 
        });
    },
    methods: {
      connectWebsocket() { 
       
      //  this.socket = io.connect('http://localhost:5000');
        this.$socket.on('connect_socket', (message)=>{
          console.log(message);
          // this.$socket.emit('socket', "I'm connected from Vue!");

        });

        // this.$socket.on('mqtt_message', (message) => { 
        //   console.log(message);
        //   console.log(message.payload);
        //   if (message.payload) {
        //     this.message = message.payload;
        //   } 
        // });
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
