/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  // implement me!
  // use the comments below to guide you!
  
  const top = positionToInteger(rock.style.top);

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);

    // FIXME: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left);

    // FIXME: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = rockLeftEdge + 20;

    if (rockLeftEdge < dodgerLeftEdge && rockRightEdge > dodgerLeftEdge) 
    
    
    /** false
     *   if (rockLeftEdge < dodgerLeftEdge && rockRightEdge > dodgerLeftEdge ||
        rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge ||
        rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerRightEdge) 
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge
               */
    {
      return true
    }
  else if (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) {
    return true
  }
   else if (rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerRightEdge) {
    return true
  }
  }
  else {
    return false;
  }
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  // Hmmm, why would we have used `var` here?
  var top = 0

  rock.style.top = top

  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
 GAME.appendChild(rock);

  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
   
  var mRock = document.getElementsByClassName('rock');
  //  might not have to call mRock
  function moveRock(mRock) {
  var tops = 0;
  var drop = positionToInteger(mRock.style.top);
   // mRock.style.top =`${drop += 2}px`;
    // implement me!
    // (use the comments below to guide you!)
    /**
     * If a rock collides with the DODGER,
     * we should call endGame()
     */
  if (checkCollision(mRock) === true) {
  
    endGame();
    
  }
        function stepD() { 
          
        mRock.style.top =`${drop += 2}px`;
        
        if (drop < GAME_HEIGHT) {
         
          window.requestAnimationFrame(stepD);
        }
            
        if (drop >= 400) {
          mRock.remove(mRock);
        }
       
        }
   
     window.requestAnimationFrame(stepD);
        
    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */
    
    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */
  }
for (let i = 0; i < mRock.length; i++) {

   // mRock[i].addEventListener('animationstart', moveRock(mRock[i]))
            moveRock(mRock[i]);
      }
      
  // We should kick of the animation of the rock around here
  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
  
     ROCKS.push(rock);

  // Finally, return the rock element you've created
     return rock;

}
/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 *  test: clearInterval(gameInterval);
 */
function endGame() {
 
 var ends = document.getElementById('game');
 var rocks = document.getElementsByClassName('rock')
 
  clearInterval(gameInterval);
  
  // loop through the rocks by looping through an array (need to use .remove())
  for (i = 0; i < rocks.length; i++) {
    if (rocks.length > 0) {
      rocks[i].remove();
    }
  }
  // for (rocks in ends) {
  //   document.game.rocks.remove();
  // }
//   while (ends.firstChild) {
// ends.removeChild(ends.firstChild);

  ROCKS.length=0;
  alert("YOU LOSE!");
}

function moveDodger(e) {

 // window.addEventListener('keydown', function(e) {
    
    
  if(e.which === RIGHT_ARROW) {
     moveDodgerRight();
     e.preventDefault();
     e.stopPropagation();  
       }
       
   else if(e.which === LEFT_ARROW) {
     moveDodgerLeft();
     e.preventDefault();
     e.stopPropagation(); 
       }  
  
 
// });
  // implement me!
  /**
   * This function should call `moveDodgerLeft()`
   * if the left arrow is pressed and `moveDodgerRight()`
   * if the right arrow is pressed. (Check the constants
   * we've declared for you above.)
   * And be sure to use the functions declared below!
   */
}

function moveDodgerLeft() {
  var eleRockL = document.getElementById('dodger');
  var newLeft = positionToInteger(eleRockL.style.left);
  
    function stepL() {
      
    if (newLeft > 40) { 
    DODGER.style.left = `${newLeft -= 40}px`;
 }
    }
    window.requestAnimationFrame(stepL);
    
  
  // implement me!
  /**
   * This function should move DODGER to the left
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
   
}

function moveDodgerRight() {
 
  var eleRock = document.getElementById('dodger');
  var newRight = positionToInteger(eleRock.style.left);
  
  // implement me!
  /**
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   * var right = 0;
  var eleRock = document.getElementsByClassName('rock')
  var newRight = eleRock.style.left  
   */
 
  function stepR() {
    if (newRight < 360) {
    DODGER.style.left = `${newRight += 40}px`;
    }
    
}
    window.requestAnimationFrame(stepR);
  }
 
/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger);

  START.style.display = 'none';

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000);
   
}
