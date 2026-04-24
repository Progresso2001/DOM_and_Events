/*
  4.Touch
    touchstart
    touchmove
    touchend
    touchcancel
*/
const touchArea = document.getElementById('touchArea')
touchArea.addEventListener("touchstart", function(e){
    e.preventDefault();
    touchArea.style.backgroundColor = 'blue';
    touchArea.textContent = "Toque iniciado !";
});

touchArea.addEventListener("touchmove", function(e){
    e.preventDefault();
    touchArea.style.backgroundColor = 'green';
    touchArea.textContent = "Toque movido!";
});

touchArea.addEventListener("touchend", function(e){
    e.preventDefault();
    touchArea.style.backgroundColor = 'gray';
    touchArea.textContent = "Toque final!";
});

touchArea.addEventListener("touchcancel", function(e){
    e.preventDefault();
    touchArea.style.backgroundColor = 'red';
    touchArea.textContent = "Toque cancelado!";
});