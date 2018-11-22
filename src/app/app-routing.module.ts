import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent }   from './store/store.component';
import { CartComponent }  from './cart/cart.component';
import { WishlistComponent }  from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { PurchasedItemsComponent }  from './purchased-items/purchased-items.component';

const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'account', component: AccountComponent },
  { path: 'purchased', component: PurchasedItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
