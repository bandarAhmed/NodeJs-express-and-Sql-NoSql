const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({
    dest: 'uploads/',
    limits: {fileSize: 1024 * 1024 * 1}
});

router.post("/upload/photo",upload.single('photo'), async (req, res, next) => {
 res.status(200).json({success: true})
})

module.exports = router;
