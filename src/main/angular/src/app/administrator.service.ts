import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Administrator} from './_models/administrator';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {


  private baseUrl = 'http://localhost:8080/administrator';

  constructor(private http: HttpClient) {
  }


  editAdministrator(administrator: Administrator): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/editAdministrator`, administrator);
  }

  getAllUsers(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + `/getAllUsers`);
  }


}
