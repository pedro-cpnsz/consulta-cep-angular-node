import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler)
  }

  public buscarPosts(): Observable<any[]> {

    let url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<any[]>(url);
  }
}
