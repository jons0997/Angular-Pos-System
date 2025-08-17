import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
//import {component} from './name/name.component';
//EXAMPLE import {HeroesComponent} from './heroes/heroes.component'
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {/*path: 'name(route, where the url says in browser window)', component (the component to load): name of component*/
  /*EXAMPLE path: 'heros', component: HeroesComponent*/
  path: 'checkout',
  component: CheckoutComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

@NgModule({
  declarations: [
    CheckoutComponent,
    StoreComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule
  ],

  providers:[],
bootstrap: [/*bootstrapComponent Here*/],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
export default routes;
