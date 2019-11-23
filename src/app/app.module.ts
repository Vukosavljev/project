import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { OfferComponent } from './customers/customer/offer/offer.component';
import { SubscriptionComponent } from './customers/customer/subscription/subscription.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent,
        CustomerComponent,
        OfferComponent,
        SubscriptionComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
