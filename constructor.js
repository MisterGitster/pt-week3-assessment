/*Create a function called 'person' that accepts a name and an age parameter
  and returns an object with those properties. 
*/

var Person = function(name, age) {
	return greg {
		name: 
	}
};

/* Call your function twice creating to different objects*/

	var peter = new Person('Peter', 29);
	var jimmy = new Person('Jimmy', 89);

   

/* In this scenario, can you add a method to your person functions prototoype and then have
   the objects you create with that function delegate to the person's prototype?*/


//yes because it was created with a constructor


/* Create a Constructor function called 'Person' that accepts a name and an age paramter
    and returns an object with those parameters */

var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

/* Add a property called sayAge to the Person's prototype which says that instances name */

Person.prototype.sayAge = function() {
	console.log(this.name);
};

/* Create two instances of Person and call sayAge with one of those instances.