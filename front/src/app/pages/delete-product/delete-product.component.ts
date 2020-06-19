import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  datas:any;
  id:any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    public productService: ProductService,
    public router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(res => {
      console.log(res);
    });
  }
  getOne(){
    this.productService.getProduct(this.id).subscribe(data=>{
      this.datas= data;
    })
  }
}
