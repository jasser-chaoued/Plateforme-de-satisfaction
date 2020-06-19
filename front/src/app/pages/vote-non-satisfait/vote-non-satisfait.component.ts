import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router  } from '@angular/router';

import { ProductService } from '../../shared/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/shared/posts.service';
import { Products } from 'src/app/shared/products';

@Component({
  selector: 'app-vote-non-satisfait',
  templateUrl: './vote-non-satisfait.component.html',
  styleUrls: ['./vote-non-satisfait.component.css']
})
export class VoteNonSatisfaitComponent implements OnInit {
  id:any;
  data:any;
  data1:any;
  PostForm: FormGroup;
  currentProduct: Products;
  name: String;
  
  constructor(
    public fb: FormBuilder,
    public productService: ProductService,
    public postsService: PostsService,
    private route: ActivatedRoute,
    public router: Router
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(res => {
     console.log(res);
     this.currentProduct = res;
     localStorage.setItem('prodName', res.product_name);
     
  });
  
  this.PostForm = this.fb.group({
    product_name: localStorage.getItem('prodName'),
    message: ['']
  });
  }
  AddPost(){
    this.postsService.addPost(this.PostForm.value).subscribe((res) => {
      localStorage.removeItem('prodName');
      if (res.result) {

      }
      this.router.navigate(['tables']);
    });
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.updateOneNon();
  }

  updateOneNon(){
    this.productService.UpdateProductInSatisfiait(this.id).subscribe((res) => {
      if (res.result) {
        console.log("mchet");
      }
    });
  }
  getOne1(){
    this.productService.getProduct1(this.id).subscribe(data=>{
      this.data1= data;
      console.log(data.voteSatisfait);
    })
  }
  getOne(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.data= data;
      console.log(data.voteSatisfait);
    })
  }
}