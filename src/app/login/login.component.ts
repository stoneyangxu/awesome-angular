import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick', this.username, this.password, this.authService.loginWithCredentials(this.username, this.password));
  }

}
