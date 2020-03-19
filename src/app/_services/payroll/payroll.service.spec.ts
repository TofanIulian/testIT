import { TestBed, inject } from '@angular/core/testing';

import { PayrollService } from './payroll.service';
import { TaxService } from '../tax/tax.service';

describe('PayrolService', () => {
  let taxServiceSpy;

  beforeEach(() => {
    taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
    TestBed.configureTestingModule({
      providers: [
        PayrollService,
        { provide: TaxService, useValue: taxServiceSpy }
      ]
    });
  });

  it('does some test where it is injected',
    inject([PayrollService], (service: PayrollService) => {
      expect(service).toBeTruthy();
    })
  );

  it('does some test where it is manually built', () => {
    const service = new PayrollService();
    expect(service).toBeTruthy();
  });
});