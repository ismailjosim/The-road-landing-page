const container = document.querySelector('.container');

document.querySelector(".open-navbar-icon").addEventListener('click', () => {
    container.classList.add('change');
})

document.querySelector(".close-navbar-icon").addEventListener('click', () => {
    container.classList.remove('change');
})


const color = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let index = 0;
Array.from(document.querySelectorAll('.nav-link').forEach(item => {
    item.style.cssText = `background-color: ${ color[index++] }`
}))

Array.from(document.querySelectorAll('navigation-button').forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change')
    }
}))
