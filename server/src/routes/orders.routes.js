import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl, OrderById, deleteOrderById
} from "../controllers/order.controller.js";
import validateJwt from './middlewares/validate.js'

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", validateJwt,getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/",validateJwt, createOrderCtrl);

ordersRouter.get("/", validateJwt, OrderById);
ordersRouter.delete("/", validateJwt, deleteOrderById)

export { ordersRouter };
