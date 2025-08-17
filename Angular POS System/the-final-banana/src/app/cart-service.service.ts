import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  itemsInCart;
  isCartEmpty = true;
  cartCount = 0;
  cartCost = 0;

  constructor() { }

  getItemsInCart() {
    return this.itemsInCart;
  }
  setItemsInCart(tempItemsInCart) {
    this.itemsInCart = tempItemsInCart;
  }
  getIsCartEmpty() {
    return this.isCartEmpty;
  }
  setIsCartEmpty(tempIsCartEmpty) {
    this.isCartEmpty = tempIsCartEmpty;
  }
  getCartCount() {
    return this.cartCount;
  }
  setCartCount(tempCartCount) {
    this.cartCount = tempCartCount;
  }
  getCartCost() {
    return this.cartCost;
  }
  setCartCost(tempCartCost) {
    this.cartCost = tempCartCost;
  }
}
