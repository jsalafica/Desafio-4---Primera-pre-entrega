import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.send("Estoy en carts");
});

export default router;
