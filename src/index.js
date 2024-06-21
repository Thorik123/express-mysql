require('dotenv').config()

const port = process.env.PORT;

const express = require('express');

const userRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');
const multer = require('multer');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use('/assets', express.static('public/image'));

app.use('/users', userRoutes);

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload file berhasil'
    })
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message,
    })
});

app.listen(port, () => {
    console.log(`Server berhasi di running di port ${port}`);
});