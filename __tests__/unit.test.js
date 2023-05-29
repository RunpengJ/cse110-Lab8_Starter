// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('Tests for isPhoneNumber(phoneNumber)', () => {
    test('checking if (123)456-7890 is a phone number', () => {
        console.log('checking if (123)456-7890 is a phone number');
        expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
    });
    
    test('checking if (098)765-4321 is a phone number', () => {
        console.log('checking if (098)765-4321 is a phone number');
        expect(functions.isPhoneNumber('(098)765-4321')).toBe(true);
    });
    
    test('checking if 123456 is not a phone number', () => {
        console.log('checking if 123456 is not a phone number');
        expect(functions.isPhoneNumber('1234561')).toBe(false);
    });
    
    test('checking if 1dseftgvfe is not a phone number', () => {
        console.log('checking if 1dseftgvfe is not a phone number');
        expect(functions.isPhoneNumber('1dseftgvfe')).toBe(false);
    });
})

describe('Tests for isEmail(email)', () => {
    test('checking if abcde@ucsd.edu is a valid email', () => {
        console.log('checking if abcde@ucsd.edu is a valid email');
        expect(functions.isEmail('abcde@ucsd.edu')).toBe(true);
    });

    test('checking if abcde@gmail.com is a valid email', () => {
        console.log('checking if abcde@gmail.com is a valid email');
        expect(functions.isEmail('abcde@gmail.com')).toBe(true);
    });

    test('checking if abcde@.gmailcom is not a valid email', () => {
        console.log('checking if abcde@.gmailcom is not a valid email');
        expect(functions.isEmail('abcde@.gmailcom')).toBe(false);
    });

    test('checking if abcdegmail.@com is not a valid email', () => {
        console.log('checking if abcdegmail.@com is not a valid email');
        expect(functions.isEmail('abcdegmail.@com')).toBe(false);
    });
})
/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
describe('Tests for isStrongPassword(password)', () => {
    test('checking if abcde123 is a strong password', () => {
        console.log('checking if abcde123 is a strong password');
        expect(functions.isStrongPassword('abcde123')).toBe(true);
    });

    test('checking if a321_qwert is a strong password', () => {
        console.log('checking if a321_qwert is a strong password');
        expect(functions.isStrongPassword('a321_qwert')).toBe(true);
    });

    test('checking if 111111 is not a strong password', () => {
        console.log('checking if 111111 is not a strong password');
        expect(functions.isStrongPassword('111111')).toBe(false);
    });

    test('checking if 222222 is a strong password', () => {
        console.log('checking if 222222 is not a strong password');
        expect(functions.isStrongPassword('222222')).toBe(false);
    });
})

describe('Tests for isDate(date)', () => {
    test('checking if 12/12/2012 is a valid date', () => {
        expect(functions.isDate('12/12/2012')).toBe(true);
    });

    test('checking if 12/31/2012 is a valid date', () => {
        expect(functions.isDate('12/31/2012')).toBe(true);
    });

    test('checking if 12/353/2012 is not a valid date', () => {
        expect(functions.isDate('12/353/2012')).toBe(false);
    });

    test('checking if 12/12/212 is not a valid date', () => {
        expect(functions.isDate('12/12/212')).toBe(false);
    });

})

describe('Tests for isHexColor(color)', () => {
    test('checking if aaaaaa is a valid corlor', () => {
        expect(functions.isHexColor('aaaaaa')).toBe(true);
    });

    test('checking if ababab is a valid corlor', () => {
        expect(functions.isHexColor('ababab')).toBe(true);
    });

    test('checking if 123221 is not a valid corlor', () => {
        expect(functions.isHexColor('qwer')).toBe(false);
    });

    test('checking if abcder is not a valid corlor', () => {
        expect(functions.isHexColor('abcder')).toBe(false);
    });
})