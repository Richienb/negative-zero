import test from 'ava';
import negativeZero from '.';

test('main', t => {
	t.true(negativeZero(-0));
	t.false(negativeZero(+0));
	t.false(negativeZero(0));
	t.false(negativeZero(-1));
	t.false(negativeZero('0'));
});
