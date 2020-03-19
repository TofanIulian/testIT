import { browser, by, element, ExpectedConditions } from 'protractor';

import { PageObjectBase } from '../page-object-base.po';

export class MenuPage extends PageObjectBase {
  constructor() {
    super('app-menu', '/menu');
  }

  clickAbout() {
    return browser.get('/about');
  }

  clickTasks() {
    return browser.get('/tasks');
  }

  clickCustomers() {
    return browser.get('/customers');
  }
}