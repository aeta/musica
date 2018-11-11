var context = new AudioContext()

var bleepAtFrequency = function(freq) {
	console.log(freq)
	o = context.createOscillator()
	o.type = 'square'
	o.frequency.value = freq
	o.start(0)
	o.connect(context.destination)
	o.stop(context.currentTime + 0.1)
}

var play = function(r, g, b) {
	bleepAtFrequency(findAverage(r, g, b))
}

var findAverage = function(r, g, b) {
	return (findFreq(r) + findFreq(g) + findFreq(b)) / 3
}

var findFreq = function(value) {
	return 200 * 2 ** (value / 127)
}
