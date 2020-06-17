function print_this()
{
	console.log(this.name);
}

var name = 'global'

var obj1 = 
{
	name:"obj1",
	print_this:print_this

}

var obj2 = 
{
	name:"obj2"
}

print_this();
obj1.print_this();
print_this.call(obj2);
new print_this();
