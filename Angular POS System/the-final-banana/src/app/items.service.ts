import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(): item[] {
    return ITEMS;
  }
}


export class item {
  id: string; //item id FIXME: Not implimented
  name: string; //item name
  cost: number; // how much it cost
  costpu: number; // cost per unit
  description: string; // description to show on storefront
  inventory: number; // How many items are in inventory 
}

export let ITEMS: item[] =
[
 {
   id: '1',
   name: "Perception: JoyRide 10.0 (Paddle Included)",
   cost: 599,
   costpu: 300,
   description: "A good 10.0 foot kayak",
   inventory: 3
 },
 {
   id: '2',
   name: "Paddle",
   cost: 50,
   costpu: 25,
   description: "Basic Paddle",
   inventory: 10
 },
  {
    id: '3',
    name: "MTI PDF",
    cost: 105,
    costpu: 20,
    description: "Life Guard Approxed Lifejacket",
    inventory: 10
  },
   {
     id: '4',
     name: "Perception: Pescador 10 (Paddle Included)",
     cost: 599,
     costpu: 300,
     description: "A Good Fishing Kayak",
     inventory: 3
    }
];
