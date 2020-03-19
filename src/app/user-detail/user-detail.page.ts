import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  constructor(public storage: Storage) { }

  ngOnInit() {
  }

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

}