# Learning

- web sockets [chat-app-with-socket-io](https://replit.com/@RolandJLevy/chat-app-with-socket-io)
- strapi.io
- React [reactboilerplate](https://www.reactboilerplate.com/)
- TypeScript
- GraphQl
- MongoDb
- Jamstack
- bcrypt
- Deno

# Ideas

- Create a Node repl to convert this README into HTML using [marked](https://www.npmjs.com/package/marked)

```js
app.get('/test', function(req, res) {
  var path = __dirname + '/markdown/test.md';
  fs.readFile(path, 'utf8', function(err, data) {
    if(err) {
      console.log(err);
    }
    res.send(marked(data.toString()));
  });
});
```

- Create a text to speech app, following [this project](https://dev.to/dailydevtips1/vanilla-javascript-speech-to-text-4l35)
- Make something that uploads and manipulates images with filter, [like this](https://repl.it/talk/share/Image-Filter/86886) 