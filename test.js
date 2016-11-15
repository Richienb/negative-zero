import test from 'ava';
import m from './';

test(t => {
	t.true(m(-0));
	t.false(m(+0));
	t.false(m(0));
	t.false(m(-1));
	t.false(m('0'));
});
