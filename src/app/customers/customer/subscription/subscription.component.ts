import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { OfferSubObserverService } from '../../../services/offer-sub-observer.service';
import { SubscriptionModel } from '../../../models/subscription.model';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit, OnDestroy {
    private subscr = new Subscription();
    subsFormValue = {
        name: '',
        type: ''
    };
    @Input() subsId: number;
    constructor(private offerSubObserverService: OfferSubObserverService) {}

    ngOnInit() {
        this.subscr.add(
            this.offerSubObserverService.subs$.subscribe(
                (subscriptions: any) => {
                    const allSubs = subscriptions.subscriptions;
                    if (allSubs) {
                        const subs = allSubs.filter(
                            (sub: SubscriptionModel) => sub.id === this.subsId
                        );
                        this.subsFormValue = subs[0];
                    }
                }
            )
        );
    }

    ngOnDestroy() {
        this.subscr.unsubscribe();
    }
}
