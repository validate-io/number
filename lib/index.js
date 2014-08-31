/**
*
*	VALIDATE: number
*
*
*	DESCRIPTION:
*		- Validates if a value is a number.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: isNumber( value )
	*	Validates if a value is a number.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a number
	*/
	function isNumber( value ) {
		return ( typeof value === 'number' && value === value );
	} // end FUNCTION isNumber()


	// EXPORTS //

	module.exports = isNumber;

})();