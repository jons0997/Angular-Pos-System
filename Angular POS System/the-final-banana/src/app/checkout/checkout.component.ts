import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  itemsInCart;
  cartCount = 0;
  cartCost = 0;

  constructor(private itemsService: ItemsService, private cartService: CartServiceService) { }

  getItems(): void {
    this.items = this.itemsService.getItems();
  }
  getItemsInCart(): void {
    this.itemsInCart = this.cartService.getItemsInCart();
    this.cartCount = this.cartService.getCartCount();
    this.cartCost = this.cartService.getCartCost();
    if (this.itemsInCart == null) {
      this.itemsInCart = new Array(this.items.length).fill(0);
    }
    this.cartService.setItemsInCart(this.itemsInCart);
  }

  removeItemFromCart(itemToRemove): void {
    this.cartCount -= this.itemsInCart[itemToRemove];
    this.cartCost -= this.itemsInCart[itemToRemove] * this.items[itemToRemove].cost;
    this.itemsInCart[itemToRemove] = 0;
    this.cartService.setItemsInCart(this.itemsInCart);
    this.cartService.setCartCount(this.cartCount);
    this.cartService.setCartCost(this.cartCost);
  }

  checkout(): void {
    //
    for (var i = 0; i < this.itemsInCart.length; i++) {
      this.items[i].inventory -= this.itemsInCart[i];
      this.removeItemFromCart(i);
    }


  }


  ngOnInit() {
    this.getItems();
    this.getItemsInCart();
    //console.log(this.itemsInCart)
  }

}
