import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = 'http://localhost:8080/authentication';

  constructor(private http: HttpClient) {
  }


  testJwt(): Observable<Object> {
    let booking = {
      'login': 'Bearer dsaa',
      'password': 'Bearer ewewewew'
    };
    return this.http.post(`${this.baseUrl}` + `/authenticate`, booking);
  }

}
