import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 RegisterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.RegisterForm = this.fb.group({
      userName: [''],
      name: [''],
      lastName: [''],
      email: [''],
      adress: [''],
      city: [''],
      country: [''],
      postalCode: [''],
      phone: [''],
      aboutMe: [''],
      password: ['']
  });
}

  ngOnInit() {
  }

  registerUser() {
    this.authService.signUp(this.RegisterForm.value).subscribe((res) => {
      if (res.result) {
        this.RegisterForm.reset();
        this.router.navigate(['login']);
      }
    });
  }
}
