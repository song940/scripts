import { ready, querySelector as $ } from '../../dom.js';
import { requestCamera, requestDisplay, requestMicrophone } from '../../media.js';

// ready(() => {

//   const video = document.querySelector('video');
//   const canvas = document.getElementById("canvas");

//   video.onloadedmetadata = () => video.play();
//   $('#camera').addEventListener('click', async () => {
//     const camera = await requestCamera({ microphonoe: false });
//     console.log('camera:', camera);
//     video.srcObject = camera;
//   });

//   $('#screen').addEventListener('click', async () => {
//     const display = await requestDisplay();
//     console.log(display);
//     video.srcObject = display;
//   });

//   $('#microphone').addEventListener('click', async () => {
//     const audio = new Audio();
//     const context = new AudioContext();
//     const source = context.createMediaElementSource(audio);
//     const analyser = context.createAnalyser();
//     audio.srcObject = await requestMicrophone();

//     const ctx = canvas.getContext("2d");

//     source.connect(analyser);
//     analyser.connect(context.destination);
//     analyser.fftSize = 256;

//     var bufferLength = analyser.frequencyBinCount;
//     var dataArray = new Uint8Array(bufferLength);

//     var WIDTH = canvas.width;
//     var HEIGHT = canvas.height;

//     var barWidth = (WIDTH / bufferLength) * 2.5;
//     var barHeight;

//     (function draw() {
//       let x = 0;

//       analyser.getByteFrequencyData(dataArray);
//       console.log(dataArray);

//       ctx.fillStyle = "#000";
//       ctx.fillRect(0, 0, WIDTH, HEIGHT);

//       for (var i = 0; i < bufferLength; i++) {
//         barHeight = dataArray[i];

//         var r = barHeight + (25 * (i / bufferLength));
//         var g = 250 * (i / bufferLength);
//         var b = 50;

//         ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
//         ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
//         x += barWidth + 1;
//       }
//       requestAnimationFrame(draw);
//     })();
//   });
// });
