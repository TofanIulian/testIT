import { browser, by, element, ExpectedConditions } from 'protractor';

import { PageObjectBase } from '../page-object-base.po';

export class AboutPage extends PageObjectBase {
  constructor() {
    super('app-about', '/about');
  }
}