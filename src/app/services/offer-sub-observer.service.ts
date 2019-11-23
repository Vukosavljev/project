import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { SubscriptionModel } from '../models/subscription.model';
import { OfferModel } from './../models/offer.model';

@Injectable({ providedIn: 'root' })
export class OfferSubObserverService {
    private offerSubject = new BehaviorSubject<OfferModel[] | []>([]);
    private subsSubject = new BehaviorSubject<SubscriptionModel[] | []>([]);

    offer$ = this.offerSubject.asObservable();
    subs$ = this.subsSubject.asObservable();

    updateOffers(offers: OfferModel[]) {
        return this.offerSubject.next(offers);
    }

    updateSubs(subscriptions: SubscriptionModel[]) {
        return this.subsSubject.next(subscriptions);
    }
}
