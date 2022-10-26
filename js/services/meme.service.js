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

let gMeme
_createLines()


function addLine(txt) {
    if (!gMeme.selectedLineIdx === -1) return
    if (gMeme.lines.length >= 4) return


    gMeme.lines.push(
        {
            txt,
            size: 20,
            align: 'left',
            color: 'red',
            strokeColor: 'black', 
            font: 'impact'
        }
    )

    _saveMemeToStorage()
}

function switchLine() {
    if (!gMeme.lines.length) return
    if (gMeme.selectedLineIdx === (gMeme.lines.length - 1)) gMeme.selectedLineIdx = -1

    gMeme.selectedLineIdx++
}

function generateRandomMeme() {

    const imgIdx = getRandomImageIdx()
    const linesAmount = getRandomIntInclusive(1, 2)
    const size = getRandomIntInclusive(12, 50)
    const textColor = getRandomColor()
    const strokeColor = getRandomColor()

    const lines = []
    for (let i = 0; i < linesAmount; i++) {
        lines.push({
            txt: getRandomMemeText(),
            size,
            align: 'center',
            color: textColor,
            strokeColor,
            font: 'impact'
        })
        
    }

    gMeme = {
        selectedImgId: imgIdx,
        selectedLineIdx: 0,
        lines,
    }
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

function _createLines() {
    let meme = loadFromStorage(MEME_KEY)

    if (!meme || !meme.lines.length) {
        meme = {
            selectedImgId: 5,
            selectedLineIdx: 0,
            lines: [
                {
                    txt: 'Edit Text',
                    size: 20,
                    align: 'center',
                    color: 'white',
                    strokeColor: 'black',
                    font: 'impact',
                },
                {
                    txt: 'Edit Text',
                    size: 20,
                    align: 'center',
                    color: 'white',
                    strokeColor: 'black',
                    font: 'impact',
                }
            ]
        }
    }

    gMeme = meme
    _saveMemeToStorage()
}

function getRandomMemeText() {
    return MEME_TEXTS[getRandomIntInclusive(0, MEME_TEXTS.length - 1)]
}
