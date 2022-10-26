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

function onSwitchSection() {
    document.querySelector('.canvas-editor-container').classList.toggle('swipe')
    document.querySelector('.gallery-container').classList.toggle('swipe')
}

function onImgSelect(imgIdx) {
    setImg(imgIdx)
    renderMeme()
    onSwitchSection()
}

function onGenerateRandomMeme() {
    generateRandomMeme()
    renderMeme()
    onSwitchSection()
}