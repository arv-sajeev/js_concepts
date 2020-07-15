# The this keyword

This is (pun intended ;)) is supposed to be the most confusing part of JS. So let's go into
the this keyword and it's used.

The this keyword refers to the object that called the function. It's the closest to 
dynamic scoping that JS gets.

## What this is not

* this does not refer to the function itself 
* it is not lexically scoped

This is a run time binding that depends on how the function is invoked. When a function is 
invoked an activation record or execution context is created. This record exists in the 
call stack with info about where the function was called from how function was invoked and 
what parameters were passed etc.
