'use strict'


function uploadImg() {

  const imgDataUrl = gElCanvas.toDataURL("image/jpeg")// Gets the canvas content as an image format

  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    console.log(encodedUploadedImgUrl)
    document.querySelector('.share-container').innerHTML = `
    <a
              href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}"
              title="Share on Facebook" target="_blank" 
              onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');return false;">Share
              <i class="facebook-share fa-brands fa-facebook-f"></i>
          </a>`
  }

  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)
  const XHR = new XMLHttpRequest()

  XHR.onreadystatechange = () => {
      if (XHR.readyState !== XMLHttpRequest.DONE) return
      if (XHR.status !== 200) return console.error('Error uploading image')
      const { responseText: url } = XHR
      onSuccess(url)
  }
  XHR.onerror = (req, ev) => {
      console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
  }
  
  XHR.open('POST', '//ca-upload.com/here/upload.php')
  XHR.send(formData)
}
