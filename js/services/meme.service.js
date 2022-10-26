'use strict'

const MEME_KEY = 'memeDB'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Edit Text',
            size: 20,
            align: 'center',
            color: 'white'
        },
        {
            txt: 'Edit Text',
            size: 20,
            align: 'center',
            color: 'white'
        }
    ]
}



function addLine(txt) {
    if (!gMeme.selectedLineIdx === -1) return

    gMeme.lines.push(
        {
            txt,
            size: 20,
            align: 'left',
            color: 'red'
        }
    )

    _saveMemeToStorage()
}

function switchLine() {
    if (!gMeme.lines.length) return
    if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx = -1

    gMeme.selectedLineIdx++
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


//Setters 
function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
    saveToStorage(MEME_KEY, gMeme)
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    saveToStorage(MEME_KEY, gMeme)
}

function setLineColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    saveToStorage(MEME_KEY, gMeme)
}

function setFontSize(diff) {

    const updatedSize = gMeme.lines[gMeme.selectedLineIdx].size + diff
    if (updatedSize < 12 || updatedSize > 50) return

    gMeme.lines[gMeme.selectedLineIdx].size = updatedSize
}


// Private Fucntions
function _saveMemeToStorage() {
    saveToStorage(MEME_KEY, gMeme)
}

