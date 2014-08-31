var isNumber = require( './../lib' );

console.log( isNumber( 5 ) );
// Returns true

console.log( isNumber( NaN ) );
// Returns false