const express = require("express")
const { getPosts } = require("../controllers/post")
const { createPost } = require("../controllers/post")
const { unGet } = require("../controllers/unget")
const { createPostValidator } = require("../validator/post")


const router = express.Router()
router.get("/", getPosts)
router.get("/user", unGet)
router.post("/post", createPostValidator, createPost)

module.exports = router