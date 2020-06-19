import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {stringify} from 'querystring';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  posts: any[] ;
  sub = '' ;

  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Params();
    if (this.sub === ''){
      this.postService.getPosts().subscribe((data: any[]) => {
        console.log(data);
        this.posts = data;
      });
    }
  }
  OnChange(SearchData: String) {
    if ( SearchData === '') {
      this.postService.getPosts().subscribe((data: any[]) => {
        console.log(data);
        this.posts = data;
      });
    }
  this.postService.getPost(SearchData).subscribe((data: any[]) => {
    console.log(data);
    this.posts = data
  });

  }
  Params() {
    this.route.queryParams.subscribe(params => {
      this.sub = params['product_name'];
      console.log(this.sub);
    });
    this.postService.getPost(this.sub).subscribe((data: any[]) => {
      console.log(data);
      this.posts = data
    });
  }

}
