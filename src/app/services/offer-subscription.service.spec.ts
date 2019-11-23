import { TestBed } from '@angular/core/testing';

import { OfferSubscriptionService } from './offer-subscription.service';

describe('OfferSubscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferSubscriptionService = TestBed.get(OfferSubscriptionService);
    expect(service).toBeTruthy();
  });
});
