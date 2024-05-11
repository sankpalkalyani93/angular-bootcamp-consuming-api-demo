import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // to retrieve/ fetch posts from api
  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }
}
