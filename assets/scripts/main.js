// main.js
/* 
Input field that serves as the textual indicator of sound level
    This field is editable - the sound level of the <audio> element should be changed when editing this input field
    When this field is changed, the slider bar should move correspondingly.
    Conversely, whenever the slider bar changes this field should update as well.
    The volume icon should display the correct number of bars based upon this value  (see below for ranges)
Slider that serves visual controller for sound level
    When the slider position changes, the sound level of the <audio> element also changes
    This slider should update position when sound level is changed by the input field
    Again, the volume icon should display the correct number of bars based upon this value (see below for ranges)
Radio that switches between different horn sounds
    3 different options: Air Horn, Car Horn, and Party Horn
    Selecting a radio switch should change the sound that the <audio> element will play
    Selecting a radio switch should also change the large image of what sound will play
Button that plays the horn sound
    Button should be disabled if volume is muted (meaning volume is exactly 0)
    Otherwise, it should play the selected horn sound with the current volume level

*/

//Handling text change
var theVolume = document.getElementById("volume-number");
theVolume.addEventListener('input', changeVol);
function changeVol(){
    theVolume = this.value;
    slider = this.value;
    adjustLevels(theVolume);
 } //end changeVol
 theVolume.addEventListener('input', adjustSlider);


function adjustSlider(){
    slider = theVolume;
}
 /*
// for the play button
var playButton = getElementById("honk-btn");
playButton.addEventListener('click', playSound);
function playSound(){

}

//adjusting the sound/image
var currSound;
var airHorn = getElementById("radio-air-horn");
airHorn.addEventListener('radio', soundPic);

var carHorn = getElementById("radio-car-horn");
carHorn.addEventListener

var partyHorn = getElementById("radio-party-horn");
partyHorn.addEventListener
function soundPic(){

}

*/
//Idea: have event listeners for each?
// On button click, change to that sounds + that picture?


 //adjusting the audio picture
 var volLevel = document.getElementById("volume-image")
 function adjustLevels(volume){
     if(volume >= 67){ // level 3 = 67-100
         volLevel.src ="./assets/media/icons/volume-level-3.svg";
     } else if (volume >=34){  // level 2 = 34-66
        volLevel.src ="./assets/media/icons/volume-level-2.svg";
    } else if (volume >=1) {   // level 1 = 1-33
        volLevel.src ="./assets/media/icons/volume-level-1.svg";
    } else { // Level 0 = 0
        volLevel.src ="./assets/media/icons/volume-level-0.svg";
    }
 }// end adjustLevels()

 // for the slider
    var slider = document.getElementById("volume-slider");
    slider.addEventListener('input', sliderChange);
    function sliderChange(){
        slider = this.value;
        theVolume = this.value;
        adjustLevels(theVolume);
    } // end sliderChange()
    slider.addEventListener('input', adjustText);
    function adjustText(){
        theVolume = slider;
    }
