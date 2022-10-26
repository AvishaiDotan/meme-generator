'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx
let gCurrPosition

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    _addListeners()
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



