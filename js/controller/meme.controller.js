'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx




function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    updateInputText('Edit Text')
    // _addListeners()
}

function renderMeme() {
    const { selectedImgId, lines } = getMeme()

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

    const validYAxisPos = [100, 400, 200, 300]
    const selectedIdx = getSelectedLineIdx()

    lines.forEach(({ txt, size, align, color }, idx) => {

        gCtx.setLineDash([]);
        gCtx.strokeStyle = "black";
        gCtx.lineWidth = 3;
        gCtx.fillStyle = color
        gCtx.font = `${size * 2}px Impact`;

        const textWidth = gCtx.measureText(txt).width;
        const center = (gElCanvas.width / 2) - (textWidth / 2)

        gCtx.fillText(txt, center, validYAxisPos[idx]);
        gCtx.strokeText(txt, center, validYAxisPos[idx]);

        if (idx === selectedIdx) {
            gCtx.beginPath();
            gCtx.setLineDash([4, 2]);
            gCtx.rect(center - size, validYAxisPos[idx] - size * 2, textWidth + size * 2, size * 2.5);
            gCtx.stroke();
        }
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

// General onclick functions
function onSwitchLine() {
    switchLine()
    const {txt} = getSelectedLine()
    updateInputText(txt)

    renderMeme()
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

function onAddLine() {
    const txt = document.querySelector('[data-action="user-txt-input"]').value

    if (!txt) return

    addLine(txt)
    renderMeme()
}

function onSetLineColor(color) {
    setLineColor(color)
    renderMeme()
}

function onSetFontSize(diff) {
    setFontSize(diff)
    renderMeme()
}

function updateInputText(txt) {
    const elInput = document.querySelector('[data-action="user-txt-input"]')
    elInput.value = txt
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



