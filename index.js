const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter({
  completeHTMLDocument: true,
  metadata: true
})

// INPUT
const blob = fs.readFileSync('README.md', 'utf8')

// PROCESS
const html = converter.makeHtml(blob)

// OUTPUT
fs.writeFileSync('uses/index.html', html)
