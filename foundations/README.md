# 1.Introduction 
Javascript is a programming language which along with html and css is one of the backbones of web technologies, it was originally designed by brendan eich and confirm to ECMA standards. They have large number of APIs which support forking with dates,text,regexes,DOM manipulation. They run in Javascript engines which are usually only embedded in web borwsers but of late they have found use in servers and back end using node.js.

## 2. The javascript engine 

The engine is a runtime environment that is provided by the browser like the LVM for Java.The V8 engine for the chrome browser is one of the most popular engines out there, The Engine does does the parsing syntax tree creation and many other jobs Spidermonkey is the one used by mozilla. The language and engines have to follow the ECMAScript standard.
* engines usually convert js to an intermediate bytecode which is then converted to machine code
* engines use JIT compilers to speed up execution and reduce compile time and provide scope for optimisation 
* the jit compiler in v8 is called tubofan 
* Javascript is a garbage collected language and it uses the mark and sweep algorithm that maintains reference counts 
* memory leaks usually happen when we use too many global variables, event listeners
* javascript is considered to be single threaded 
* the javascript runtime provides a web api for dom manipulation and many other functions
* setTImeOut() works by calling the web api then starting a timer in the the js runtime when the timer expires the callback is placed into the callback queue the event loop check if the call stack is empty and only then feeds in the callbacks waiting in the callback queue
* node.js is a js runtime which is the first to use js outside of the browser 

## 3. Execution context and Scope

* the scope in which the code is running is called the execution context and it exists for each function call 
* lexical context is like the location in the code that an execution context belongs to

## 4. Hoisting 

* when a new execution context is encountered  during compile time the variable definitions of the context are hoisted to the top, and the variables are assigned the value undefined
* function definitions are completely hoisted
* function expressions are considered to be variables and hence are declared but not defined so can't be called until they are assigned a function 
* the hoisting process is done by a single pass done to allocate memory 
* variable names are within execution contexts
* we can avoid hoisting by not using var and using let and const

## 5. Function invocation 

* when a function is invoked we create a new execution context and we get a `this` and `arguments` object with it
* arguments are given in a sort of dictionary structure we can convert it to an array using `Array.from(arguments)`
* the spread operator `...args` in js are used for variable args functions and has a length property to access them.

* the scopes chained to function are available in the function object using [[scopes]]
* in js if a function expressions function has a name, the function will be assigned to it own scope within the function and will now be visible outside
* JS uses function scope for var 
* **let** and **const** use block scope

## 6. IIFE or immediately invoked function expression 

* is a common design pattern to organize the namespace
* used before es modules
*  
