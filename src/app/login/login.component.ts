import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  async onChange(event: any) {
    console.log(event.target.value)
  }

  onSave(){
    this.router.navigateByUrl("home")

  }
  onRegister(){
    this.router.navigateByUrl("register")
  }

}
