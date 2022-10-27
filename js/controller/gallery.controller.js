'use strict'

function renderGallery() {
    const imgs = getImgs()

    let strHTMLs = imgs.map(({imgIdx}) => `

            <article onclick="onImgSelect(${imgIdx})" class="meme-preview"">
                <img src="./img/meme-imgs (square)/${imgIdx}.jpg" alt="">
            </article>
    `)

    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function renderSavedMemes() {
    const memes = getSavedMemes()
    if (!memes) return
    
    let strHTMLs = memes.map(({memeData, memeUri}, idx) => `

            <article onclick="logThisIdx('${idx}')" data-meme="${JSON.stringify(memeData)}">
                <img src="${memeUri}">
            </article>
    `)

    document.querySelector('.saved-memes').innerHTML = strHTMLs.join('')

}

function onSetFilterBy(filterValue) {
    setFilterBy(filterValue)
    renderGallery()
}

// TODO!
function logThisIdx(idx) {
    const memes = getSavedMemes()
    const {memeData} = memes[idx]
    gMeme = memeData
    renderMeme()
    onShowEditor()

}

function onImgSelect(imgIdx) {
    setImg(imgIdx)
    renderMeme()
    onShowEditor()
}



function onGenerateRandomMeme() {
    generateRandomMeme()
    renderMeme()
    onShowEditor()
}