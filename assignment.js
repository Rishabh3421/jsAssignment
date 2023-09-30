console.log("test");

// ++++++++++++++++++++++ Question 1 ++++++++++++++++++++++
// Write a program to find all pairs of an integer array whose sum is equal to a given number?
// ++++++++++++++++++++++ solution 1 ++++++++++++++++++++++

function findPairsWithSum(arr, targetSum) {
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}


// ++++++++++++++++++++++ Question 2 ++++++++++++++++++++++
// Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// ++++++++++++++++++++++ solution 2 ++++++++++++++++++++++

function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swaping
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

// ++++++++++++++++++++++ Question 3 ++++++++++++++++++++++
// Write a program to check if two strings are a rotation of each other?

// ++++++++++++++++++++++ solution 3 ++++++++++++++++++++++

function areAnagrams(str1, str2) {
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// ++++++++++++++++++++++ Question 4 ++++++++++++++++++++++
// Write a program to print the first non-repeated character from a string?

// ++++++++++++++++++++++ solution 4 ++++++++++++++++++++++

function firstNonRepeatedCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}

// ++++++++++++++++++++++ Question 5 ++++++++++++++++++++++
//  Read about the Tower of Hanoi algorithm. Write a program to implement it.

// ++++++++++++++++++++++ solution 5 ++++++++++++++++++++++

function towerOfHanoi(n, sourceRod, auxiliaryRod, targetRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${sourceRod} to ${targetRod}`);
    return;
  }

  towerOfHanoi(n - 1, sourceRod, targetRod, auxiliaryRod);
  console.log(`Move disk ${n} from ${sourceRod} to ${targetRod}`);
  towerOfHanoi(n - 1, auxiliaryRod, sourceRod, targetRod);
}

// Example:
const numberOfDisks = 3;
towerOfHanoi(numberOfDisks, 'A', 'B', 'C');

// ++++++++++++++++++++++ Question 6 ++++++++++++++++++++++
//  Read about the Tower of Hanoi algorithm. Write a program to implement it.

// ++++++++++++++++++++++ solution 6 ++++++++++++++++++++++

function postfixToPrefix(postfixExpression) {
  const stack = [];
  const operators = "+-*/";

  for (const token of postfixExpression.split(" ")) {
    if (!operators.includes(token)) {
     
      stack.push(token);
    } else {

      const operand2 = stack.pop();
      const operand1 = stack.pop();

      const prefixExpression = token + operand1 + operand2;
      stack.push(prefixExpression);
    }
  }

  return stack[0];
}

// ++++++++++++++++++++++ Question 7 ++++++++++++++++++++++
//  Write a program to convert prefix expression to infix expression.

// ++++++++++++++++++++++ solution 7 ++++++++++++++++++++++

function isOperator(char) {
  return "+-*/".includes(char);
}

function prefixToInfix(prefixExpression) {
  const stack = [];
  const operators = "+-*/";

  for (let i = prefixExpression.length - 1; i >= 0; i--) {
    const char = prefixExpression[i];

    if (!isOperator(char)) {
      stack.push(char);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      
      const infixExpression = `(${operand1}${char}${operand2})`;
      stack.push(infixExpression);
    }
  }

  return stack[0];
}

// Example:
const prefixExpression = "* + 2 3 - 5 4";
const infixExpression = prefixToInfix(prefixExpression);
console.log("Prefix expression:", prefixExpression);
console.log("Infix expression:", infixExpression);

// ++++++++++++++++++++++ Question 8 ++++++++++++++++++++++
// Write a program to check if all the brackets are closed in a given code snippet.

// ++++++++++++++++++++++ solution 8 ++++++++++++++++++++++

function areBracketsBalanced(code) {
  const stack = [];
  const bracketPairs = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (const char of code) {
    if (bracketPairs[char]) {
    
      stack.push(char);
    } else if (Object.values(bracketPairs).includes(char)) {
     
      const lastBracket = stack.pop();
      if (bracketPairs[lastBracket] !== char) {
        return false; 
      }
    }
  }
  return stack.length === 0;
}

// Example:
const codeSnippet = "function foo() { if (x > 0) { return true; } }";
const isBalanced = areBracketsBalanced(codeSnippet);

if (isBalanced) {
  console.log("All brackets are balanced in the code snippet.");
} else {
  console.log("Brackets are not balanced in the code snippet.");
}

// ++++++++++++++++++++++ Question 9 ++++++++++++++++++++++
// Write a program to reverse a stack.

// ++++++++++++++++++++++ solution 9 ++++++++++++++++++++++

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseStack(stack) {
  if (stack.isEmpty()) {
    return;
  }

  const top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

function insertAtBottom(stack, item) {
  if (stack.isEmpty()) {
    stack.push(item);
    return;
  }

  const top = stack.pop();
  insertAtBottom(stack, item);
  stack.push(top);
}

// Example:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack:", stack.items);

reverseStack(stack);

console.log("Reversed Stack:", stack.items);

// ++++++++++++++++++++++ Question 10 ++++++++++++++++++++++
// Write a program to find the smallest number using a stack.

// ++++++++++++++++++++++ solution 10 ++++++++++++++++++++++

class Stack {
  constructor() {
    this.items = [];
    this.minStack = []; /
  }

  push(item) {
    this.items.push(item);

    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedItem = this.items.pop();

    if (poppedItem === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return poppedItem;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

// Example:
const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(8);
stack.push(1);

console.log("Smallest element:", stack.getMin()); // Output: 1

stack.pop();
console.log("Smallest element after popping:", stack.getMin()); // Output: 2



