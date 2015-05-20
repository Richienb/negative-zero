'use strict';
var test = require('ava');
var negativeZero = require('./');

test(function (t) {
	t.assert(negativeZero(-0));
	t.assert(!negativeZero(+0));
	t.assert(!negativeZero(0));
	t.assert(!negativeZero(-1));
	t.assert(!negativeZero('0'));
	t.end();
});
