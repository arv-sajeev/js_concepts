# Function vs Block scope

## Scope from functions

The most common type of scope in JS that provided by the function or function based scope.
The declarations for a variable are valid throughout the scope they are defined in 
irrespective of where they are declared due to hoisting.

* identifiers are not visible outside their scope
* this is quite important otherwise variables would pollute the global namespace causing collisions
* but even when we wrap variables in functions they introduce the function names to the namespace
* we can declare a function expression by enclosing the declaration in parentheses
* the function name is not bound to the surrounding scope but is bound to the function itself
* this method is used for not polluting the namespace unnecessarily

### Anonymous functions

Function expressions unlike functions don't have to have a name associated with them, this 
while useful to solve the namespace problem, has other problems like
* have no name to display in stack traces for debugging
* problems implementing recursion and other scenarios which require a name
* code becomes tougher to read 

### IIFE (Invoking Function Expressions Immediately)

* this method uses the function expression to declare a function within the scope of the parentheses without polluting the namespace. but with a name
* the function expression is called right where is is declared

## Blocks as scopes

* extending the principle of least privilege this is used to hide variables outside the blocks they are used in.
* variables can be block scoped in for loops
* using the `with` keyword
* variables in the catch statement of try, catch are block scoped to the catch statements

### Using let

From ES6 onwards a new keyword let is introduced as another way to declare variables.
It attaches the variable declaration to the scope of the block it is contained in.

* declarations made with the let keyword will not hoist to the entire scope of the block. Such declarations will not exist till the declaration statement.
* this is also very useful for garbage collection since variables are cleared up after their scope is exited

### Using const

In addition to let ES6 introduces const which also created a block scope based declaration.
But it's value will be constant, any attempt to change or reassign will throw an error.
