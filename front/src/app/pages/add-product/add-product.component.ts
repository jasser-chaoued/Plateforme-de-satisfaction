import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  selectedFile = null;

  constructor(
    public fb: FormBuilder,
    public productService: ProductService,
    public router: Router) {
      this.addProductForm = this.fb.group({
        product_name: [''], 
        reference: [''],
        image: ['']
      });
     }

  ngOnInit(): void {
    this.onFileSelected(event);
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  addProduct() {
    this.productService.addProd(this.addProductForm.value).subscribe((res) => {
      if (res.result) {
        
      }
      this.router.navigate(['tables']);
    });
  }

}
