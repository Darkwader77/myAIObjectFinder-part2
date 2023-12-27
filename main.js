function setup() {
    createCanvas(640, 480).center();
video = createCapture(VIDEO);
video.size(width, height);
video.hide();
}

function start() {
    cocossd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
    let objectName = document.getElementById('objectName').value;
}

function modelLoaded() {
    console.log('Model loaded');
    modelStatus = true;
  }

function draw() {
    image(video, 0, 0, width, height);
  }