# Markdown Converter

Using the `Marked` compiler to convert markdown to HTML

Unlike HTML, markdown is easy and not overly bloated. The design goal for Markdown's formatting syntax is to make it as readable as possible. A Markdown-formatted document should be publishable as-is, as plain text, without any tags or formatting instructions

### Links 🔗
- [Live demo](https://markdown-converter.rolandjlevy.repl.co/)
- [View source code](https://replit.com/@RolandJLevy/markdown-converter)
- [Github repo](https://github.com/rolandjlevy/markdown-converter)

### Reference
-  [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [The marked compiler](https://github.com/markedjs/marked)

### Just 7 lines of JavaScript
```js
const $ = (el) => document.querySelector(el);
const chatWindow = $('#html-output > .content');

$('#markdown-input > textarea').addEventListener('keyup', (e) => {
  chatWindow.innerHTML = marked(e.target.value);
  chatWindow.scrollTop = chatWindow.scrollHeight;
});
```