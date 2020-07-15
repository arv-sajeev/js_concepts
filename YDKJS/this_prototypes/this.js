function identify()
{
	return this.name.toUpperCase();
}

function speak()
{
	var message = "Hello I'm" + identify.call(this) + ", how do you do??"
	console.log(message);
}

var adarsh =
{
	name : "Adarsh"
};

var arvind =
{
	name : "Arvind"
};

console.log(identify.call(adarsh));
console.log(identify.call(arvind));
speak.call(adarsh);
speak.call(arvind);
