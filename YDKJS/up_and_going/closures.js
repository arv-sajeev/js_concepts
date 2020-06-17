function counter_create(x)
{
	console.log("creating a counter :: " + x);
	function count(y)	
	{
		return x + y;
	}
	return count;
}
