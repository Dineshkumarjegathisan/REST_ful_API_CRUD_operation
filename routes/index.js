const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController.js');

const bookController = BookController ;




//POST
 router.route('/createBook')
 .post(bookController.createBook)

 //GET
 router.route('/getAllBooks/:id?')
 .get(bookController.getAllBooks);

 //UPDATE
 router.route('/stockUpdate/:id')
 .patch(bookController.stockUpdate);

 //DELETE
router.route('/deleteBookById/:id')
.patch(bookController.deleteBookById)

 module.exports = router ;