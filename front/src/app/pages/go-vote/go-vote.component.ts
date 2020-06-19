import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ProductService } from '../../shared/product.service';
@Component({
  selector: 'app-go-vote',
  templateUrl: './go-vote.component.html',
  styleUrls: ['./go-vote.component.css']
})
export class GoVoteComponent implements OnInit {
  data:any;
  id:any;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public router: Router
  ) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }
  getOne(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.data= data;
      
    })
  }
}
