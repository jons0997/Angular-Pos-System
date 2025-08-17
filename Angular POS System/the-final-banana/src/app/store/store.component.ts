import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  items;
  isCartEmpty = true;
  cartCount = 0;
  cartCost = 0;
  itemsInCart = [];
  showCartItems = false;
  buttonName = "Show Cart"

  constructor(private itemsService: ItemsService, private cartService: CartServiceService) { }

  getItemsInCart(): void {
    this.itemsInCart = this.cartService.getItemsInCart();
    this.cartCount = this.cartService.getCartCount();
    this.isCartEmpty = this.cartService.getIsCartEmpty();
    this.cartCost = this.cartService.getCartCost();
    if (this.itemsInCart == null) {
      this.itemsInCart = new Array(this.items.length).fill(0);
    }
    this.cartService.setItemsInCart(this.itemsInCart);
  }

  getItems(): void {
    this.items = this.itemsService.getItems();
  }

  addToCart(currItem): void {
    if (currItem.inventory < this.itemsInCart[currItem.id - 1] + 1) {
      alert("Not enough Inventory");
    } else {
      this.isCartEmpty = false;
      this.cartCount++;
      this.cartCost += currItem.cost;
      this.itemsInCart[currItem.id - 1] += 1;
      this.cartService.setItemsInCart(this.itemsInCart);
      this.cartService.setCartCount(this.cartCount);
      this.cartService.setCartCost(this.cartCost);
      this.cartService.setIsCartEmpty(this.isCartEmpty);
    }
  }

  deleteCart(): void {
    this.itemsInCart = new Array(this.items.length).fill(0);
    this.cartCost = 0;
    this.cartCount = 0;
    this.isCartEmpty = true;
    this.cartService.setItemsInCart(this.itemsInCart);
    this.cartService.setCartCount(this.cartCount);
    this.cartService.setCartCost(this.cartCost);
    this.cartService.setIsCartEmpty(this.isCartEmpty);
  }

  removeItemFromCart(itemToRemove): void {
    this.cartCount -= this.itemsInCart[itemToRemove];
    this.cartCost -= this.itemsInCart[itemToRemove] * this.items[itemToRemove].cost;
    this.itemsInCart[itemToRemove] = 0;
    if (this.cartCount == 0) {
      this.isCartEmpty = true;
    }
    this.cartService.setItemsInCart(this.itemsInCart);
    this.cartService.setCartCount(this.cartCount);
    this.cartService.setCartCost(this.cartCost);
    this.cartService.setIsCartEmpty(this.isCartEmpty);
  }
  toggleCart(): void {
    this.showCartItems = !this.showCartItems;

    if (this.showCartItems)
      this.buttonName = "Hide Cart";
    else
      this.buttonName = "Show Cart";
  }

  ngOnInit(): void {
    this.getItems();
    this.getItemsInCart();
  }

}

/*
Reference: https://www.encodedna.com/angular/how-to-show-hide-or-toggle-elements-in-angular-4.htm
*/
