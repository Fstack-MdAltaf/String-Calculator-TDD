A simple String Calculator built in JavaScript that performs addition on a string of numbers separated by delimiters like commas and newlines. This project uses Jest for testing.

Features
Returns 0 for an empty string.
Returns the same number for single input.
Returns the sum of numbers in a string separated by commas or newlines.
Supports custom delimiters defined using the // format.
Throws an error when negative numbers are present, listing them in the error message.

Installation
1.Clone the repository:
git clone [<repository-url>](https://github.com/Fstack-MdAltaf/String-Calculator-TDD)
cd String-Calculator-TDD

2.Install the dependencies:
npm install

3.Usage
You can use the add function to calculate the sum of numbers in a string. Here's an example:
const getSumOfStr = require("./index");

console.log(getSumOfStr("1,2,3")); // Output: 6
console.log(getSumOfStr("1\n2,3")); // Output: 6
console.log(getSumOfStr("//;\n1;2")); // Output: 3
console.log(getSumOfStr("")); // Output: 0

Test Cases
The project includes test cases using Jest. To run the tests, execute the following command:
npm run test

Example Test Cases
Here are some test cases to validate the functionality of the String Calculator:

1.Should return 0 for an empty string
expect(getSumOfStr("")).toBe(0);

2.Should return the number itself when a single number is provided
expect(add("2")).toBe(2);

3.Should return the sum of two numbers separated by a comma
expect(add("1,2")).toBe(3);

4.Should handle newlines as delimiters
expect(add("1\n2,3")).toBe(6);

5.Should support custom delimiters specified in the format //{delimiter}\n{numbers}
expect(add("//;\n1;2")).toBe(3);

6.Should throw an error with a list of negative numbers if negatives are present
expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");

File Structure
The project contains the following files:

index.js: The implementation of the String Calculator.
index.test.js: The Jest test cases for the String Calculator.
package.json: Contains the project dependencies and Jest configuration.
