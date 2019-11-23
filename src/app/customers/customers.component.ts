import { OfferSubObserverService } from './../services/offer-sub-observer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OfferSubscriptionService } from './../services/offer-subscription.service';
import { COSTUMER_MOCK } from './../mock/customer.mock';
import { SubscriptionModel } from '../models/subscription.model';
import { OfferModel } from './../models/offer.model';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
    private subs = new Subscription();
    allCustomers = COSTUMER_MOCK;
    constructor(
        private offerSubService: OfferSubscriptionService,
        private offerSubObserverService: OfferSubObserverService
    ) {}

    ngOnInit() {
        this.subs.add(
            this.offerSubService.getOffer().subscribe(
                (offerResponse: OfferModel[]) =>
                    this.offerSubObserverService.updateOffers(offerResponse),
                error => console.log(error)
            )
        );
        this.subs.add(
            this.offerSubService.getSubscription().subscribe(
                (subResponse: SubscriptionModel[]) =>
                    this.offerSubObserverService.updateSubs(subResponse),
                error => console.log(error)
            )
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
