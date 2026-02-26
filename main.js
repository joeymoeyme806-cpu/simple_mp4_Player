const player = document.getElementById('player');  
const speedSlider = document.getElementById('speedSlider');  
const speedValue = document.getElementById('speedValue');  
const volumeSlider = document.getElementById('volumeSlider');  
const fileInput = document.getElementById('fileInput');  
  
function skip(seconds) {  
  player.currentTime += seconds;  
}  
  
speedSlider.oninput = function() {  
  player.playbackRate = this.value;  
  speedValue.textContent = this.value + "x";  
};  
  
volumeSlider.oninput = function() {  
  player.volume = this.value;  
};  
  
fileInput.onchange = function() {  
  const file = this.files[0];  
  if (file) {  
    const url = URL.createObjectURL(file);  
    player.src = url;  
    player.load();  
    player.play();  
  }  
};  
