const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/snehildb")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.error("mongodb failed to connect:", err);
    });

const newSchema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    uname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    r_password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    }
});

const user = mongoose.model("user", newSchema);

module.exports = user;