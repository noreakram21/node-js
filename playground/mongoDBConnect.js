// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

// let user = {name: "mark",age: 23};
// let {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) =>{
	if(err){
		return	console.log('Unable to connect to mongo db server');
	}
	console.log('Connected to MongoDb server');

	const db = client.db('TodoApp');

	db.collection('User').find({name:'Mark Aeron Monroy'}).toArray().then((docs) =>{
		console.log('Users');
		console.log(JSON.stringify(docs, undefined , 2));
	}, (err) =>{
		console.log('Unable to fetch todos', err);

	});

	// client.close();

	// 	const db = client.db('TodoApp');

	// db.collection('User').find().count().then((count) =>{
	// 	console.log(`Users count ${count}`);

	// 	// console.log(JSON.stringify(docs, undefined , 2));
	// }, (err) =>{
	// 	console.log('Unable to fetch todos', err);

	// });

	});


	/*insert data to database*/
// 	const db = client.db('TodoApp');
// db.collection('Todos').insertOne({
// 	text: 'Something todo',
// 	completed: false
// }, (err, result) => {
// 	if(err){
// 		return console.log('Unable to insert todo', err);
// 	}

// 	console.log(JSON.stringify(result.ops, undefined , 2));
// });
// 	const db = client.db('TodoApp');
// db.collection('User').insertOne({

// 	name: 'Mark Aeron Monroy',
// 	age: 19,
// 	location: 'Malagasang II-E'
// }, (err, result) => {
// 	if(err){
// 		return console.log('Unable to insert todo', err);
// 	}

// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// });


// 	client.close();
// });