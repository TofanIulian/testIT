import { Injectable } from '@angular/core';
import { TaxService } from '../tax/tax.service';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  constructor(private taxService?: TaxService) { 
  }
}
