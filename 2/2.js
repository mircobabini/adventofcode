var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, string) {
    var rows = string.split("\r\n");

    var row;
    var abc = [];
    var feets_of_paper = 0;
    for (var row_index in rows) {
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
});

function returnInt(element) {
    return parseInt(element, 10);
}
