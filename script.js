//console.log("Test");

var wall = document.getElementById("wall");
var gap = document.getElementById("gap");
var jumping = 0;

gap.addEventListener('animationiteration', () => {
    const random = (-((Math.random()*300)+150));
    gap.style.top = random+"px";
});

//create player's movement logic

//Gravity logic
setInterval(function(){
    var playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if (jumping == 0) {
        player.style.top = (playerTop + 3) +"px";
    }
},10)

//Jump logic
function jump(){ 
    jumping = 1;
    let jumpCount = 0; 
    var jumpInterval = setInterval(function(){
        var playerTop = 
        parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        if(playerTop > 6){
            player.style.top = (playerTop - 5) +"px"; //determines jump sensitivity
        }
        if (jumpCount > 20){
            clearInterval(jumpInterval);
            jumping = 0; //to restart gravity
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}