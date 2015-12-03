var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, string) {
    if (err) {
        throw err;
    }

    var char_index = 0
      , floor = 0
      , basement_index = 0;

    // search the final floor
    for( char_index in string ){
        if( string[ char_index ] === '(' ){
            floor++;
        }else{
            floor--;
        }
    }
    console.log( floor );

    // search the basement index
    floor = 0;
    for( char_index in string ){
        if( string[ char_index ] === '(' ){
            floor++;
        }else{
            floor--;
        }
        
        if( floor === -1 ){
            basement_index = parseInt( char_index ) + 1;
            break;
        }
    }
    
    console.log( basement_index );
});