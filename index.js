const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter({
  completeHTMLDocument: true
})

// INPUT
let blob = fs.readFileSync('README.md', 'utf8')

// PROCESS + ADD CSS (IN THE BODY, BUT WHATEVER)
blob += ` \n<style>
body {
font-family: sans-serif;
}
</style>`;

// PROCESS + ADD SCRIPTS
blob += ` \n<script>
document.title = 'Michael Gale / Uses';
console.log('hello blorg :)')
</script>`;

console.log(blob);


const html = converter.makeHtml(blob)

// OUTPUT
fs.writeFileSync('uses/index.html', html)
