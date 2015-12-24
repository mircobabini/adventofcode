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
    return has__repeating_pair( str ) && has__yxy( str );
}
function has__repeating_pair( str ){
    return /([a-z][a-z]).*\1/.test(str);
}
function has__yxy( str ){
    return /([a-z])[a-z]\1/.test(str);
}
