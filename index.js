var fileInputElement = document.getElementById('file_input')
fileInputElement.onchange = function(e) {
	console.log(fileInputElement.value)
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}
