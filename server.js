const express = require('express');
const connectDB = require("./src/config/db");
const requestRoutes = require('./src/routes/RequestRoutes'); // تأكد من المسار الصحيح

require('dotenv').config();

const app = express();
const port = process.env.PORT||3000;
app.use(express.json()); // middleware للتحليل

// استدعاء الاتصال عند تشغيل التطبيق
connectDB();
app.use('/api', requestRoutes); // ربط المسارات بالتطبيق

// إعداد المسارات
app.get('/', (req, res) => {
    res.send('hello');
});

// تشغيل السيرفر
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
