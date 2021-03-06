let express = require('express');
let bodyParser = require('body-parser');
let {ObjectID} = require('mongodb');
let {mongoose} =  require('./db/mongoose');
let {Todo} =  require('./model/todo');	

let app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res) =>{
let todo = new Todo({
	text: req.body.text

});
todo.save().then((doc)=>{
res.send(doc);
}, (e) =>{
res.status(400).send(e);
});
});

app.get('/todos', (req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e) =>{	
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req,res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findById(id).then((todo)=>{
		if(!Todo){
			return res.status(404).send();
		}

		res.send({todo});

	}).catch((e)=>{
		res.status(400).send();
	})

});


app.listen(3000,() =>{
	console.log('started on port 3000')
});
module.exports = {app};
// let Todo = mongoose.model('Todo',{
// 	text:{
// 		type: String

// 	},
// 	completed:{
// 		type: Boolean
// 	},
// 	completedAt:{
// 		type: Number
// 	}
// });



// let samp = new Todo({
// 	text: 'test'

// });

// let newSamp = new Todo({
// 	text: 'sample',
// 	completed: true,
// 	completedAt: 2
// });

	// samp.save().then((doc) =>{
	// 	console.log(`save the ${doc}`);
	// }, (e) =>{
	// 	console.log('unable to save');

	// });

// newSamp.save().then((doc) =>{

// 	console.log(JSON.stringify(doc , undefined , 2));
// },(e) =>{

// 	console.log('unable to connect');
// });

