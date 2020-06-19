import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  addProstForm: FormGroup;
  selectedFile = null;

  constructor(
    public fb: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
