const songs = document.querySelectorAll(".albumTable-song");
let currentAudio = null;

songs.forEach((song) => {
  const playbtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");

  // console.log(pauseBtn, pauseBtn);
  playbtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    audio.play();
    currentAudio = audio;
  });
  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    audio.pause();

    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
