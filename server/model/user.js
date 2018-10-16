let mongoose = require('mongoose');

let Todo = mongoose.model('User',{
	name:{
		type: String,
		// required: true
	},
	email:{
		type: String,
		// required:true,
		// trim: true
	}
});

// let user =  new Todo({
// 	name: 'Mark',
// 	email: '                   monroy                    '
	
// });

// // user.save().then((doc) => {
// // 	console.log(JSON.stringify(doc , undefined , 2));
// // },(e) =>{

// // 	console.log(`unalble to connect ${e}`);
// // });

// module.exports = {Todo};