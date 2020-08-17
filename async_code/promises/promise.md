# Promises

A promise is a JS object that represents an eventual result of and async action. It can be
returned from the function and can be used as a substitute for the variable. 
Contains to parts -
* Promise status
* Promise value

## States of a promise

A promise can be in 3 possible states.
* The __pending__ state means that the promise hasn't resolve yet and the promise value is undefined for now
* The __fulfilled__ state means the promise has been resolved and it holds a valid value
* The __rejected__ state means some sort of error has occurred and the promise value will be the error or reason

```javascript
	// You can define promises as follows and use the resolve or reject functions to change state and assign value
	const myPromise = new Promise(function(resolve,reject){
		resolve("Value");
	});
```


The states fulfilled and rejected are final states and cannot be changed once resolve or reject is called once.

## The then method

the then method can be used on promises and it takes two arguments
* onFulfilled	-  is executed if the promise is resolved and goes to fulfilled state, the promise value is taken as parameter
* onRejected    -  is executed if the promise is resolved and goes to the rejected state, takes the reason as parameter




