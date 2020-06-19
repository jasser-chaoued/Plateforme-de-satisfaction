import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Posts } from './posts';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get('http://localhost:4000/posts/all');
  }
  getPost(name: String) {
    return this.http.get('http://localhost:4000/posts/find/' + name);
}

addPost(post: Posts): Observable<any> {
  
  return this.http.post('http://localhost:4000/posts/new', post)
    .pipe(
      catchError(this.handleError)
    );
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
