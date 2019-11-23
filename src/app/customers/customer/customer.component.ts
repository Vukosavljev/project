import { Component, OnInit, Input } from '@angular/core';

import { CustomerModel } from './../../models/customer.model';
import { SubscriptionModel } from './../../models/subscription.model';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    @Input() customerData: CustomerModel;
    subscription: SubscriptionModel;
    constructor() {}

    ngOnInit() {}
}
