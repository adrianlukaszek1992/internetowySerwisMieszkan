import {MapService} from '../app.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng4-validators';
import {Booking} from '../booking';
import {BookingService} from '../booking.service';

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../authentication.service';


@Component({
  selector: 'app-booking-main',
  templateUrl: './booking-main.component.html',
  styleUrls: ['./booking-main.component.css']
})
export class BookingMainComponent implements OnInit {


  name: string;
  form: FormGroup;
  submitted = false;
  booking: Booking = new Booking();
  validationFailed = false;
  startDateEndDateCheck = true;
  nameValidation = true;

  constructor(private mapService: MapService, private formBuilder: FormBuilder, private bookingService: BookingService,
              private authService: AuthService) {
    this._createForm();


  }


  ngOnInit() {
    this.getName();
    this.checkName();
    this.authService.testJwt()
      .subscribe(
        data => {
          console.log(data);

        },
        error => {
          console.log(error);
        });

  }

  private getName() {
    this.name = this.mapService.name;

  }

  private _createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      endDate: [null, Validators.compose([Validators.required, CustomValidators.date])],
      startDate: [null, Validators.compose([Validators.required, CustomValidators.date])],
    });
  }

  getControl(name: string): AbstractControl {
    return this.form.get(name);
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  private _createBooking(): Booking {
    const item: any = {};
    ['name', 'lastname', 'email', 'endDate', 'startDate'].forEach((key: string) => {
      item[key] = this.getControl(key).value;
      item['pointName'] = this.name;
    });

    return item as Booking;
  }

  save() {
    const booking = this._createBooking();
    console.log(booking);
    this.bookingService.createBooking(booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();


  }

  private checkStartEndDates() {
    if (this.form.controls['startDate'].value > this.form.controls['endDate'].value) {
      this.startDateEndDateCheck = false;
    } else {
      this.startDateEndDateCheck = true;
    }
  }

  private checkName() {
    if (this.name == null) {
      this.nameValidation = false;
    } else {
      this.nameValidation = true;
    }
  }

  onSubmit() {

    this.bookingService.validation(this.form.controls['startDate'].value, this.form.controls['endDate'].value, this.name)
      .subscribe(
        data => {
          console.log(data);
          if (data === true) {
            this.submitted = true;
            this.validationFailed = false;
            this.save();
          } else {
            this.submitted = true;
            this.validationFailed = true;
          }
        },
        error => {
          console.log(error);
          this.submitted = false;
        });
  }
}
