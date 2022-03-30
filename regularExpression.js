/**
 * Brackets, or square brackets [], are patterns that find a range of characters in the string.
 * Expression	Description
[...]	Any of the characters encapsulated in the brackets with ... representing any character or pattern.
[^...]	Not any character encapsulated in the brackets where ... represents any character or pattern. The ^ represents Not.
[0-9]	Any number between 0 and 9
[a-z]	Any character from lowercase letter ‘a’ to lowercase letter ‘z’
[A-Z]	Any character from uppercase letter ‘A’ to uppercase letter ‘Z’
[a-Z]	Any character from lowercase ‘a’ to uppercase ‘z’.

Expression	Description
p+	p should exist one or more times (frequency)
p*	p should exist zero or more times (frequency)
p?	p should exist maximum once (frequency)
p{n}	p should exist in a sequence n times (frequency)
p{m,n}	p should exist in a sequence minimum m times and maximum n times (frequency)
p$	p should exist at the end of the string (positional)
^p	p should exist at the start of the string (positional)

p(?=q)	Assert that p should be immediately be followed by q
p(?!q)	Assert that p should NOT be immediately followed by q
p(?<=q)	Assert that p should immediately be preceded by q
p(?<!q)	Assert that p should NOT immediately be preceded by q

Alphanumeric	Any alphabet or numeric character itself e.g. a is any character which is the letter a
\0	A null character
\t	A tab character
\n	A newline character
\v	A vertical tab character
\f	A form feed character (next page character)
\r	A carriage return character

.	Any single character ([^\n])
\s	A white space character like tab and spaces ([ \n\r\t\f])
\S	Any character which is not a white space character ([^ \n\r\t\f])
\d	Any numeric character ([0-9])
\D	Any non-numeric character ([^0-9])
\w	Any word character ([a-zA-Z0-9_])
\W	Any non-word character ([^a-zA-Z0-9_])
 */



let regEx1 = /[a-b]/;
let regEx2 = RegExp ('[a-b]*');
var regex = /[a-b]/;

//regEx1 = /[a-b]*/i; // Create a regex and assign to regex1
//regEx2 = RegExp('[a-b]*','i'); // Create a regex and assign to regex2
//console.log(regEx1,regEx2); // Print the regex variables

/**
i	Perform case-insensitive matching
g	Perform global matching, find all matches
m	Perform multiline matching, boundaries are set at newlines or carriage return characters rather than start and end of strings
 */


console.log("garima123 follows regex",/[a-b]+/.exec('garima123'));
console.log("123 follows regex",/[0-9]/.test('123'));

//search
let searchString = 'garimaJain';
console.log(searchString.search('ri')); 
console.log(searchString.search(/arima/));
console.log(searchString.search(/ARIMA/i)); //case insesnitive search
console.log(searchString.search(/ARIMA/)); // case sensitive search

console.log(searchString.replace('garima','gaurav'));

//Problem
/**
 * You are given a password variable as an argument, which is assigned to a string representation of the password. Complete function isSafe so that it will confirm if the password meets the following criteria:

Length: The length of the password is greater than or equal to six characters.
Uppercase letter: The password contains at least one uppercase alphabet (A-Z).
Lowercase letter: The password contains at least one lowercase alphabet (a-z).
Numeric digit: The password contains at least one digit (0-9).
Special Character: The password contains at least one special character (any character other than {0-9, a-z, A-Z}).
Given the above factors, use RegExes and its test method to return a boolean if true if the password meets the above criteria. It will return false if it does not.
 */

let isSafe = function(password)
{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{6,}$/; //passwordRegex
    return regex.test(password);
}

var test = [
    "failpassword@1", // should fail (No uppercase)
    "Failpassword2", // should fail (No special character)
    "FAILPASSWORD@3", // should fail (No lowervase)
    "Fp@4", // should fail (length less than 6)
    "PassPassword@1", // should pass
];

test.forEach(x => console.log(x," : ",isSafe(x))); // run isSafe for each value

