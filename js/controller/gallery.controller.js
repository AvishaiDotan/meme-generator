'use strict'

function renderGallery() {
    const imgs = getImgs()

    let strHTMLs = imgs.map(({imgIdx}) => `

            <article onclick="onImgSelect(${imgIdx})" class="meme-preview"">
                <img src="/img/meme-imgs (square)/${imgIdx}.jpg" alt="">
            </article>
    `)

    document.querySelector('.gallery').innerHTML = strHTMLs.join('')
}

function renderSavedMemes() {
    const memes = getSavedMemes()
    
    let strHTMLs = memes.map(({memeData, memeUri}) => `

            <article data-meme="${JSON.stringify(memeData)}">
                <img src="${memeUri}">
            </article>
    `)

    document.querySelector('.saved-memes').innerHTML = strHTMLs.join('')

}

function onSetFilterBy(filterValue) {
    setFilterBy(filterValue)
    renderGallery()
}

function onShowEditor() {
    document.querySelector('.canvas-editor-container').classList.remove('hide')
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('.saved-memes').classList.add('hide')
}

function onShowGallery() {
    document.querySelector('.canvas-editor-container').classList.add('hide')
    document.querySelector('.gallery-container').classList.remove('hide')
    document.querySelector('.saved-memes').classList.add('hide')
}

function onShowSavedMemes() {
    renderSavedMemes()
    document.querySelector('.canvas-editor-container').classList.add('hide')
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('.saved-memes').classList.remove('hide')

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