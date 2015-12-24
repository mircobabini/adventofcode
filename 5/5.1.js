var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function (err, string) {
    // normalize carriage-return for cross-platform compatibility
    string.replace(/[\n\r]/g, "\n");
    var rows = string.split("\n");

    var nice_strings = 0;

    var row, row_index;
    for (row_index in rows) {
        row = rows[row_index];
        
        if( is_string__nice( row ) ){
            nice_strings++;
        }
    }
    
    console.log( nice_strings );
});

function is_string__nice( str ){
    console.log();
    console.log( str );

    if( count_vowels( str ) < 3 ){
        console.log( count_vowels( str )+' vowels only' );
        return false;
    }
    console.log( count_vowels( str )+' vowels' );

    if( ! has_double_letters( str ) ){
        console.log( 'but no double letters' );
        return false;
    }
    console.log( 'has double letters' );
    
    if( has_naughty_substr( str ) ){
        console.log( 'but has a naughty substr' );
        return false;
    }
    
    console.log( 'OK!' );
    return true;
}
function count_vowels( str ){
    var vowels = 'aeiou';
    var vowels_count = 0;

    for( var char_index in str ){
        if( vowels.indexOf( str[char_index] ) >= 0 ){
            vowels_count++;
        }
    }
    
    return vowels_count;
}
function has_double_letters( str ){
    if( str.length < 2 ){
        return false;
    }

    for( var i in str ){
        if( i === 0 ) continue;

        if( str[i] === str[i-1] ){
            return true;
        }
    }
    
    return false;
}
function has_naughty_substr( str ){
    var naughty_strings = [ 'ab', 'cd', 'pq', 'xy' ];
    
    for( var index in naughty_strings ){
        if( str.indexOf( naughty_strings[index] ) >= 0 ){
            return true;
        }
    }
    
    return false;
}