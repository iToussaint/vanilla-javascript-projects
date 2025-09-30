import { createIcons, icons } from "lucide";
createIcons({ icons });


const video = document.getElementById("video");
const range = document.getElementById("range");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const durationMins = document.getElementById("duration-mins");
const durationSecs = document.getElementById("duration-secs");

// Wait until video metadata is loaded (so duration is available)
video.addEventListener("loadedmetadata", () => {
  range.max = Math.floor(video.duration);   // slider max = total seconds
  range.step = 1;                           // step = 1 second

  durationMins.textContent = Math.floor(video.duration / 60);
  let durSecs = Math.floor(video.duration % 60);
  durationSecs.textContent = durSecs < 10 ? `0${durSecs}` : durSecs;
});

// Update slider + timer every second
setInterval(() => {
  range.value = Math.floor(video.currentTime);

  let minsVal = Math.floor(video.currentTime / 60);
  let secsVal = Math.floor(video.currentTime % 60);

  mins.textContent = minsVal < 10 ? `0${minsVal}` : minsVal;
  secs.textContent = secsVal < 10 ? `0${secsVal}` : secsVal;
}, 1000);

// Seek when user moves the slider
range.addEventListener("input", () => {
  video.currentTime = range.value;
});