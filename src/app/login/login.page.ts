import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  error = false;
  password: string;
  
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    if((<HTMLInputElement>document.getElementById("password")).value  == "testtest") {
      this.error = false;
      this.router.navigate(["/tasks"]);
    } else {
      this.error = true;
    }
  }

}
