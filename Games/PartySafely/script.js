const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const lessonLinks = document.getElementsByClassName('lesson-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
toggleButton.addEventListener('click', () => {
    lessonLinks.classList.toggle('active')
})

// let audio = document.createElement("AUDIO");

// if (audio.canPlayType("audio/mpeg")) {
//     audio.setAttribute("src","https://www.youtube.com/watch?v=z5Otla5157c");
// } else {
//     audio.setAttribute("src","horse.ogg");
// }

// audio.loop = true;
