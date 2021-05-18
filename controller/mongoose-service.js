const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:test@cluster0.3usnk.mongodb.net/AssemStudentRecord?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const studentSchema = new mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: Number,
    age: Number,
    marks: Number,
    course: String
});


const studentModel = mongoose.model("StudentRecord", studentSchema);

module.exports =  studentModel;
