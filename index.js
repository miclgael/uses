const fs = require('fs')
const showdown = require('showdown')

const converter = new showdown.Converter({
  headerLevelStart: 1
})

const header = fs.readFileSync('template/header.html', 'utf8')
const body   = converter.makeHtml(fs.readFileSync('README.md', 'utf8'))
const footer = fs.readFileSync('template/footer.html', 'utf8')

// Deploy this:
fs.writeFileSync('uses/index.html', header + body + footer)