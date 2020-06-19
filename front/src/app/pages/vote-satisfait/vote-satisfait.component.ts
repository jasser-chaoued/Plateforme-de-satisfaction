import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { ProductService } from '../../shared/product.service';
@Component({
  selector: 'app-vote-satisfait',
  templateUrl: './vote-satisfait.component.html',
  styleUrls: ['./vote-satisfait.component.css']
})
export class VoteSatisfaitComponent implements OnInit {

  id:any;
  data:any;
  constructor(public productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.updateOne();
  }
  
  updateOne(){
    this.productService.UpdateProductS(this.id).subscribe((res) => {
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
