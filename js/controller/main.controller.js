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
