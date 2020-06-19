import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router  } from '@angular/router';

import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-vote-indiferent',
  templateUrl: './vote-indiferent.component.html',
  styleUrls: ['./vote-indiferent.component.css']
})
export class VoteIndiferentComponent implements OnInit {
  id:any;
  data:any;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.updateOneI();
  }

  updateOneI(){
    this.productService.UpdateProductI(this.id).subscribe((res) => {
      if (res.result) {
        console.log("mchet");
      }
    });
  }
  getOne(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.data= data;
      console.log(data.voteSatisfait);
    })
  }
}
