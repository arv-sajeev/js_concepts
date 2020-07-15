function module_1(id)
{
	function identify()
	{
		console.log("ID is ::" + id);
	}

	function change_id(new_id)
	{
		id = new_id;
		console.log("ID change to" + id);
	}

	var public_api	=
	{
		identify : identify,
		change_id: change_id
	};

	return public_api;

}

var a = module_1("122345");
a.identify();
a.change_id("22222");
a.identify();
