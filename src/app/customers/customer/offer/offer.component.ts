import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OfferModel } from '../../../models/offer.model';
import { OfferSubObserverService } from '../../../services/offer-sub-observer.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit, OnDestroy {
    private subs = new Subscription();
    @Input() offerId: number;
    offerFormValue = {
        name: '',
        contractStartDate: '',
        contractEndDate: ''
    };
    constructor(private offerSubObserverService: OfferSubObserverService) {}

    ngOnInit() {
        this.subs.add(
            this.offerSubObserverService.offer$.subscribe((offers: any) => {
                const allOffers = offers.offers;
                if (allOffers) {
                    const offerArray = allOffers.filter(
                        (offer: OfferModel) => offer.id === this.offerId
                    );
                    this.offerFormValue = offerArray[0];
                }
            })
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
