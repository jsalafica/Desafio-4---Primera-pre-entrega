import { Router } from "express";
import { CartManager } from "../CartManager.js";

const router = Router();
const cartManager = new CartManager("carts.json");

router.route("/").post(async (req, res) => {
  /* crear un nuevo carrito con la siguiente estructura:
      Id:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).
      products: Array que contendrá objetos que representen cada producto
 */
  try {
    let response = await cartManager.addCart();
    res.json({
      message: "carrito agregado",
      data: response,
    });
  } catch (err) {
    console.log(err);
  }
});

router.route("/:cid").get(async (req, res) => {
  res.send(`Estoy en el cid ${req.params.cid}`);
});

router.route("/:cid/products/:pid").post(async (req, res) => {
  res.send(`Estoy en carrito ${req.params.cid} /product/ ${req.params.pid}`);
});

export default router;
