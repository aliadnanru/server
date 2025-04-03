const express = require('express');
const {getAllRequest,createRequest} = require("../controllers/RequestControllers");

const router = express.Router();

router.post('/createRequest', createRequest);  // مسار لإنشاء مستخدم جديد
router.get('/request', getAllRequest);  // مسار لإنشاء مستخدم جديد

module.exports = router;
