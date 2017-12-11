//const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//emac6 - destruct object example
var user = {name: 'test', age:33};
var {name} = user;
console.log(name);


//mongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
	if (error) {
		return console.log(`Unable to connect: ${error}`);
	}
	console.log('Connected to mongodb!!');

/*
	db.collection('Todos').insertOne({text: 'Another thing to do', completed: false},
		 (err, res) => {
			 if (err){
				 return console.log('Unable to insert:', err);
			 }
			 console.log(JSON.stringify(res.ops, undefined, 2));
	});
*/

	/*
	db.collection('User').insertOne({name: 'name surname', age: 30, location: 'Philadelphia'},
	 (err, res) => {
		 if (err) {
			 return console.log('unable to insert', err);
		 }
		 //console.log(JSON.stringify(res.ops, undefined, 2));
		 console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));  //to print the id timestamp
	 });
	 */

	/*
	 db.collection('Todos').find().toArray().then((docs) => {
		 console.log('Todos');
		 console.log(JSON.stringify(docs, undefined, 2));
		 }, (err) =>{
			 if (err)
			 	return console.log('error fetching', err);
		 });
		 */

     /* filter by completed
	 db.collection('Todos').find({completed: false}).toArray().then((docs) => {
		 console.log('Todos');
		 console.log(JSON.stringify(docs, undefined, 2));
		 }, (err) =>{
			 if (err)
				return console.log('error fetching', err);
	 });
	 */

	/* filter by id
	 db.collection('Todos').find({_id: new ObjectID('5a2ad594c14b0e1f8432f3fe')}).toArray().then((docs) => {
		 console.log('Todos');
		 console.log(JSON.stringify(docs, undefined, 2));
		 }, (err) =>{
			 if (err)
				return console.log('error fetching', err);
	 });
	 */

	/*
	 db.collection('Todos').find().count().then((count) => {
		 console.log('Todos total:', count);
		 }, (err) =>{
			 if (err)
				return console.log('error fetching', err);
	 });
	 */

	 //deleteMany
	 /*
	 db.collection('Todos').deleteMany({text: 'schedule meeting'}).then((result) => {
	 		 console.log(result);
	 		 }, (err) =>{
	 			 if (err)
	 				return console.log('error deleting', err);
	 });
	 */

	 //deleteOne  -- delete the 1st record to match the criteria
	 /*
	 db.collection('Todos').deleteOne({text: 'schedule meeting'}).then((result) => {
	 	 		 console.log(result);
	 	 		 }, (err) =>{
	 	 			 if (err)
	 	 				return console.log('error deleting', err);
	 });
	 */

	 //findOneAndDelete -- delete the 1st record to match the criteria, but also returns the deleted record
	 /*
	 db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	 	 	 		 console.log(result);
	 	 	 		 }, (err) =>{
	 	 	 			 if (err)
	 	 	 				return console.log('error deleting', err);
	 });
	 */

	 //update
	 /*
	 db.collection('Todos')
	    .findOneAndUpdate({_id: new ObjectID('5a2ad594c14b0e1f8432f3fe')}, {$set: {completed: true}}, {returnOriginal: false})
	 	.then((result) => {console.log(result);
	 	 	 	 		  },
	 	 	  (err) =>{if (err)
	 	 	  			return console.log('error deleting', err);
	 });
	 */

	 //update increment
	 db.collection('User')
	 	    .findOneAndUpdate({_id: new ObjectID('5a2acaa3c0c9e30ea88b8366')}, {$set: {name: 'changed name'}, $inc: {age: 1}}, {returnOriginal: false})
	 	 	.then((result) => {console.log(result);
	 	 	 	 	 		  },
	 	 	 	  (err) =>{if (err)
	 	 	 	  			return console.log('error deleting', err);
	 });



	 db.close();
});

