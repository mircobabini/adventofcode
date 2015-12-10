var fs = require('fs');
var crypto = require('crypto');

fs.readFile('input.txt', 'utf-8', function (err, secret) {
    var lowest_positive = 0;
    
    while(true){
        lowest_positive++;
        
        var data = secret + lowest_positive;
        var hash = crypto.createHash('md5').update(data).digest("hex");
        
        if( hash.substr( 0, 5 ) === '00000' ){
            break;
        }
    }
    
    console.log( lowest_positive );
});

