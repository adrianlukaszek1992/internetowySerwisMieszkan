import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {
  }


  upsertUser(user: User): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/upsertUser`, user);
  }

  login(login: string, password : string): Observable<any> {
    let params = new HttpParams();
    params = params.append('login', login);
    params = params.append('password', password);
    return this.http.get(`${this.baseUrl}` + `/login`, {params: params});
  }

  deleteUser(userId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get(`${this.baseUrl}` + `/deleteUser`, {params: params});
  }

}
