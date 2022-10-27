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

function renderKeywords() {
    const keywordsObj = getKeywords()
    const keywords = Object.keys(keywordsObj)

    let strHTML = ''
    for (var i = 0; i < keywords.length; i++) {
        if (window.innerWidth <= 450) return
        if (window.innerWidth < 1200 && i === 4) break

        strHTML += `<span style="font-size: ${keywordsObj[keywords[i]]}px;"
                          onclick="onSetFilterBy(this.innerText);onAddEntry('${keywords[i]}')">${keywords[i]}
                    </span>`
    }

    document.querySelector('.keywords').innerHTML = strHTML
}

function renderSavedMemes() {
    const memes = getSavedMemes()
    if (!memes) return
    
    let strHTMLs = memes.map(({memeData, memeUri}, idx) => `

            <article onclick="onEditSavedMeme('${idx}')" data-meme="${JSON.stringify(memeData)}">
                <img src="${memeUri}">
            </article>
    `)

    document.querySelector('.saved-memes').innerHTML = strHTMLs.join('')
}

function onSetFilterBy(filterValue) {
    setFilterBy(filterValue)
    renderGallery()
}

function onAddEntry(keyword) {
    addEntry(keyword)
    renderKeywords()
}


function onEditSavedMeme(idx) {
    const memes = getSavedMemes()
    const {memeData} = memes[idx]

    setMeme(memeData)
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