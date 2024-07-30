import express from 'express'
import authMiddleware from '../middleware/auth.js';

import { addToCart,removeFromcart,getCart } from '../controllers/cartcontroller.js'

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromcart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;