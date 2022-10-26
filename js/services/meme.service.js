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
function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}


// Private Fucntions
function _saveMemeToStorage() {
    saveToStorage(MEME_KEY, gMeme)
}