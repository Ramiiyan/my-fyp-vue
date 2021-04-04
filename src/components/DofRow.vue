<template>
    <div>
    <v-form>
    <v-row v-for="i in this.dofCount" :key="i">
        <v-col cols="2" dense>
          <v-subheader> Servo {{i}} : </v-subheader>
        </v-col>
        <v-col cols="2" dense>
          <v-select
            v-model="dof.selectedType[i-1]"
            label="Type"
            :items="servoTypes"
          ></v-select>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            v-model="dof.range.min[i-1]"
            label="Min"
            :rules="[rangeRule]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="2" dense>
          <v-text-field
            v-model="dof.range.max[i-1]"
            label="Max"
            :rules="[rangeRule]"
            required
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
    </v-form>
    {{dof}}
    {{getDofRow}}

    </div>
</template>
<script>
    export default {
        name:'DofRow',
        props:['dofCount','getDofRow'],
        data: () => ({
            dof:{
                selectedType:['Micro servo 9g','Micro servo 9g'],
                range:{
                    min:[],
                    max :[]
                },
                // pin:[],
            },
            servoTypes:['Micro servo 9g','Micro servo 90S'],
            Dpins:[13, 14, 15, 16, 17, 18],
            Apins:[20, 21, 22, 23, 24, 25, 26],
            rangeRule: v  => {
                // if (!v.trim()) return true;
                if (!isNaN(parseFloat(v)) && v >= 0 && v <= 360) return true;
                return 'Range has to be between 0 and 360';
            },
        }),
        watch:{
          // sendRowVal:{
          //   get(){
          //     return this.getDofRow;
          //   },
          //   set(value){
          //     console.log("the Value : " + value);
          //     this.$emit('sub-row',this.dof);
          //   }

          // }
            getDofRow(val){
                if(val){
                  console.log("triggering...");
                  this.$emit('sub-row', this.dof);
                 }else{
                  console.log("not emiting..");
                }
            }
        },
    }
</script>