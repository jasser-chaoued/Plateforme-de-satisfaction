import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: Object = {};
  UpdateForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    });
    this.UpdateForm = this.fb.group({
      userName: String,
      name: String,
      lastName: String,
      email: String,
      adress: String,
      city: String,
      country: String,
      postalCode: Number,
      phone: Number,
      aboutMe: String
  });
  }

  ngOnInit() {
  }
  updateUser() {
    const id = localStorage.getItem('user_id');
    this.authService.update(this.UpdateForm.value).subscribe((res) => {
      
    });
    this.router.navigate(['user-profile/',id]);
  }
}
