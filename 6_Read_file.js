var fs = require('fs');

fs.readFile('Test.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});