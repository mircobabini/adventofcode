var fs = require('fs');
var crypto = require('crypto');

fs.readFile('input.txt', 'utf-8', function (err, secret) {
    var lowest_positive = 0;
    var lowest_positive_00000, lowest_positive_000000;

    while(true){
        lowest_positive++;
        
        var data = secret + lowest_positive;
        var hash = crypto.createHash('md5').update(data).digest("hex");
        
        if( ! lowest_positive_00000 ){
            if( hash.substr( 0, 5 ) === '00000' ){
                lowest_positive_00000 = lowest_positive;
            }
        }

        if( hash.substr( 0, 6 ) === '000000' ){
            lowest_positive_000000 = lowest_positive;
            break;
        }
    }
    
    console.log( lowest_positive_00000 );
    console.log( lowest_positive_000000 );
});

