'use strict'

const MEME_KEY = 'memeDB'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}




// Getters
function getMeme() {
    return gMeme
}


//Setters 
function setImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
    saveToStorage(MEME_KEY, gMeme)
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
    saveToStorage(MEME_KEY, gMeme)
}

function setLineColor(color) {
    gMeme.lines[0].color = color
    saveToStorage(MEME_KEY, gMeme)
}


// Private Fucntions
function _saveMemeToStorage() {
    saveToStorage(MEME_KEY, gMeme)
}