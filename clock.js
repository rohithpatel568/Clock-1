let hour = document.querySelector(".hour-counter")
let minute = document.querySelector(".minute-counter")
let second = document.querySelector(".second-counter")
updateClock();
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    console.log(h , m, s)
    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
    setTimeout(()=>{
        updateClock();
    },1000)
}