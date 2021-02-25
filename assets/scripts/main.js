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
Volume icon that change depending on the sound level
    volume-level-3: 67-100
    volume-level-2: 34-66
    volume-level-1: 1-33
    volume-level-0: 0
Change the volume icon depending on different ranges:
Radio that switches between different horn sounds
    3 different options: Air Horn, Car Horn, and Party Horn
    Selecting a radio switch should change the sound that the <audio> element will play
    Selecting a radio switch should also change the large image of what sound will play
Button that plays the horn sound
    Button should be disabled if volume is muted (meaning volume is exactly 0)
    Otherwise, it should play the selected horn sound with the current volume level

*/
/*function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }*/
//Handling text change
var theVolume = document.getElementById("volume-number").value;
theVolume.addEventListener('input', changeVol);
function changeVol(){
    theVolume = this.value;
    //slider = this.value;
    adjustLevels(theVolume);
 } //end changeVol

 var volLevel = document.getElementById("volume-image")
 function adjustLevels(volume){
     //<img id="volume-image" src="./assets/media/icons/volume-level-3.svg" alt="Max Volume">
     if(volume >= 67){
         volLevel.src ="./assets/media/icons/volume-level-3.svg";
     } else if (volume >=34){
        volLevel.src ="./assets/media/icons/volume-level-2.svg";
    } else if (volume >=1) {
        volLevel.src ="./assets/media/icons/volume-level-1.svg";
    } else {
        volLevel.src ="./assets/media/icons/volume-level-0.svg";
    }
 }// end adjustLevels()

 // for the slider
    var slider = document.getElementById("volume-slider");
    slider.addEventListener('range', sliderChange);
    function sliderChange(){
        //theVolume = slider.value;
        //adjustLevels(theVolume);
    } // end sliderChange()

//vid.volume = 0.2;