const jokes = require('./joke.js');

jokes.getOne()
  .then(joke => {
    document.getElementById('joke').innerHTML = joke;
  });