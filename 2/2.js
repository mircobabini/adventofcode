var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, string) {
    // normalize carriage-return for cross-platform compatibility
    string.replace(/[\n\r]/g, '\n');
    var rows = string.split("\n");

    var row, row_index;
    var abc = [];
    var feets_of_paper = 0;
    for (row_index in rows) {
        row = rows[row_index];
        abc = row.split('x').map(returnInt);
        
        var a = abc[0]
          , b = abc[1]
          , c = abc[2];
          
        feets_of_paper += a*b * 2;
        feets_of_paper += b*c * 2;
        feets_of_paper += a*c * 2;
        feets_of_paper += Math.min( a*b, b*c, a*c );
    }
    
    console.log( feets_of_paper );
    
    feets_of_paper = 0;
    for (row_index in rows){
        row = rows[row_index]; // 29x13x26
        abc = row.split('x').map(returnInt); // abc = [29, 13, 26]
        
        var a = abc[0]  // 29
          , b = abc[1]  // 13
          , c = abc[2]; // 26
          
        var wrap = Math.min( (a+b)*2, (b+c)*2, (a+c)*2 );
        var bow = a*b*c;
        
        feets_of_paper += wrap + bow;
    }

    console.log( feets_of_paper );
});

function returnInt(element) {
    return parseInt(element, 10);
}

