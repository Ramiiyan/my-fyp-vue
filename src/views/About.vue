<template>
  <div class="about">
    
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
  {{this.passChanges}}
  </div>
</template>


<script>
  export default {
  name: 'About',

    data() {
      return {
        // socket: null,
        red: 64,
        green: 128,
        blue: 0,
        
      }
    },
    created() { 
      this.connectWebsocket();
    },
    beforeDestroy() {
      this.disconnectWebsocket(); 
    },
    computed:{
      passChanges:function(){
        var msg = 'R :'+this.red + ' G :'+this.green + ' B :'+this.blue ;
        this.$socket.emit('on_publish', msg);
        return msg;
      },
    },
    methods: {
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
