import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { RequestOptions } from 'http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  public allblogs(query): Observable<any> {
    return this.http.post('http://localhost:3000/api/allblogs',query);
  }

  public allHomeData(query): Observable<any> {
    return this.http.post('http://localhost:3000/api/allHomeData', query);
  }

  public addblog(blog: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/addblog', blog);
  }

  public getBlogById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/allblogs/${id}`);
  }
}
