'use strict'



function onInit() {
    initCanvas()
    renderGallery()
    renderSavedMemes()
}


function onDownloadImg(elLink) {
    const canvas = getCanvas()
    const imgContent = gElCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}

new EmojiPicker({
    trigger: [
        {
          selector: '.picker',
          insertInto: ['.demo'] // '.selector' can be used without array
        },
    ],
    closeButton: true,
});

function onRenderClickEvents() {
    setTimeout(() => {
        const l = document.querySelectorAll('[data-title] a')
        l.forEach(li => li.addEventListener('click', ()=>{onAddEmoji(li)}))
    }, 500)
}
