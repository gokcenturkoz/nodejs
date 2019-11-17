var fs = require('fs');

fs.open('Test.txt', 'r', function (err, fd) {
    
                            if (err) {
                            return console.error(err);
    }
    
                            var buffr = new Buffer(1024);
    
    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
       
                            if (err) throw err;
            
                            if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }
        
        fs.close(fd, function (err) {
                            if (err) throw err;
        });
    });
});