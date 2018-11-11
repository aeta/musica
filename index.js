var fileInputElement = document.getElementById('file_input')
var terminateElement = document.getElementById('terminate')

var fileReader = new FileReader()
var shouldStop = false

fileInputElement.onchange = function(e) {
    console.log(fileInputElement.value)
    readURL(fileInputElement)
}

terminateElement.onclick = function(e) {
    console.log("did click")
    shouldStop = true
}

function readURL(input) {
    fileReader.onload = function(e) {
        console.log(e.target.result)
        setImage(e.target.result)
    }
    fileReader.readAsDataURL(input.files[0])
}

function setImage(data) {
    drawImageFromURL(data)
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}