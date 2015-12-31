import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(-0));
	t.false(fn(+0));
	t.false(fn(0));
	t.false(fn(-1));
	t.false(fn('0'));
});
