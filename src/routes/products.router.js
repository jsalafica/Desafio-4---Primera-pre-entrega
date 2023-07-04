import { Router } from "express";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));
const products = [];

router
  .route("/")
  .get((req, res) => {
    res.json({ msg: "Muestro todos los productos", products: products });
  })
  .post((req, res) => {
    const { product } = req.body;
    let newProductId;
    if (products.length == 0) {
      newProductId = 1;
    } else {
      newProductId = products[products.length - 1].id + 1;
    }

    // products.push(product);
    res.json({ msg: "Producto agregado correctamente", producto: product });
  });

router
  .route("/:pid")
  .get((req, res) => {
    const { pid } = req.params;
    res.json({ status: 200, data: "Muestro producto con id: " + pid });
  })
  .put((req, res) => {
    const { pid } = req.params;
    res.json({ status: 200, data: "Edito producto con id: " + pid });
  })
  .delete((req, res) => {
    const { pid } = req.params;
    res.json({ status: 200, data: "Borro producto con id: " + pid });
  });

export default router;
