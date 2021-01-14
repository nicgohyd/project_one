//console.log("Test");

var wall = document.getElementById("wall");
var gap = document.getElementById("gap");

gap.addEventListener('animationiteration', () => {
    const random = (-((Math.random()*300)+150));
    gap.style.top = random+"px";
});