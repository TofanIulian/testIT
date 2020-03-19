import { browser, by, element, ExpectedConditions } from 'protractor';

import { PageObjectBase } from '../page-object-base.po';

export class TasksPage extends PageObjectBase {
  constructor() {
    super('app-tasks', '/tasks');
  }
}