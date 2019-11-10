var fs = require('fs');

fs.writeFile('test.txt', 'Bu bir deneme yazısıdır.', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Success.');
});