const PRODUCT_PURCHASE_INITIAL_STATE = {};
class ProductPurchaseModel {
  #state;

  constructor() {
    this.#state = PRODUCT_PURCHASE_INITIAL_STATE;
  }

  get state() {
    return this.#state;
  }

  setState(newState) {
    this.#state = {
      ...this.#state,
      newState,
    };
  }
  initialize() {
    console.log("hello product purchase view");
  }
}

export default ProductPurchaseModel;