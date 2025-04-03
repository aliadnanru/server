const Request = require('../models/RequestModel');

// إنشاء مستخدم جديد
const createRequest = async (req, res) => {
    try {
        const { title, pcs, description } = req.body;
        // إنشاء مستخدم جديد
        const request = new Request({ title, pcs, description });
        await request.save();

        res.status(201).json({ message: 'تم إنشاء المستخدم بنجاح', request });
    } catch (error) {
        res.status(500).json({ message: 'حدث خطأ أثناء إنشاء المستخدم' });
    }
};
 const getAllRequest = async (req, res) => {
    try {
        // العثور على جميع الطلبات في قاعدة البيانات
        const requests = await Request.find();

        // إرجاع الطلبات مع استجابة ناجحة
        res.status(200).json({ requests });
    } catch (e) {
        // في حال حدوث خطأ، إرجاع استجابة تحتوي على رسالة خطأ
        res.status(500).json({ message: 'حدث خطأ أثناء جلب الطلبات' });
    }
};

module.exports = {createRequest,getAllRequest};
