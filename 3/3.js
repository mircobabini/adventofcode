var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, row) {
    var location = [0, 0];
    var presents_in_house = [];

    // first house, first present
    presents_in_house['0,0'] = 1;

    for( var char_index in row ){
        var char = row[char_index];
        switch( char ){
            case '^':
                location = [ location[0]+1, location[1] ];
                break;
            case '>':
                location = [ location[0], location[1]+1 ];
                break;
            case 'v':
                location = [ location[0]-1, location[1] ];
                break;
            case '<':
                location = [ location[0], location[1]-1 ];
                break;
        }

        var position_as_string = location[0]+','+location[1];
        if( presents_in_house[position_as_string] === undefined ){
            presents_in_house[position_as_string] = 0;
        }
        
        presents_in_house[position_as_string]++;
    }
    
    // how many houses with one present at least
    console.log( Object.keys( presents_in_house ).length );
});

