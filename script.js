const song = document.getElementById("song");
const button = document.getElementById("musicButton");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");
const progress = document.getElementById("progressFill");

button.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();
      icon.textContent = "❚❚";
      text.textContent = "пауза";
    } catch (error) {
      text.textContent = "не найден файл song.mp3";
    }
  } else {
    song.pause();
    icon.textContent = "▶";
    text.textContent = "включить музыку";
  }
});

song.addEventListener("timeupdate", () => {
  if (song.duration) {
    progress.style.width = `${(song.currentTime / song.duration) * 100}%`;
  }
});

song.addEventListener("ended", () => {
  icon.textContent = "▶";
  text.textContent = "включить музыку";
  progress.style.width = "0%";
});
