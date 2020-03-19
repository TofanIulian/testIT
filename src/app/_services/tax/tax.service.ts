import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor() { }

  federalIncomeTax;
  stateIncomeTax;
  socialSecurity;
  medicare;

}
