'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx




function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    // _addListeners()
}

function renderMeme() {
    drawImg(1)
}

function drawImg(imgIdx) {
    const img = new Image()
    img.src = `/img/meme-imgs (square)/${imgIdx}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawLine('trump')
    

    }
}

function drawLine(txt) {
    gCtx.strokeStyle = "blue";
    gCtx.fillStyle = 'blue'
    gCtx.font = '48px serif';
    gCtx.strokeText(txt, 250, 250);
}



//Handle the listeners
function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}


// Listeners Functions
function onDown(ev) {

}

function onMove(ev) {

}

function onUp(ev) {

}

function onResize() {

}

function onClearCanvas() {
    
}


// Draw Functions

function drawText(nextPos) {

    gCtx.beginPath();

    gCtx.fillText(getRandomLetter(), nextPos.x, nextPos.y);
    gCtx.stroke();
    gCtx.fill();

    gCurrPosition = nextPos
}


// Getters
function getCanvas() {
    return gElCanvas
}

// Setters
function _setCanvasBackground() {

}

function _addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function _getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }

    // CR EXPLAIN
    if (TOUCH_EVS.includes(ev.type)) {
      ev.preventDefault()
      ev = ev.changedTouches[0]

      pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
      }
    }

    return pos
}



