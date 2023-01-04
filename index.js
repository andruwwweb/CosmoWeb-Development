// let text = document.getElementById('main-text');
// let colors = ['#7577ef', '#80c1b4', '#9475c5', '#7fb636', '#772342', '#dbdbdb', '#ffb84e',];
// let index = 0;
// function changeColor () {
//     text.style.setProperty('color', colors[index++]);
//     index %= colors.length;
// }
// let intervals = setInterval(changeColor, 1000);

//**********************************************/

const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
            clearActiveClasses()

        slide.classList.add("active")
    })
}
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}