'use strict'


function onInit() {
    initCanvas()
}


function onDownloadImg(elLink) {
    const canvas = getCanvas()
    const imgContent = gElCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}