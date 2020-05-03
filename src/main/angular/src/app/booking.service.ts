import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Booking} from './_models/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {


  private baseUrl = 'http://localhost:8080/bookings';

  constructor(private http: HttpClient) {
  }


  upsertBooking(booking: Booking): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/upsertBooking`, booking);
  }

  // createBooking(booking: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/create`, booking);
  // }

  getBookingsByDate(startDate: string, endDate: string, flatId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('startDate', startDate);
    params = params.append('endDate', endDate);
    params = params.append('pointName', flatId);
    return this.http.get(`${this.baseUrl}` + `/bookingsByDate`, {params: params});
  }

  getBooking(bookingId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('bookingId', bookingId);
    return this.http.get(`${this.baseUrl}` + `/getBooking`, {params: params});
  }

  deleteBooking(bookingId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('bookingId', bookingId);
    return this.http.get(`${this.baseUrl}` + `/deleteBooking`, {params: params});
  }

  getUserBookings(userId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get(`${this.baseUrl}` + `/userBookings`, {params: params});
  }

  getFlatBookings(flatId: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('userId', flatId);
    return this.http.get(`${this.baseUrl}` + `/flatBookings`, {params: params});
  }

}
