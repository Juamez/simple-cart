import {AddedProduct} from "../types";

export const subtotalSumOperation = (addedProduct: AddedProduct[]): number | undefined => {
  if (addedProduct.length > 0) {
    const re = addedProduct.map((product) => product.price);
    const sum = re.reduce((prev, current) => prev + current);

    return sum;
  }
};
