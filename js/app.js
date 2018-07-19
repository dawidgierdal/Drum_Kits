
// window.addEventListener("keydown", function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return; //zatrzymuje funkcje przed wlaczeniem wszystkich
//     audio.play();
//     audio.currentTime = 0;//wlaczenie od nowa
//
//     console.log(key);
//
//     key.classList.add("playing");
//     const keys = document.querySelectorAll(".key");
//
//     function removetransition(e) {
//         if (e.propertyName !== 'transform') return; //skipuj jesli to nie trannsform
//         console.log(e.propertyName);
//         this.classList.remove("playing");
//     }
//
//     keys.forEach(key => key.addEventListener("transitionend", removetransition));
//
// });
