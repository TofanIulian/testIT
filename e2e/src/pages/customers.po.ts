import { browser, by, element, ExpectedConditions } from 'protractor';

import { PageObjectBase } from '../page-object-base.po';

export class CustomersPage extends PageObjectBase {
  constructor() {
    super('app-customers', '/customers');
  }
}