const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/model/user');


User.findById('5bc563e65466ed97f922cd11').then((user) =>{
	if(!user){
		console.log('Unable to find user');
	}
	console.log(JSON.stringify(user, undefined , 2));
}, (e) =>{
		console.log(e);
});


// let id = '5bc5c448a41930f2cd302c5a';

// if(!ObjectID.isValid(id)){
// console.log('not valid');

// }else{

// // Todo.find({
// // 	_id:id
// // }).then((todos)=>{
// // 	console.log('Todos',todos);

// // });

// // Todo.findOne({
// // 	_id:id
// // }).then((todo)=>{
// // 	console.log('Todos',todo);

// // });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 	return	console.log('Id not found');
// 	}
// 	console.log('Todos',todo);

// });
// }