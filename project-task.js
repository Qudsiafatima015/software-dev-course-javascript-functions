/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================


/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

// Function to greet a user
function greetUser(name) {
   console.log("Welcome, " + name + "!");
}

// Function to calculate the sum of two numbers
   function calculateSum(num1, num2) {
      return num1 + num2;
   }

// Function to calculate the product of two numbers
   function calculateProduct(numA, numB) {
      return numA * numB
   }
// Function to print all names in a list
   function printNames(names) {
      console.log("Names in the list:");
      for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
      }
   }

   //Refactored Code
   greetUser("Alice");
   greetUser("Bob");
   greetUser("Charlie");

   let num1 = 5, num2 = 10;
   let sum = calculateSum(num1, num2);
   console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

   let numA = 5, numB = 10;
   let product = calculateProduct(numA, numB);
   console.log("The product of " + numA + " and " + numB + " is " + product);

   let names = ["Alice", "Bob", "Charlie"];
   printNames(names);