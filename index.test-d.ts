import {expectType} from 'tsd';
import negativeZero = require('.');

expectType<boolean>(negativeZero(-0));
