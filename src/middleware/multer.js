const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/image');
    },
    filename: (req, file, cb) => {
        const timeStamp = new Date().getTime();
        const fileName = file.originalname;

        cb(null, `${timeStamp}-${fileName}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024 // 1 MB
    }
});

module.exports = upload;