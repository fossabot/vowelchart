import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

/*
import VowelChart from './VowelChart'
import VowelPlotter from './VowelPlotter'

window.addEventListener('load', function () {
  const vowelChart = new VowelChart(500)
  const plotter = new VowelPlotter(vowelChart)
  plotter.drawBorder()
})

document.getElementById('download').addEventListener('click', function () {
  this.href = document.getElementById('vowel-chart').toDataURL()
  this.download = 'vowel-chart.png'
}, false)

*/
