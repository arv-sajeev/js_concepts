# Handling errors in CBs

The concept of asynchronicity prohibits us from using the usual try catch method of handling errors. 
This is because the callback placed on the message queue will only be executed when the call stack becomes
empty. This means that the execution of the try catch statement will be over before we even execute the callback

As a solution to this we use a convention of passing the first parameter of the function as an error in case there is one
error handling must be explicitly done by the callback function. We set the error to null if there is no error and use the 
the error which is the first parameter in case an error is thrown.

```javascript

function calculate_squares(number,callback)
{
	console.log("Just entered calculate_squares");
	setTimeout(function(){
		console.log("Timeout done");
		// If we screwed up create an error and call our callback with that as first parameter
		if (typeof number !== "number")
		{
			callback(new Error('Argument of type number is expected'));
			return;
		}
		// If everything is fine just pass the error ( which is null ) as first parameter and the result to the callback
		const result = number*number;
		callback(null,result);
	},1000);
	console.log("This shit's async so I'm not waiting");
}

calculate_squares(20,function(err,result)	{
			if (err !== null)
			{
				console.log("Caught error : " + String(err));
				return;
			}
			console.log("The result is :: " + result);
		});
calculate_squares("This is shit",function(err,result)	{
			if (err !== null)
			{
				console.log("Caught error : " + String(err));
				return;
			}
			console.log("The result is :: " + result);
		});
```
