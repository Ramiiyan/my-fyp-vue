<template>
  <div class="about">
    
    <v-card class="e2">
    <v-card-text>
      <v-container fluid>
        <v-row>
        <v-col cols="6">
        <v-row>
          <v-col cols="12">
            <v-slider
              v-model="base"
              :max="180"
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
              :max="180"
              label="Joint 1"
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
              :max="180"
              label="Joint 2"
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
              :max="180"
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
        </v-col>
        <v-col cols="6"> 
          <RoboticArmDT :j1="j1" :j2="j2" :j3="fe"/>
        </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
  {{this.publishEvent}}
  </div>
</template>

<script>
  import RoboticArmDT from '../components/RoboticArmDT.vue';
  export default {
    name: 'ArmController',
    components:{
      RoboticArmDT,
    },
    data() {
      return {
        // socket: null,
        base: 0,
        j1: 0,
        j2: 0,
        fe: 0,
        
      }
    },
    created() { 
      this.connectWebsocket();
      console.log("Controller initiated.");
      this.activateController();
    },
    beforeDestroy() {
      // this.disconnectWebsocket(); 
    },
    computed:{
      publishEvent:function(){
        // {"b":40,"j1":60,"j2":100,"j3":80,"j4":120,"fe":45}
        // var msg = 'j1 :'+this.red + ' G :'+this.green + ' B :'+this.blue ;
        var msg = '{"b":'+ this.base +',"j1":'+ this.j1 +',"j2":'+ this.j2 +',"fe":'+ this.fe +'}' ;
        this.$socket.emit('my event', {data: msg});
        
        console.log(msg);
        return msg;
      },
    },
    methods: {
      activateController(){
        let control_mode = '{"action":"control","param":{"mac":"1119"}}'
        this.$socket.emit('my event', {data: control_mode});
        console.log(control_mode);
      },
      connectWebsocket() { 
       
      //  this.socket = io.connect('http://localhost:5000');
        this.$socket.on('connect',() => {
          console.log('Controller Connected to socket');
          this.$socket.emit('initiate_socket', "Vue Client: socket request accepted.");
        });

        this.$socket.on('initiate_socket', (message) => {
          console.log(message);
          // console.log(message.payload);
          // if (message.payload) {
          //   this.message = message.payload;
          // } 
        });
      }, 
      disconnectWebsocket() {
        if (this.$socket) {
          this.$socket.emit('unsubscribe_all');
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
