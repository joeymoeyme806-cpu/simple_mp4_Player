const player = document.getElementById('player');  
const speedSlider = document.getElementById('speedSlider');  
const speedValue = document.getElementById('speedValue');  
  
function skip(seconds) {  
  player.currentTime += seconds;  
}  
  
speedSlider.oninput = function() {  
  player.playbackRate = this.value;  
  speedValue.textContent = this.value + "x";  
};  
