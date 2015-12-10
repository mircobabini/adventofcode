var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, row) {
    var l = [ [0, 0], [0, 0] ]; // l stands for location, in short
    var presents_in_house = [];

    // first house, first present (one by santa, one by robo-santa)
    presents_in_house['0,0'] = 2;

    for(var char_index in row){
        var char = row[char_index];
        var whoami = char_index % 2;

        switch( char ){
            case '^':
                l[whoami] = [ l[whoami][0]+1, l[whoami][1] ];
                break;
            case '>':
                l[whoami] = [ l[whoami][0], l[whoami][1]+1 ];
                break;
            case 'v':
                l[whoami] = [ l[whoami][0]-1, l[whoami][1] ];
                break;
            case '<':
                l[whoami] = [ l[whoami][0], l[whoami][1]-1 ];
                break;
        }

        var position_as_string = l[whoami][0]+','+l[whoami][1];
        if( presents_in_house[position_as_string] === undefined ){
            presents_in_house[position_as_string] = 0;
        }
        
        presents_in_house[position_as_string]++;
    }
    
    // how many houses with one present at least
    console.log( Object.keys( presents_in_house ).length );
});

