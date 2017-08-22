const fetch = require('./main');

fetch("http://dog.ceo/api/breeds/list/all")
    .then(function(answer) {
        console.log(answer);
        process.exit(0);

    }).catch(function(err) {
        console.log(err);
        process.exit(1);
    });