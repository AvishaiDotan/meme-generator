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
    const {selectedImgId, lines} = getMeme()

    // Render Background Image
    const img = new Image()
    img.src = `/img/meme-imgs (square)/${selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        
        // Render Lines:
        drawLine(lines)
    }

}



function drawImg(imgIdx) {

}

function drawLine(lines) {

    lines.forEach(({txt, size, align, color}) => {
        gCtx.strokeStyle = "black";
        gCtx.lineWidth = 3;
        gCtx.fillStyle = color
        gCtx.font = `${size * 2}px Impact`;
        gCtx.fillText(txt, 250, 250);
        gCtx.strokeText(txt, 250, 250);
    })

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




// Getters
function getCanvas() {
    return gElCanvas
}

// Setters
function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onSetLineColor(color) {
    setLineColor(color)
    renderMeme()
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



