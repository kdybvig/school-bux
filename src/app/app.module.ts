import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule} from '@angular/material';
import { StoreComponent } from './store/store.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { PurchasedItemsComponent } from './purchased-items/purchased-items.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ToolbarComponent,
    CartComponent,
    WishlistComponent,
    AccountComponent,
    PurchasedItemsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatIconModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
