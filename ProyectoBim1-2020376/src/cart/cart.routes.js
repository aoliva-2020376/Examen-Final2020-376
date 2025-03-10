import {Router} from "express"
import {  validateJwt } from "../../middlewares/validate.jwt.js"
import { addToCart } from "./cart.controller.js"


const api = Router()

api.post('/', validateJwt, addToCart)

export default api