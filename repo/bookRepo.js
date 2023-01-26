const BookSchema = require('../model/bookSchema.js')

exports.createBook = async (params) =>{
    try{
       // console.log("fffff",params)
        const createData = await BookSchema.create(params)
        return createData ;

    }catch(err){
        throw err ;
    }
}

exports.getAllBooks = async (id)=>{
    try {
        if(id){
        const getBook = await BookSchema.find({bookId:id});
        console.log("@@@",getBook);
        return getBook;
        }
        else{
            const getBook = await BookSchema.find();
            return getBook;
        }
        
    } catch (err) {
        throw err ;        
    }
}

exports.stockUpdate = async (query)=>{
    try {
        const result = await BookSchema.findOneAndUpdate(query[0],query[1]);
        return result ;
        
    } catch (err) {
        throw err ;
        
    }
}

exports.deleteBookById = async (query)=>{
    try {
        //console.log('$$$$$',query);
        const result = await BookSchema.findOneAndUpdate(query[0],query[1]);
        return result ;
        
    } catch (err) {
        console.log(err);
        throw err ;
        
        
    }
}