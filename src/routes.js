const express = require('express')
const PostController = require('./controller/PostController')
const LikeController = require('./controller/LikeController')
const uploadConfig = require('./config/upload')
const multer = require('multer')

const routes = express.Router()

const upload = multer(uploadConfig)

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/posts/:id/like', LikeController.store)

module.exports = routes
