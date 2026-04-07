// Type 2 Functions

// So with argument/parameter but no return type. 

// function greetByName(name) { // parameter
//     console.log("Hi", name);
// }

// greetByName("Pramod"); // argument
// greetByName("Dipak");
// greetByName("Meeti");
// greetByName("Sangeetha");


// function begger(money) {
//     console.log("Thanks", money);
// }

// let returnMesomething = begger(100);
// console.log(returnMesomething);


// let name1 = greetByName("Sumit");
// console.log(name1);

// "name" and "role" are PARAMETERS (defined in the function)
function greetTester(name, role) {
  console.log(`Hello, ${name}! Your role is: ${role}`);
}

// "Alice" and "QA Engineer" are ARGUMENTS (passed when calling)
greetTester("Alice", "QA Engineer");
// Output: Hello, Alice! Your role is: QA Engineer