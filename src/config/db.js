const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://aliadnanidev:qKdzam1T87iKxvFC@cluster0.8kcqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n")
        console.log('MongoDB Connected...');
    } catch (e) {
        console.error('Database connection error:', error);

    }
}
module.exports = connectDB;
