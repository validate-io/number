/* global describe, require, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isNumber = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-number', function tests() {

	it( 'should export a function', function test() {
		expect( isNumber ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isNumber( 5 ) );
		assert.ok( isNumber( new Number( 5 ) ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			true,
			[],
			'5',
			function(){},
			null,
			{},
			NaN,
			new Number( NaN ),
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isNumber( values[i] ) );
		}
	});

});
