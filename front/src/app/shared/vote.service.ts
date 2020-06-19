import { Injectable } from '@angular/core';
import { VoteForService } from './vote-for-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  endpoint = 'http://localhost:4000/apiVote';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }
   // ADD PRODUCT
   addSer(service: VoteForService): Observable<any> {
    service.voteSatisfait=0;
    service.voteNonSatisfait=0;
    service.voteIndiferent=0;
    const apiVote = `${this.endpoint}/add-vote`;
    return this.http.post(apiVote, service)
      .pipe(
        catchError(this.handleError)
      );
  }

     // Get all products
 getAllVote() {
  return this.http.get(`${this.endpoint}`);
}


  // GET PRODUCT
  getService(id): Observable<any> {
    const apiVote = `${this.endpoint}/read-Service/${id}`;
    return this.http.get(apiVote, { headers: this.headers }).pipe(
      map((res: Response) => {
        
        return res || {};
      }),
      catchError(this.handleError)
    );
  }


 // Update Service Non satisfait
 UpdateSavInSatisfiait(id): Observable<any> {
  let API_URL = `${this.endpoint}/update-serviceInsatisfait/${id}`;
  return this.http.put(API_URL, { headers: this.headers })
    .pipe(
      catchError(this.handleError)
    )
    
}

// Update Service S
   UpdateSavS(id): Observable<any> {
    let API_URL = `${this.endpoint}/update-serviceSatisfait/${id}`;
    return this.http.put(API_URL, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
      
  }
  
     // Update Service Indiferent
     UpdateSavI(id): Observable<any> {
      let API_URL = `${this.endpoint}/update-serviceIndiferent/${id}`;
      return this.http.put(API_URL, { headers: this.headers })
        .pipe(
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
