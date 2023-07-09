import utils from "./utils.js";

export class CartManager {
  constructor(path) {
    this.path = path;
    this.carts = [];
  }
  static correlativoId = 0;

  async addCart() {
    try {
      let data = await utils.readFile(this.path);
      this.carts = data?.length > 0 ? data : [];
    } catch (err) {
      console.log(err);
    }
    CartManager.correlativoId = this.carts[this.carts.length - 1].id + 1;
    const newCart = {
      id: CartManager.correlativoId,
    };
    this.carts.push(newCart);
    try {
      await utils.writeFile(this.path, this.carts);
      return newCart;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductsByCart(cid) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}

export default { CartManager };
