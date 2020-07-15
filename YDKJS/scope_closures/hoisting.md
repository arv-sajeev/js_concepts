# Chapter 4 Hoisting

While it is true that javascript is an interpreted language that executes the program line
by line. The variable declaration process is done by a sort of JIT compiler and thus this 
leads to some unexpected results. The compiler scans and associates all declaration with
their appropriate scope, so if a declaration exists the variable is visible throughout the
scope it is defined in spite of the declaration coming after the variable has been used.

This process is called hoisting we can consider variable declarations to be all hoisted to 
the top of their respective scopes so code like 

`
	a = 2;
	var a;
	console.log(a);
` 

After compilation and hence hoisting becomes

`
	var a;
	a = 2;
	console.log(a);
`

* hoisting takes place only within the most immediate scope that it is enclosed in
* only the declaration is hoisting, the assignments are left where they were.
* function definitions are hoisted as well and are hoister before variable declarations, note that is is function definition and not declaration
* while duplicate variable declarations are usually simply ignored the function definitions override preceding definitions.

Using weird analogies this is sort of a Egg comes before chicken situation.
