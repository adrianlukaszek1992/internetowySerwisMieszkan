import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  private baseUrl = 'http://localhost:8080/flat/list';

  constructor(private http: HttpClient) {
  }

  getPointsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public name: string;


}

