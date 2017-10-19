var app = function(){
  var canvas = document.querySelector("#main-canvas")
  var stepSizeDisplay = document.querySelector("#step-size")
  var context = canvas.getContext('2d')
  context.strokeStyle = "black"
  context.fillStyle = "white"

  var boundLeft = 0
  var boundRight = 600
  var boundUp = 0
  var boundDown = 400
  var margin = 10

  var posX = 300  // boundLeft+margin
  var posY = 200 //boundDown-margin
  var stepSize = 10

  var drawButton = function(x, y, r){
    context.beginPath()
    context.moveTo(x, y) //+r)
    context.arc(x, y, r, 0, Math.PI*2)
    context.fill()
  }

  var radius = 30
  drawButton(boundLeft+margin+radius, boundDown-margin-radius, radius)
  drawButton(boundRight-margin-radius, boundDown-margin-radius, radius)

  var displayStepSize = function(){
    stepSizeDisplay.innerText = stepSize
  }

  displayStepSize()

  var drawLine = function(dx, dy){
    context.beginPath()
    context.moveTo(posX, posY)
    posX += dx
    posY += dy
    posX<(boundLeft+margin) ? posX=boundLeft+margin : null
    posX>(boundRight-margin) ? posX=boundRight-margin : null
    posY<(boundUp+margin) ? posY=boundUp+margin : null
    posY>(boundDown-margin) ? posY=boundDown-margin : null
    context.lineTo(posX, posY)
    context.stroke()
  }

  var clearCanvas = function(){
    context.clearRect(boundLeft, boundUp, boundRight-boundLeft, boundDown-boundUp)
  }

  window.addEventListener('keydown', function(event){
    var code = event.code
    console.log(code)
    switch(code){
      case "ArrowUp":
        drawLine(0, -stepSize)
        break
      case "ArrowDown":
        drawLine(0, +stepSize)
        break
      case "ArrowLeft":
      case "KeyT":
        drawLine(-stepSize, 0)
        break
      case "ArrowRight":
      case "KeyU":
        drawLine(stepSize, 0)
        break
      case "Digit6":
        drawLine(-0.5*stepSize, -0.866*stepSize)
        break
      case "Digit7":
        drawLine(0.5*stepSize, -0.866*stepSize)
        break
      case "KeyG":
        drawLine(-0.5*stepSize, 0.866*stepSize)
        break
      case "KeyH":
        drawLine(0.5*stepSize, 0.866*stepSize)
        break
      case "KeyZ":
        stepSize /= 1.5
        displayStepSize()
        break
      case "KeyX":
        stepSize *= 1.5
        displayStepSize()
        break
      case "KeyY":
        var dx = 3 * stepSize * (Math.random()-0.5)
        var dy = 3 * stepSize * (Math.random()-0.5)
        drawLine(dx, dy)
        break
      case "Space":
        clearCanvas()
        break
    }
  })
}

window.addEventListener('load', app)
