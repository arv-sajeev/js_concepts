#Introduction

## 1. How to work with your code
* you could use the console in your web browser or the cli for your node.js implementation on linux
* ***i/o*** you can use console.log and alert for output and prompt for input
* the built in types for JS are number,string,boolean,undefined,N,null,object,symbol
* you can coerce these values to each other forcibly
* while comparing two values or doing other operation, implicit coercion occurs and this has been known to be one of the most controversial parts of JS for eg the famous 
console.log("ban" + + "na")
* comments in js are just like in c 
* the loops and conditionals look like c as well
## 2. Variables

* JS is a weakly typed language and hence variable can hold any type of value without any enforcement 
* variable names have to start with alphabets or _ and may have numbers, keywords cannot be used
* whenever you use a var to define a variable it's scope will belong to the current function or the global scope 
--- Hoisting, whenever a var appears inside a scope the declaration is taken to belong to the entire scope and accessible everywhere throughout
* when you declare a variable it is available anywhere in that scope and any lower nested scopes as well
* if you try to assign a value that hasn't been declared a variable will be created in the top level global scope
* the `let` keyword is used to declare variables to block scope

* const's hacd been introduced form es6, in which you can only assign values once and they cannot be changed later on 

## 3.Comparing values 

* `==` checks equality with coercion allowed `===` with coercion not allowed
* avoid using `==` when you could have falsey values and empty arrays as value in comparsion
* there are no strict inequality rules though 

## 4. Strict mode
* was added in ES5 to add stricter rules for certain behaviours, it also makes code more optimizable
* this can be used to disallow the auto global variable declaration omitting var
* just reduces bugs since the compiler finds probable places for errors

## 5. Functions as values

* functions are first order values and are basically just objects
* it can be assigned to variables, passed or returned to other functions
* they can be named or anonymous
* named functions retain their name even when assigned to variables 

## 6. IIFE

* short for immediately invoked function expressions
* the function definition is surrounded by parenthesis to prevent it from being treated as a function declaration 
* and then they are called right where they are defined
* it is usually used to scope variabels that won't affect the surrounding code
* they can return values like normal functions do 

## 7. Closure

* is a way to continue to access a function's scope even when the function has finished running
* just about how they work in python in first glance

## 8. this identifier
* it points to object that called the function that is in the current scope
* 
