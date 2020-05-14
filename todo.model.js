const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({
    id: Number,
    name: String,
    desc: String,
    priority:String,
    todo_type:String,
    start_date:Date,
    end_date:Date,
    created_by:String,
    asignee:String,
    archieved:Boolean,
    deleted:Boolean
}, { collection: 'todo' });
module.exports = mongoose.model('Todo', Todo);