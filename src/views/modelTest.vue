<template>
  <div class="modelTest">
    <div id="contentWrapper" class="container_12">
		<div id="teachWrapper" class="grid_6">
			<div id="teachOutside">
				<div id="topContainer">
				<div id="lcdDisplay"><span id="lcdContent"></span></div>
					<div id="eStopContainer">
						<div id="eStop"></div>
					</div>
					
				<div id="modeContainer">
					<div id="jointMode" class="modeButtons"><span>joint</span><div id="jointModeLight" class="ledLight"></div></div>
					<div id="worldMode" class="modeButtons"><span>world</span><div id="worldModeLight" class="ledLight"></div></div>
					<div id="toolMode" class="modeButtons"><span>tool</span><div id="toolModeLight" class="ledLight"></div></div>
				</div>
				
				</div>
				
				<div id="bottomContainer">
				<div id="controlButtonContainer">
				<a href="#" onclick="selectMe('x1'); lcdDisplay();"><div id="x1Button" class="functionButton"><p>X1</p></div></a>
				<a href="#" onclick="selectMe('y2');lcdDisplay();"><div id="y2Button" class="functionButton"><p>Y2</p></div></a>
				<a href="#" onclick="selectMe('z3');lcdDisplay()"><div id="z3Button" class="functionButton"><p>Z3</p></div></a>
				<a href="#" onclick="selectMe('rx');lcdDisplay()"><div id="rx4Button" class="functionButton"><p>RX4</p></div></a>
				<a href="#" onclick="selectMe('ry');lcdDisplay()"><div id="ry5Button" class="functionButton"><p>RY5</p></div></a>
				<a href="#" onclick="selectMe('rz');lcdDisplay()"><div id="rz6Button" class="functionButton"><p>RZ6</p></div></a>
				<a href="#" onclick="selectMe('t1');lcdDisplay()"><div id="t1Button" class="functionButton"><p>T1</p></div></a>		
				<a href="#" onclick="selectMe('step');lcdDisplay()"><div id="stepButton" class="functionButton"><p>STEP</p></div></a>
				</div>
				
				<div id="secondContainer">
				<a href="#" onclick="nextMode();"><div id="manHalt" class="functionButton"><p>MAN<br/>HALT</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>COM<br/>PWR</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>YES</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>9</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>6</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>3</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>DEL</p></div></a>
				</div>
				
				<div id="thirdContainer">
				<a href="#"><div id="" class="functionButton"><p>DIS<br/>PWR</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>NO</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>8</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>5</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>2</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>.</p></div></a>
				</div>
				
				<div id="fourthContainer">
				<a href="#"><div id="" class="functionButton"><p>RUN<br/>HOLD</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>REC<br/>DONE</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>7</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>4</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>1</p></div></a>
				<a href="#"><div id="" class="functionButton"><p>0</p></div></a>
				</div>
			
				<div id="reverseButtons">
					<a href="#" onmousedown="reverse('1')" onmouseup="buttonReleased()"><div id="slow1" class="reverseButton"></div></a>
					<a href="#" onmousedown="reverse('2')" onmouseup="buttonReleased()"><div id="slow2" class="reverseButton"></div></a>
					<a href="#" onmousedown="reverse('3')" onmouseup="buttonReleased()"><div id="slow3" class="reverseButton"></div></a>
					<a href="#" onmousedown="reverse('4')" onmouseup="buttonReleased()"><div id="slow4" class="reverseButton"></div></a>
					<a href="#" onmousedown="reverse('5')" onmouseup="buttonReleased()"><div id="slow5" class="reverseButton"></div></a>
					<span id="minusSign">-</span>
				</div>
				
				<div id="forwardButtons">
					<span id="plusSign">+</span>
					<div id="forwardContainer">
					<a href="#" onmousedown="forward('1')" onmouseup="buttonReleased()"><div id="fast1" class="forwardButton"></div></a>
					<a href="#" onmousedown="forward('2')" onmouseup="buttonReleased()"><div id="fast2" class="forwardButton"></div></a>
					<a href="#" onmousedown="forward('3')" onmouseup="buttonReleased()"><div id="fast3" class="forwardButton"></div></a>
					<a href="#" onmousedown="forward('4')" onmouseup="buttonReleased()"><div id="fast4" class="forwardButton"></div></a>
					<a href="#" onmousedown="forward('5')" onmouseup="buttonReleased()"><div id="fast5" class="forwardButton"></div></a>
					</div>
				</div>
				
				<div id="tempButtons">
			
				<input type="button" value="Rotate Joint 2" onmousedown="buttonClicked()" onmouseup="buttonReleased()" oncontextmenu="return false" />
                <input type="button" value="Reverse Joint 2" onmousedown="buttonClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
                <input type="button" value="Rotate Joint 3" onmousedown="joint3Clicked()" onmouseup="buttonReleased()" oncontextmenu="return false"/>
                <input type="button" value="Reverse Joint 3" onmousedown="joint3ClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
                <input type="button" value="Rotate Joint 5" onmousedown="joint5Clicked()" onmouseup="buttonReleased()" oncontextmenu="return false"/>
                <input type="button" value="Reverse Joint 5" onmousedown="joint5ClickedBack()" onmouseup="buttonReleased()" oncontextmenu="return false"/><br/><br/>
                </div>
                </div>
                <div id="handle">
                <div id="deadManSwitch"></div>
            </div>
            </div>
		</div>
		<div id="robotWrapper" class="grid_6">
			<canvas ref="myCanvas"  width="400" height="400">
				<p>Your Browser Sucks, seriously, change it.</p>
			</canvas><br/>
		</div>
	</div>  
  </div>
</template>
<script>
// import $ from '../scripts/jquery'
import baseImg from '@/assets/armModel/base.png'
// import joint1Img from '@/assets/armModel/joint1.png'
// import joint2Img from '@/assets/armModel/joint2.png'
// import joint3Img from '@/assets/armModel/joint3.png'
// import joint4Img from '@/assets/armModel/joint4.png'
// import joint5Img from '@/assets/armModel/joint5.png'
// import joint6Img from '@/assets/armModel/joint6.png'
// import elbowImg from '@/assets/armModel/elbow.png'
// import armImg from '@/assets/armModel/arm.png'
export default {
    name: 'modelTest',
    data: () => ({
        surface: null,
        base: new Image(),
        // joint1: new Image(),
        // joint2: new Image(),
        // joint3: new Image(),
        // joint4: new Image(),
        // joint5: new Image(),
        // joint6: new Image(),
        // elbow: new Image(),
        // arm: new Image(),
        angle2: 0,
        angle3: 0,
        angle5: 0,
        myTimer: null,
        surfaceContext: null,
        mode: 0,
    }),
    mounted(){
        this.func();
        // this.joint2.src= joint2Img;
        // this.joint3.src= joint3Img;
        // this.joint4.src= joint4Img;
        // this.joint5.src= joint5Img;
        // this.joint6.src= joint6Img;
        // this.joint1.src= joint1Img;
        // this.elbow.src= elbowImg;
        // this.base.src= baseImg;
        // this.arm.src= armImg;
        // this.drawCanvas();
        // this.nextMode();
    },
    created(){

    },
    methods:{
        func(){
            this.surface = this.$refs.myCanvas;
            this.surfaceContext = this.surface.getContext("2d");  
            // let bg = new Image();
            this.base.src= baseImg;
            this.base.onload = ()=> {
                this.surfaceContext.drawImage(this.base, 15, 300);
            };
        },
        drawCanvas() {
            // var c = document.getElementById("myCanvas");
            this.surface = this.$refs.myCanvas;
            if (this.surface.getContext) {
                this.surfaceContext = this.surface.getContext('2d');
                console.log("my canvas");
                this.initializeAll();
                
            }
        },
        initializeAll() {
            // Draws the arm in initial state
            this.surfaceContext = this.surface.getContext('2d');
            // console.log(this.surfaceContext); 
            this.drawJoint1();
            this.drawBase();
            this.drawArm();
            this.drawElbow();
            this.drawJoint6();
            this.drawJoint2();
            this.drawJoint3();
            this.drawJoint4();
            this.drawJoint5();
        },
        drawJoint2(){
            // console.log("drawJoint2:before");
            this.surfaceContext.drawImage(this.joint2, 25, 125);
            // console.log(this.surfaceContext.drawImage(this.joint2, 25, 125));
        },
        drawJoint3(){
            this.surfaceContext.drawImage(this.joint3, 115, 45);
        },
        drawJoint4(){
            this.surfaceContext.drawImage(this.joint4, 220, 61);
        },
        drawJoint5(){
            this.surfaceContext.drawImage(this.joint5, 235, 52);
        },
        drawJoint6(){   
            this.surfaceContext.drawImage(this.joint6, 260, 65);
        },
        drawJoint1(){
            this.surfaceContext.drawImage(this.joint1, 30, 200);
        },
        drawElbow(){
            this.surfaceContext.drawImage(this.elbow, 150, 60);
        },
        drawBase(){
            this.surfaceContext.drawImage(this.base, 15, 300);
        },
        drawArm(){
            this.surfaceContext.drawImage(this.arm, 40, 60);
        },
        // selectMe(whichClass){
        //     $(".functionButton").removeClass("selected");
        //     if (whichClass == 'x1') {   
        //         $("#x1Button").addClass("selected");
        //     }else if(whichClass == 'y2'){
        //         $("#y2Button").addClass("selected");
        //     }else if(whichClass == 'z3'){
        //         $("#z3Button").addClass("selected");
        //     }else if(whichClass == 'rx'){
        //         $("#rx4Button").addClass("selected");
        //     }else if(whichClass == 'ry'){
        //         $("#ry5Button").addClass("selected");
        //     }else if(whichClass == 'rz'){
        //         $("#rz6Button").addClass("selected");
        //     }else if(whichClass == 't1'){
        //         $("#t1Button").addClass("selected");
        //     }else if(whichClass == 'step'){
        //         $("#stepButton").addClass("selected");
        //     }
        // },
        // lcdDisplay(){
        //     this.$("#lcdContent").html('');

        //     if($("#x1Button").hasClass('selected')){
        //         $("#lcdContent").html('Joint 1 Selected');
        //     }else if($("#y2Button").hasClass('selected')){  
        //         $("#lcdContent").html('Joint 2 Selected');
        //     }else if($("#z3Button").hasClass('selected')){
        //         $("#lcdContent").html('Joint 3 Selected');
        //     }else if($("#rx4Button").hasClass('selected')){
        //         $("#lcdContent").html('Joint 4 Selected');
        //     }else if($("#ry5Button").hasClass('selected')){
        //         $("#lcdContent").html('Joint 5 Selected');
        //     }else if($("#rz6Button").hasClass('selected')){
        //         $("#lcdContent").html('Joint 6 Selected');
        //     }
        // },
        // nextMode(){
        //     $(".ledLight").removeClass('on');

        //     if(this.mode == 3){
        //         this.mode = 0;
        //     }
        //     if(this.mode == 0){
        //         $("#jointModeLight").addClass('on');
        //     }else if(this.mode == 1){
        //         $("#worldModeLight").addClass('on');
        //     }else if(this.mode == 2){
        //         $("#toolModeLight").addClass('on');
        //     }
        //     this.mode++;
        // }
        
    },
}
</script>

<style>
@import url("../css/style.css");
@import url("../css/960.css");
</style>