import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Flat} from './_models/flat';


@Injectable({
  providedIn: 'root'
})
export class FlatService {


  private baseUrl = 'http://localhost:8080/flat';

  constructor(private http: HttpClient) {
  }


  upsertFlat(flat: Flat): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/upsertFlat`, flat);
  }

  getFlat(flatId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('flatId', flatId);
    return this.http.get(`${this.baseUrl}` + `/getFlat`, {params: params});
  }

  deletFlat(flatId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('deleteFlat', flatId);
    return this.http.get(`${this.baseUrl}` + `/deleteBooking`, {params: params});
  }


  getCityFlats(city: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('city', city);
    return this.http.get(`${this.baseUrl}` + `/getCityFlats`, {params: params});
  }

  getUserFlats(userId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get(`${this.baseUrl}` + `/getUserFlats`, {params: params});
  }
}
