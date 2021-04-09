import {strict as assert} from 'assert';
import {isEmailValid} from "../is-email-valid.js";

assert(isEmailValid('a'), 'Not an email');
