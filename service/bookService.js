const BookRepo = require ('../repo/bookRepo.js');
const errorCode = require('../errorCode')

exports.createBook = async (params)=>{
    try {
        const result = await BookRepo.createBook(params)
        return errorCode.CREATE_SUCESS ;
        
    } catch (err) {
        throw err ;
    }
}

exports.getAllBooks = async (id)=>{
    try {
        const result = await BookRepo.getAllBooks(id);
        console.log(">>>>>>>",result);
        if(result === null){
            const result = await BookRepo.getAllBooks(id);
            return errorCode.USER_ID_NOT_FOUND_ERROR;
        }
        else{

            return result ;        
    }   
    } catch (err) {
        throw err ;
    }
}

exports.stockUpdate = async(id,stock)=>{
    try {
            const query = [{bookId:id},{inStock:stock}]
             const result = await BookRepo.stockUpdate(query)

            if(result!==null)
        {
            if(isNaN(parseInt(stock)) && stock!=="")
            {
                let result=await BookRepo.stockUpdate({inStock:stock});
                return errorCode.UPDATE_SUCESS;
            }
            else if(stock==="" || stock === null ||stock===undefined || !isNaN(parseInt(stock)))
            {
                let result=await BookRepo.stockUpdate({inStock:stock});
                return errorCode.EMPTY_FIELD_ERROR;
            }
        }
        else
        {
            let result=await BookRepo.stockUpdate({inStock:stock});
            return errorCode.USER_ID_NOT_FOUND_ERROR;
        } 
    
    } catch (err) {
        throw err ;
    }
}

exports.deleteBookById = async (id)=>{

    try {
        //console.log("@@@@@@",id);
     const query = [{bookId:id},{isDeleted:true}]
    const result = await BookRepo.deleteBookById(query);
    //console.log("@@@",result);
    if(result === null){
        const result = await BookRepo.deleteBookById(id)
        return errorCode.USER_ID_NOT_FOUND_ERROR;
    }
    else{
        return errorCode.DELETE_SUCESS;
    }
       
    } catch (err) {
        throw err ;
        
    }

}