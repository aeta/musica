var context = new AudioContext()

function bleepAtFrequency(freq) {
	console.log(freq)
	o = context.createOscillator()
	o.type = 'square'
	o.frequency.value = freq
	o.start(0)
	o.connect(context.destination)
	o.stop(context.currentTime + 0.05)
}

function play(r, g, b) {
	const average = (findFreq(r) + findFreq(g) + findFreq(b)) / 3
	bleepAtFrequency(average)
}

/**
 * An exponential finding a frequency between 200 - approx. 360.
 * This range is ideal for regular hearing and won't give you cancer like actually
 * @param {number} value: Range of 0-255. 
 */
var findFreq = function(value) {
	return 200 * 2 ** (value / 300)
}
