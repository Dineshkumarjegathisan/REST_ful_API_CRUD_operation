const BookService = require('../service/bookService.js');
const errorCode = require('../errorCode')
const {v4:uuidv4} = require('uuid')

exports.createBook = async (req,res) =>{
    try {
        req.body.bookId = uuidv4();
        const result = await  BookService.createBook(req.body)
       // console.log("RESULT",result);
        res.status(201).json({
            message:errorCode.CREATE_SUCESS 
        })
        
    } catch (err) {
        res.status(400).json({
            sucess:false
        })
    }
}


exports.getAllBooks = async (req,res)=>{
    try {
        //console.log("getALL>>>>><><><",req.params.id);
        const result = await BookService.getAllBooks(req.params.id);
        res.status(200).json({
            result
        })
        
    } catch (err) {
        res.status(400).json({
            sucess:false
        })
    }
}

exports.stockUpdate = async (req,res)=>{
    try {
        const result = await BookService.stockUpdate(req.params.id, req.body.inStock)
       // console.log("#$#$#$",result);
        res.status(200).json({
            result
        })
        
    } catch (err) {
        res.status(400).json({
            sucess:false
        })
    }

}

exports.deleteBookById= async (req,res)=>{
    try {
        //console.log("######",req.params.id);
        const result = await BookService.deleteBookById(req.params.id)
        res.status(200).json({
            result 
        })
        
    } catch (err) {
        res.status(400).json({
            sucess : false
        })
        
    }
}