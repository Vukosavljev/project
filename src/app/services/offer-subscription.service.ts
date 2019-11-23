import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { OfferModel } from './../models/offer.model';
import { SubscriptionModel } from '../models/subscription.model';

@Injectable({
    providedIn: 'root'
})
export class OfferSubscriptionService {
    BASE_URL = 'https://selfcare-service.demo.melita.com/interview/api/';
    OFFER_URL = this.BASE_URL + 'offers';
    SUBSCRIPTION_URL = this.OFFER_URL + '/100/subscriptions';

    constructor(private http: HttpClient) {}

    getOffer(): Observable<OfferModel[]> {
        return this.http.get<OfferModel[]>(this.OFFER_URL);
    }

    getSubscription(): Observable<SubscriptionModel[]> {
        return this.http.get<SubscriptionModel[]>(this.SUBSCRIPTION_URL);
    }
}
