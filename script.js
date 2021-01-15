//console.log("Test");

var wall = document.getElementById("wall");
var gap = document.getElementById("gap");
var jumping = 0;
var scoreCounter = 0;

gap.addEventListener('animationiteration', () => {
    const random = (-((Math.random()*300)+150));
    gap.style.top = random+"px";
    scoreCounter++
});

//create player's movement logic

//Gravity logic
setInterval(function(){
    var playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top")); //get value of player position
    if (jumping == 0) {
        player.style.top = (playerTop + 3) +"px"; //speed of gravity
    }
    var wallLeft = parseInt(window.getComputedStyle(wall).getPropertyValue("left")); //get margin value of left of the wall
    var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top")); //get margin value of top of the gap
    var pTop = -(500-playerTop);
    //crash detection:
    if((playerTop>500) || ((wallLeft<20) && (wallLeft>-50) && ((pTop < gapTop) || (pTop>gapTop+130)))){
        alert("Yikes! Game over. Score = " + scoreCounter);
        player.style.top = 100 + "px"; //reset player
        scoreCounter = 0; //reset score
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
        //create a hangtime after jump for the last 50ms of the 200ms jump
        if((playerTop > 6) && (jumpCount <15)){
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