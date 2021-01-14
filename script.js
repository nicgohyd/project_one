//console.log("Test");

var wall = document.getElementById("wall");
var gap = document.getElementById("hole");

gap.addEventListener('animationinteration', () => {
    var random = -((Math.random()*300)+150);
    gap.style.top = random + "px";
})