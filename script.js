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
        player.style.top = (playerTop + 3) +"px"; //speed of gravity
    }
},10)

//Jump logic
function jump(){ 
    jumping = 1;
    let jumpCount = 0; 
    var jumpInterval = setInterval(function(){
        var playerTop = 
        parseInt(window.getComputedStyle(player).getPropertyValue("top"));
        //prevent player from going past top of game map
        if(playerTop > 6){
            player.style.top = (playerTop - 5) +"px"; //determines jump sensitivity: less sensity = easier
        }
        //jumpCount determines how long the jump will last for
        //set to <20 = 200ms, make longer for slower jumps
        if (jumpCount > 20){ //after 200ms, exit jump function
            clearInterval(jumpInterval);
            jumping = 0; //to restart gravity
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}