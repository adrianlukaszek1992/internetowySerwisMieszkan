import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private baseUrl = 'http://localhost:8080/booking';

  constructor(private http: HttpClient) {
  }

  createBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, booking);
  }

  validation(startDate: string, endDate: string, pointName: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('startDate', startDate);
    params = params.append('endDate', endDate);
    params = params.append('pointName', pointName);
    return this.http.get(`${this.baseUrl}` + `/validation`, {params: params});
  }

  testJwt(): Observable<Object> {
    let booking ={
      'login': 'aaa',
      'password':'bbbb'
    };
    return this.http.post(`${this.baseUrl}` + `/login`, booking);
  }

}
