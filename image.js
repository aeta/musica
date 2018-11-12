async function drawImage(imageObj) {
	var canvas = document.getElementById('myCanvas')
	var context = canvas.getContext('2d')
	var imageX = 0
	var imageY = 0
	var imageWidth = imageObj.width
	var imageHeight = imageObj.height

	context.drawImage(imageObj, imageX, imageY)

	var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight)
	var data = imageData.data

	// iterate over all pixels
	for (var i = 0, n = data.length; i < n; i += 4) {
		if (shouldStop) {
			shouldStop = false
			return 
		}

		const currentRow = Math.floor(Math.floor(i / 4) / imageWidth)
		const currentColumn = Math.floor(i / 4) - currentRow * imageWidth
		console.log(currentRow + ", " + currentColumn)
		context.fillRect(currentColumn, currentRow, 1, 1)

		var red = data[i]
		var green = data[i + 1]
		var blue = data[i + 2]
		var alpha = data[i + 3]

		// console.log(red + ', ' + green + ', ' + blue)

		play(red, green, blue)
		await sleep(25)
	}
}

function drawImageFromURL(url) {
	var imageObj = new Image()
	imageObj.src = url
	imageObj.onload = function() {
		drawImage(this)
	}
}
