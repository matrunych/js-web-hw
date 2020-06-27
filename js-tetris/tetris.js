var playground = createPlayground();

console.log(playground);

// will add object positions to the emply playground array
function renderPositions() {
  objects.forEach( object => {
    object.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  
  console.log('moving down')
  let currentObject = getCurrentObject();

  console.log("Current", currentObject);

  if(lowerBorder(currentObject)){
    currentObject.position.forEach(position => (position[0] > 0 && (position[0] -= 1)))
  console.log(objects)
  

  playground = createPlayground();

  renderPositions()
  renderPlayground()

  }
  else{
    console.log("END")
  }

}

function moveRight(obj) {
  console.log('moving right')
  let currentObject = getCurrentObject();
  console.log(currentObject);


  if(rightBorder(currentObject)){
    currentObject.position.forEach(position => (position[1] < 4 && (position[1] += 1)))
      console.log(objects)

    playground = createPlayground();
    renderPositions()
    renderPlayground()
  }

}

function moveLeft(obj) {
  console.log('moving left')
  let currentObject = getCurrentObject();
  console.log(currentObject);


  if(leftBorder(currentObject)){
    currentObject.position.forEach(position => (position[1] > 0 && (position[1] -= 1)))
  console.log(objects)
  

  playground = createPlayground();


  renderPositions()

  renderPlayground()
  }

  
}

function pauseGame() {
  console.log('pausing the game')
  clearInterval(gameInterval);
  
}



// function createObj() {}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground()

// interval 1 second
var gameInterval = setInterval(() => {
  moveDown();
}, 4000);