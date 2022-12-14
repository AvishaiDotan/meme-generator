'use strict'

const MEME_KEY = 'memeDB'
const MEME_TEXTS = [
    'Picture to sent your girlfriend and say us',
    'NOT',
    'Yes!',
    'Police After Police Before',
    'Your Mama has',
    'TV in the 90\'s',
    'TV in the 60\'s',
    'Real Sports Fan',
    'Real Stupid Joke When tailed To YOUR father',
    'Israel VS World',
    'Mama and Baby Having Fun',
    'Mama and Cola Having Fun',
]

const gSavedMemes = loadFromStorage(MEME_KEY) || []
let gMeme
let gUploadImg

_createLines()


function addLine(txt) {
    if (!gMeme.selectedLineIdx === -1) return

    gMeme.lines.push(
        {
            txt,
            fontSize: 20,
            align: '',
            color: 'red',
            strokeColor: 'black',
            font: 'impact',
            pos: {},
            isDragged: false,
        }
    )
}

function addEmoji(emoji) {
    gMeme.lines.push(
        {
            txt: emoji,
            fontSize: 20,
            align: '',
            color: 'white',
            strokeColor: 'black',
            font: 'impact',
            pos: {x: getRandomIntInclusive(150, 350), y: getRandomIntInclusive(150, 350)},
            isDragged: false,
        })
    
}

function switchLine() {
    if (!gMeme.lines.length) return
    if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx = -1

    gMeme.selectedLineIdx++
}

function generateRandomMeme() {

    const imgIdx = getRandomImageIdx()
    const linesAmount = getRandomIntInclusive(1, 2)
    const fontSize = getRandomIntInclusive(12, 50)
    const textColor = getRandomColor()
    const strokeColor = getRandomColor()

    const lines = []
    for (let i = 0; i < linesAmount; i++) {
        lines.push({
            txt: getRandomMemeText(),
            fontSize,
            align: '',
            color: textColor,
            strokeColor,
            font: 'impact',
            pos: {},

        })

    }

    gMeme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines,
    }
}

function saveMeme() {
    const canvas = getCanvas()
    const memeUri = canvas.toDataURL();

    gSavedMemes.push({
        memeData: gMeme,
        memeUri,
    })

    _saveMemeToStorage()
}

function deleteLine() {
    const lineIdx = getSelectedLineIdx()
    if (lineIdx < 0) return 

    gMeme.lines.splice(lineIdx, 1)
    gMeme.selectedLineIdx = -1
}

function moveLine(diff) {
    const line = getSelectedLine()
    if (!line) return

    line.pos.y += +diff
}

// Getters
function getMeme() {
    return gMeme
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getSavedMemes() {
    return loadFromStorage(MEME_KEY)
}

function getItemIdxByPos(pos) {
    return gMeme.lines.findIndex((line) => {
            return ((pos.x + 20) > line.pos.x && (pos.x - 20) < (line.pos.x + line.size.width) &&
            (pos.y + 20) > line.pos.y - line.size.height && (pos.y - 20) < (line.pos.y))
    })
    // for (let i = 0; i < gMeme.lines.length; i++) {

    //     const line = gMeme.lines[i]
    //     const isOnCorner = ((pos.x > (line.pos.x + line.size.width + 10)) &&
    //                         (pos.x < (line.pos.x + line.size.width + 20)) &&
    //                         (pos.y > line.pos.y - 60 && pos.y < line.pos.y + 60))

    //     const isOnLine = ((pos.x + 20) > line.pos.x &&
    //                     (pos.x - 20) < (line.pos.x + line.size.width) 
    //                     && (pos.y + 20) > line.pos.y - line.size.height 
    //                     && (pos.y - 20) < (line.pos.y))

    //     return {idx: i, prop: {isOnLine, isOnCorner}}
}


function getLineByIdx(idx) {
    return gMeme.lines[idx]
}

function getUploadedImage() {
    return gUploadImg
}


//Setters 
function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
}

function setLineTxt(txt) {
    const line = getSelectedLine()
    if (line) line.txt = txt   
}

function setLineColor(color) {
    const line = getSelectedLine()
    if (line) line.color = color
}

function setFontSize(diff) {
    const line = getSelectedLine()
    if (!line) return

    const updatedSize = line.fontSize + diff
    if (updatedSize < 12 || updatedSize > 50) return

    line.fontSize = updatedSize
}

function setFont(font) {
    const line = getSelectedLine()
    if (!line) return

    line.font = font
}

function setLinePos(lineIdx, x, y) {
    const line = getLineByIdx(lineIdx)
    line.pos = {x, y}
}

function setLineSize(lineIdx, width, height) {
    const line = getLineByIdx(lineIdx)
    if (line) line.size = {width, height}
    
}

function setSelectedItem(itemIdx) {
    gMeme.selectedLineIdx = itemIdx
}

function setDraggedItem(itemIdx, state) {
    const line = getLineByIdx(itemIdx)
    line.isDragged = state
}

function setLineAlignment(pos) {
    const line = getSelectedLine()
    if (!line) return

    line.align = pos
}

function setStrokeColor(color) {
    const line = getSelectedLine()
    if (!line) return

    line.strokeColor = color
}

function setUploadedImage(img) {
    gMeme.selectedImgId = -1
    gUploadImg = img
}

function setMeme(meme) {
    gMeme = meme
}



// Private Fucntions
function _saveMemeToStorage() {
    saveToStorage(MEME_KEY, gSavedMemes)
}

function _createLines() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Edit Text',
                fontSize: 20,
                align: '',
                color: 'white',
                strokeColor: 'black',
                font: 'impact',
                pos: {},
                isDragged: false,
            },
            {
                txt: 'Edit Text',
                fontSize: 20,
                align: '',
                color: 'white',
                strokeColor: 'black',
                font: 'impact',
                pos: {},
                isDragged: false,
            }
        ],
    }
}

function getRandomMemeText() {
    return MEME_TEXTS[getRandomIntInclusive(0, MEME_TEXTS.length - 1)]
}
