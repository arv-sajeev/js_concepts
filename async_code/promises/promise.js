
function calculate_square(num)
{
	console.log("In calculate_square with arg :: " + num);
	const promise = new Promise(function(resolve,reject){
						if (typeof num !== "number")
						{
							reject(new Error("Expected argument of type number"));
						}
						else {
							setTimeout(function(){
								const res = num*num;
								resolve(res);
							},1000);
						}
					});

	return promise;
}

calculate_square(2).then(function(value){console.log("Promise fulfilled with value :: " + value);},
			 function(reason){console.log("Promise rejected with reason :: "  + reason)});


calculate_square("hi").then(function(value){console.log("Promise fulfilled with value :: " + value);},
			       function(reason){console.log("Promise rejected with reason :: "  + reason)});
