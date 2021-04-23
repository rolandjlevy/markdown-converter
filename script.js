const $ = (el) => document.querySelector(el);
const chatWindow = $('#html-output > .content');

$('#markdown-input > textarea').addEventListener('keyup', (e) => {
  chatWindow.innerHTML = marked(e.target.value);
  chatWindow.scrollTop = chatWindow.scrollHeight;
});