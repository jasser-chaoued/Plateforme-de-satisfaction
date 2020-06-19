import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint = 'http://localhost:4000/apih';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) { 
  }

  // ADD PRODUCT
  addProd(product: Products): Observable<any> {
    product.points="0";
    product.voteSatisfait=0;
    product.voteNonSatisfait=0;
    product.voteIndiferent=0;
    const apih = `${this.endpoint}/add-product`;
    return this.http.post(apih, product)
      .pipe(
        catchError(this.handleError)
      );
  }

   // Get all products
 getAllProduct() {
  return this.http.get(`${this.endpoint}`);
}


  product: any;
  
   // GET PRODUCT
   getProduct(id): Observable<any> {
    const apih = `${this.endpoint}/read-product/${id}`;
    return this.http.get(apih, { headers: this.headers }).pipe(
      map((res: Response) => {
        
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getProduct1(id): Observable<any> {
    const apih = `${this.endpoint}/read-product/${id}`;
    return this.http.get(apih, { headers: this.headers }).pipe(
      map((res: Response) => {
        
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

   // Update Product S
   UpdateProductS(id): Observable<any> {
    let API_URL = `${this.endpoint}/update-product/${id}`;
    return this.http.put(API_URL, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
      
  }
  
     // Update Product Indiferent
     UpdateProductI(id): Observable<any> {
      let API_URL = `${this.endpoint}/update-productIndiferent/${id}`;
      return this.http.put(API_URL, { headers: this.headers })
        .pipe(
          catchError(this.handleError)
        )
        
    }
     // Update Product Non satisfait
     UpdateProductInSatisfiait(id): Observable<any> {
      let API_URL = `${this.endpoint}/update-productInsatisfait/${id}`;
      return this.http.put(API_URL, { headers: this.headers })
        .pipe(
          catchError(this.handleError)
        )
        
    }

    // Delete Product
  deleteProduct(id): Observable<any> {
    let url = `${this.endpoint}/delete-product/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
