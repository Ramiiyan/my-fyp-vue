<template>
  <div class="modelTest">
    <div id="contentWrapper" class="container_12">

		<!-- <v-text-field v-model="angle2" label="J1" dense ></v-text-field>
		<v-text-field v-model="angle3" label="J2" dense ></v-text-field>
		<v-text-field v-model="angle5" label="J3" dense ></v-text-field>

		{{this.angle2}}
		{{this.angle3}}
		{{this.angle5}} -->
		<!-- <div id="tempButtons">
			<input type="button" value="Rotate Joint 2" v-on:click="rotate2(10)" oncontextmenu="return false" />
			<input type="button" value="Reverse Joint 2" onmousedown="buttonClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
			<input type="button" value="Rotate Joint 3" onmousedown="joint3Clicked()" onmouseup="buttonReleased()" oncontextmenu="return false"/>
			<input type="button" value="Reverse Joint 3" onmousedown="joint3ClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
			<input type="button" value="Rotate Joint 5" onmousedown="joint5Clicked()" onmouseup="buttonReleased()" oncontextmenu="return false"/>
			<input type="button" value="Reverse Joint 5" onmousedown="joint5ClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
        </div> -->
		<div id="robotWrapper" class="grid_6">
			<canvas ref="myCanvas"  width="400" height="400">
				<p>Canvas is not supporting in your Browser, change it.</p>
			</canvas><br/>
		</div>
	</div>  
  </div>
</template>
<script>
// import $ from '../scripts/jquery'
import baseImg from '@/assets/armModel/base.png'
import joint1Img from '@/assets/armModel/joint1.png'
import joint2Img from '@/assets/armModel/joint2.png'
import joint3Img from '@/assets/armModel/joint3.png'
import joint4Img from '@/assets/armModel/joint4.png'
import joint5Img from '@/assets/armModel/joint5.png'
import joint6Img from '@/assets/armModel/joint6.png'
import elbowImg from '@/assets/armModel/elbow.png'
import armImg from '@/assets/armModel/arm.png'
export default {
    name: 'RoboticArmDT',
	props:{
		j1: Number,
		j2: Number,
		j3: Number
	},
    data: () => ({
        surface: null,
        base: new Image(),
        joint1: new Image(),
        joint2: new Image(),
        joint3: new Image(),
        joint4: new Image(),
        joint5: new Image(),
        joint6: new Image(),
        elbow: new Image(),
        arm: new Image(),
        angle2: 0,
        angle3: 0,
        angle5: 0,
        myTimer: null,
        surfaceContext: null,
        mode: 0,
    }),
    mounted(){
        this.drawCanvas();
    },
    watch: {
		j1: function(val1){
			this.myTimer = setInterval(this.rotateJ1(parseInt(val1)), 50);
		},
		j2: function(val3){
			this.myTimer = setInterval(this.rotateJ3(parseInt(val3)), 50);
			// this.rotateJ3(val3);
		},
		j3: function(val5){
			this.myTimer = setInterval(this.rotateJ5(parseInt(val5)), 50);
		}
		
    },
    methods:{
        drawCanvas(){
            this.surface = this.$refs.myCanvas;
            this.surfaceContext = this.surface.getContext("2d");  
            // let bg = new Image();

            this.drawRobotPart(this.joint1, joint1Img, 30, 200);
            this.drawRobotPart(this.base, baseImg, 15, 300);
            this.drawRobotPart(this.arm, armImg, 40, 60);
            this.drawRobotPart(this.elbow, elbowImg, 150, 60);
            this.drawRobotPart(this.joint2, joint2Img, 25, 125);
            this.drawRobotPart(this.joint3, joint3Img, 115, 45);
            this.drawRobotPart(this.joint4, joint4Img, 220, 61);
            this.drawRobotPart(this.joint5, joint5Img, 235, 52);
            this.drawRobotPart(this.joint6, joint6Img, 260, 65);
        },
        drawRobotPart(partName, imgsrc, dx, dy){
            partName.src= imgsrc;
            partName.onload= ()=> {
                this.surfaceContext.drawImage(partName, dx, dy);
            };
        },
		DegToRad(d) {
			return d * 0.0174532925199432957;
		},
		buttonClicked(){
			this.myTimer = setInterval(this.rotate2, 50);
		},
		buttonReleased(){
			clearInterval(this.myTimer);
		},
		translatejoint(joint, angle, widthX, heightY ){
			this.surfaceContext.translate((joint.width * 0.5)+ widthX, (joint.height * 0.5)+ heightY);
			this.surfaceContext.rotate(this.DegToRad(angle));
			this.surfaceContext.translate((-joint.width * 0.5)- widthX, (-joint.height * 0.5)- heightY);
		},

		rotateJ1(val) {
			
			// Clear the canvas to White
			this.surfaceContext.fillStyle = "#999999";
			this.surfaceContext.fillRect(0, 0, this.surface.width, this.surface.height);
			
			this.surfaceContext.drawImage(this.joint1, 30, 200);
			this.surfaceContext.drawImage(this.base, 15, 300);
			
			this.surfaceContext.save();
			this.translatejoint(this.joint2, this.angle2, 25, 125);
			// this.surfaceContext.translate((this.joint2.width * 0.5)+25, (this.joint2.height * 0.5)+125);
			// this.surfaceContext.rotate(this.DegToRad(this.angle2));
			// this.surfaceContext.translate((-this.joint2.width * 0.5)-25, (-this.joint2.height * 0.5)-125);


			this.surfaceContext.drawImage(this.arm, 40, 60);
			this.surfaceContext.drawImage(this.joint2, 25, 125);
			
			this.translatejoint(this.joint3, this.angle3, 115, 45);
			// this.surfaceContext.translate((this.joint3.width * 0.5)+115, (this.joint3.height * 0.5)+45);
			// this.surfaceContext.rotate(this.DegToRad(this.angle3));
			// this.surfaceContext.translate((-this.joint3.width * 0.5)-115, (-this.joint3.height * 0.5)-45);

			this.surfaceContext.drawImage(this.elbow, 150, 60);
			this.surfaceContext.drawImage(this.joint3, 115, 45);
			this.surfaceContext.drawImage(this.joint4, 220, 61);
			
			this.translatejoint(this.joint5, this.angle5, 235, 52);
			// this.surfaceContext.translate((this.joint5.width * 0.5)+235, (this.joint5.height * 0.5)+52);
			// this.surfaceContext.rotate(this.DegToRad(this.angle5));
			// this.surfaceContext.translate((-this.joint5.width * 0.5)-235, (-this.joint5.height * 0.5)-52);
			
			this.surfaceContext.drawImage(this.joint6, 260, 65);
			this.surfaceContext.drawImage(this.joint5, 235, 52);
			this.surfaceContext.restore();
			this.angle2= val;
	
		},
		rotateJ3(val){

			this.surfaceContext.save();
			this.surfaceContext.fillStyle = "#999999";
			this.surfaceContext.fillRect(0, 0, this.surface.width, this.surface.height);

			this.surfaceContext.drawImage(this.joint1, 30, 200);
			this.surfaceContext.drawImage(this.base, 15, 300);
			
			this.translatejoint(this.joint2, this.angle2, 25, 125);
			// this.surfaceContext.translate((this.joint2.width * 0.5)+25, (this.joint2.height * 0.5)+125)
			// this.surfaceContext.rotate(this.DegToRad(this.angle2));
			// this.surfaceContext.translate((-this.joint2.width * 0.5)-25, (-this.joint2.height * 0.5)-125);
			
			this.surfaceContext.drawImage(this.arm, 40, 60);
			this.surfaceContext.drawImage(this.joint2, 25, 125);
			this.surfaceContext.drawImage(this.joint3, 115, 45);
			
			this.translatejoint(this.joint3, this.angle3, 115, 45);
			// this.surfaceContext.translate((this.joint3.width * 0.5)+115, (this.joint3.height * 0.5)+45);
			// this.surfaceContext.rotate(this.DegToRad(this.angle3));
			// this.surfaceContext.translate((-this.joint3.width * 0.5)-115, (-this.joint3.height * 0.5)-45);
			
			this.surfaceContext.drawImage(this.elbow, 150, 60);
			this.surfaceContext.drawImage(this.joint4, 220, 61);
			this.surfaceContext.drawImage(this.joint3, 115, 45);
			
			this.translatejoint(this.joint5, this.angle5, 235, 52);
			// this.surfaceContext.translate((this.joint5.width * 0.5)+235, (this.joint5.height * 0.5)+52);
			// this.surfaceContext.rotate(this.DegToRad(this.angle5));
			// this.surfaceContext.translate((-this.joint5.width * 0.5)-235, (-this.joint5.height * 0.5)-52);
			
			this.surfaceContext.drawImage(this.joint6, 260, 65);
			this.surfaceContext.drawImage(this.joint5, 235, 52);

			this.surfaceContext.restore();
			
			this.angle3 = val;
		},
		rotateJ5(val){

			this.surfaceContext.save();
			this.surfaceContext.fillStyle = "#999999";
			this.surfaceContext.fillRect(0, 0, this.surface.width, this.surface.height);

			this.surfaceContext.drawImage(this.joint1, 30, 200);
			this.surfaceContext.drawImage(this.base, 15, 300);
			
			this.translatejoint(this.joint2, this.angle2, 25, 125);
			// this.surfaceContext.translate((this.joint2.width * 0.5)+25, (this.joint2.height * 0.5)+125)
			// this.surfaceContext.rotate(this.DegToRad(this.angle2));
			// this.surfaceContext.translate((-this.joint2.width * 0.5)-25, (-this.joint2.height * 0.5)-125);
			
			this.surfaceContext.drawImage(this.arm, 40, 60);
			this.surfaceContext.drawImage(this.joint2, 25, 125);
			this.surfaceContext.drawImage(this.joint3, 115, 45);
			
			this.translatejoint(this.joint3, this.angle3, 115, 45);
			// this.surfaceContext.translate((this.joint3.width * 0.5)+115, (this.joint3.height * 0.5)+45);
			// this.surfaceContext.rotate(this.DegToRad(this.angle3));
			// this.surfaceContext.translate((-this.joint3.width * 0.5)-115, (-this.joint3.height * 0.5)-45);
			
			this.surfaceContext.drawImage(this.elbow, 150, 60);
			this.surfaceContext.drawImage(this.joint4, 220, 61);
			this.surfaceContext.drawImage(this.joint3, 115, 45);
			
			this.translatejoint(this.joint5, this.angle5, 235, 52);
			// this.surfaceContext.translate((this.joint5.width * 0.5)+235, (this.joint5.height * 0.5)+52);
			// this.surfaceContext.rotate(this.DegToRad(this.angle5));
			// this.surfaceContext.translate((-this.joint5.width * 0.5)-235, (-this.joint5.height * 0.5)-52);
			
			this.surfaceContext.drawImage(this.joint6, 260, 65);
			this.surfaceContext.drawImage(this.joint5, 235, 52);
			this.surfaceContext.drawImage(this.joint5, 235, 52);

			this.surfaceContext.restore();
			
			this.angle5 = val;
		}
        
    },
}
</script>

<style>
@import url("../css/style.css");
@import url("../css/960.css");
</style>