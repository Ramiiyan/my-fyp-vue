<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2> Robotic arm Specification Form</h2>
    <v-form ref="specification">
    <v-container fluid>
    <v-row>
      <v-col class="d-flex" cols="8" sm="6">
        <v-select v-model="microC" :items="microCTypes" dense
          label="Microcontroller" :rules="[rules.required]">
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="8" sm="6">
        <v-select v-model="comModule" :items="comModuleTypes" dense
          label="Communication Module" :rules="[rules.required]">
        </v-select>
      </v-col>
      <!-- TX RX PINS -->
      <v-col v-if="this.comModule != null" cols="4" sm="6">
        <v-row 
          v-if="this.microC ==='ESP WROOM32 DEV KIT' || this.microC ==='ESP32S'">
          <v-col class="d-flex" cols="2" sm="3">
            <v-text-field label="TX Pin" value="17" 
              readonly dense>
            </v-text-field>
          </v-col>
          <v-col class="d-flex" cols="2" sm="3">
            <v-text-field label="RX Pin" value="16"
              readonly dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else-if="this.microC ==='Arduino UNO R3'">
          <v-col class="d-flex" cols="2" sm="3">
            <v-text-field label="TX Pin" value="7"
              readonly dense
            ></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="2" sm="3">
            <v-text-field label="RX Pin" value="8"
              readonly dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else> Select micro Controller</v-row>
      </v-col>
      <v-col v-else> Select Com</v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="8" sm="6">
        <v-select v-model="dof" :items="dofTypes" dense
          label="Degree of Freedom" :rules="[rules.required]">
        </v-select>
      </v-col>
    </v-row>
    <!-- EACH SERVO SETTINGS -->
    <v-row v-if="this.dof != null">
      
      <v-row v-for="i in this.dof" :key="i">
        <v-col cols="2" dense>
          <v-subheader> Servo {{i}} : </v-subheader>
        </v-col>
        <v-col cols="2" dense>
          <v-select
            v-model="dofRow.selected_type[i-1]"
            label="Type"
            :items="servoTypes"
            :rules="[rules.required]"
          ></v-select>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            v-model="dofRow.servo_range.min_range[i-1]"
            label="Min"
            :rules="[rules.required, rules.rangeRule]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            v-model="dofRow.servo_range.max_range[i-1]"
            label="Max"
            :rules="[rules.required, rules.rangeRule]"
          ></v-text-field>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            label="Digital PIN"
            :value="Dpins[i-1]"
            disabled
          ></v-text-field>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            label="Analog PIN"
            :value="Apins[i-1]"
            disabled
          ></v-text-field>
        </v-col>
      </v-row>

    </v-row>
    <!-- WIFI SETTINGS -->
    <div v-if="this.comModule === 'WiFi'">
      <v-card elevation="6" dense>
      <v-card-title dense>WiFi Settings</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col class="d-flex" cols="8" sm="6">
            <v-text-field v-model="wifi.username" label="Wifi Username"
                :rules="[rules.required]" required dense>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="8" sm="6">
            <v-text-field v-model="wifi.password" label="Wifi Password"
               :rules="[rules.required]" required dense >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      </v-card>
    </div>
    <div v-else></div>
    <!-- MQTT SETTINGS -->
    <div style="margin:20px;"></div>
    <v-card elevation="6" dense>
      <v-row dense>
        <v-col cols="4" sm="4">
          <v-card-title>MQTT Settings</v-card-title>
        </v-col>
        <v-col cols="6" sm="6">
          <v-checkbox v-model="MQTT_default" color="indigo" 
            label="Platform MQTT Broker (Default)" hide-details dense >
          </v-checkbox>
        </v-col>
      </v-row>
      <v-card-text v-if="!this.MQTT_default">
        <v-row dense>
          <v-col class="d-flex" cols="6" sm="6">
            <v-text-field v-model="mqtt_config.host" label="Host"
              :rules="[rules.required]" required dense>
            </v-text-field>
          </v-col>
          <v-col class="d-flex" cols="3" sm="3">
            <v-text-field v-model="mqtt_config.port" label="Port"
              :rules="[rules.required]" required dense >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="6" sm="6">
            <v-text-field v-model="mqtt_config.username" label="Username"
              :rules="[rules.required]" required dense >
            </v-text-field>
          </v-col>
          <v-col class="d-flex" cols="6" sm="6">
            <v-text-field v-model="mqtt_config.password" label="Password"
              :rules="[rules.required]" required dense >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="6" sm="6">
            <v-text-field v-model="mqtt_config.pub_topic" required dense
              label="Pubish Topic (Controller)"
              :rules="[rules.required]" >
            </v-text-field>
          </v-col>
          <v-col class="d-flex" cols="6" sm="6">
            <v-text-field v-model="mqtt_config.sub_topic" required dense
              label="Subscribe Topic (Monitor)"
              :rules="[rules.required]" >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <br>
    <v-row>
      <v-col class="d-flex" cols="12" sm="6">
        <v-btn color="submit" v-on:click="submit"> Generate Firmware </v-btn>
      </v-col>
    </v-row>
    </v-container>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import DofRow from "@/components/DofRow.vue";
export default {
  name: 'Home',
  data: () => ({
    microC: "ESP WROOM32 DEV KIT",
    dof: null,
    comModule: "SIMCOM 7000",
    MQTT_default: true,
    // getDofRow:false,
    // dofRowObj: null,
    dofRow: {
      selected_type: [],
      servo_range: {
        min_range: [],
        max_range: []
      },
    },
    wifi:{
      username:null,
      password:null
    },
    mqtt_config:{
      host:null,
      port:null,
      username:null,
      password:null,
      pub_topic:null,
      sub_topic:null
    },
    // List of Options
    dofTypes: [2, 3, 4, 5, 6],
    microCTypes:['ESP32S', 'ESP WROOM32 DEV KIT', 'Arduino UNO R3'],
    comModuleTypes:['SIMCOM 7000','WiFi'],
    servoTypes:['Micro servo 9g','Micro servo 90S'],
    Dpins:[12, 26, 32, 14, 18, 22],
    Apins:[13, 27, 33, 25, 19, 23],
    rules: {
      required: value => !!value || "Required.",
      rangeRule: v  => {
      // if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 360) return true;
        return 'Range has to be between 0 and 360';
      },

    },
    
  }),
  components: {
    // DofRow,
  },
  // watch:{
  //   selectedDof:function(val) {
  //     console.log("on watch:" + val);
  //   },
  // },
  methods:{
    async sendRovoSpecs(url, msg) {
      //  return await this.axios.post(url,msg)
      //   .then(response => {
      //     console.log(response);
      //   });
      return await this.axios({
        url: url,
        method: 'POST',
        responseType: 'arraybuffer',
        data: msg,
      }).then((res) =>{
        let data = res.data;
        console.log(res);
        const blob = new Blob([data], { type: 'application/zip' });
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);  
        link.download = 'firmware_v1.0.zip';
        link.click()
      }).catch(error =>{
        console.error(error);
      });
    },
    // async triggerEmit(){
    //   this.getDofRow = true; //triggering to get sub form (DofRow.vue)
    //   return 1;
    // },
    // async DofRowValues(values){
    //   this.dofRowObj = await values;
    //   console.log(this.dofRowObj);
    // },
    
    async submit(){
      // const result = await this.triggerEmit();
      // console.log(result);
      const validateForm = this.$refs.specification.validate();
      const msg = {
        micro_c: this.microC,
        com_module: this.comModule,
        dof: this.dof,
        dof_row_obj: this.dofRow,
        wifi: this.wifi,
        mqtt_default:this.MQTT_default,
        mqtt_config: this.mqtt_config
      };
      console.log(msg);
      
      if(validateForm){
        await this.sendRovoSpecs("http://localhost:5000/rovoSpec",msg);
      }

    },
    
  }
}
</script>
