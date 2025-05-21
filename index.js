let homeScore = 0
let awayScore = 0

const homeScoreEl = document.getElementById('home-score')
const awayScoreEl = document.getElementById('away-score')

homeScoreEl.textContent = homeScore
awayScoreEl.textContent = awayScore

function add3ToHome() {
  homeScore += 3
  updateDisplay()
}

function add2ToHome() {
  homeScore += 2
  updateDisplay()
}

function add1ToHome() {
  homeScore += 1
  updateDisplay()
}

function add3ToAway() {
  awayScore += 3
  updateDisplay()
}

function add2ToAway() {
  awayScore += 2
  updateDisplay()
}

function add1ToAway() {
  awayScore += 1
  updateDisplay()
}

function updateDisplay() {
  homeScoreEl.textContent = homeScore
  awayScoreEl.textContent = awayScore
}
