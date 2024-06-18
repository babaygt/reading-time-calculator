document.addEventListener('DOMContentLoaded', function () {
	const speedSelect = document.getElementById('speed')
	const readingTimeElement = document.getElementById('readingTime')
	const totalWordsElement = document.getElementById('totalWords')

	speedSelect.addEventListener('change', calculateReadingTime)

	function calculateReadingTime() {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id },
					function: getReadingStats,
					args: [speedSelect.value],
				},
				(results) => {
					const result = results[0].result
					readingTimeElement.textContent = result.time
					totalWordsElement.textContent = result.wordCount
				}
			)
		})
	}

	calculateReadingTime()
})

function getReadingStats(speed) {
	const wpm = { slow: 100, average: 200, fast: 300 }
	const text = document.body.innerText
	const wordCount = text.split(/\s+/).length
	const timeInMinutes = wordCount / wpm[speed]
	const minutes = Math.floor(timeInMinutes)
	const seconds = Math.round((timeInMinutes - minutes) * 60)
	const time = `${minutes} min ${seconds} sec`

	return { time, wordCount }
}
