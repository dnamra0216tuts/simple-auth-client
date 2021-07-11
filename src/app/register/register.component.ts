import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.authService.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
