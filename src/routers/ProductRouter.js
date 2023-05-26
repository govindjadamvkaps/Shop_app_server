import { fetchAllProduct , fetchProductById, saveProduuct } from "../controllers/ProductController.js";
import multer from "multer";
import express from "express";


const ProductRouter = express.Router()

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'public/images')
    },
    filename:function(req,file,cb){
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage:storage})

ProductRouter.post('/products',upload.single('pImage') , saveProduuct)
ProductRouter.get('/products', fetchAllProduct)  

ProductRouter.get('/products/:id', fetchProductById)
export default ProductRouter