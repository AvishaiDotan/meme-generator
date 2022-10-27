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

function onShowEditor() {
    document.querySelector('.canvas-editor-container').classList.remove('hide')
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('.saved-memes-container').classList.add('hide')
}

function onShowGallery() {
    document.querySelector('.canvas-editor-container').classList.add('hide')
    document.querySelector('.gallery-container').classList.remove('hide')
    document.querySelector('.saved-memes-container').classList.add('hide')
}

function onShowSavedMemes() {
    renderSavedMemes()
    document.querySelector('.canvas-editor-container').classList.add('hide')
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('.saved-memes-container').classList.remove('hide')
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


// Implementation of JoyStick

// var joy = new JoyStick('joyDiv',{
//     // The ID of canvas element
//     title: 'joystick',
//     // width/height
//     width: 100,
//     height: 100,
//     // Internal color of Stick
//     internalFillColor: '#00AA00',
//     // Border width of Stick
//     internalLineWidth: 2,
//     // Border color of Stick
//     internalStrokeColor: '#003300',
//     // External reference circonference width
//     externalLineWidth: 2,
//     //External reference circonference color
//     externalStrokeColor: '#008000',
//     // Sets the behavior of the stick
//     autoReturnToCenter: true
    
// }, function(stickData) {
//     console.log(stickData);
//     gMeme.lines[0].pos.x -= (stickData.xPosition / 50)
//     gMeme.lines[0].pos.y -= (stickData.y / 50)
//     renderMeme()
// });


function onRenderClickEvents() {
    setTimeout(() => {
        const l = document.querySelectorAll('[data-title] a')
        l.forEach(li => li.addEventListener('click', ()=>{onAddEmoji(li)}))
    }, 500)
}

function onToggleModal() {
    const elA = document.querySelectorAll('.main-header nav ul > li a')

    const transitionA =  (elA[0].classList.contains(open)) ? '.3s' : '0.9s'
    const transitionB =  (elA[0].classList.contains(open)) ? '0.9s' : '0.3s'

    elA.forEach(a => {a.classList.toggle('open'); a.style.transition = transitionA})
    
    const elDropdown = document.querySelector('.dropdown')
    elDropdown.style.transition = transitionB
    elDropdown.classList.toggle('open')
}

function onToggleDownloadModal() {
    document.body.classList.toggle('open-modal')
}

function onDownloadMeme(elLink) {
    const meme = getCanvas()
    const imgContent = meme.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}


