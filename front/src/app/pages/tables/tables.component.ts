import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  products:any = [];
  constructor(
    public productService: ProductService
  )
  { 
    this.allProduct();
  }

  ngOnInit() {
  }
  allProduct(){
    this.productService.getAllProduct().subscribe((data) => {
     this.products = data;
    })    
  }
}
