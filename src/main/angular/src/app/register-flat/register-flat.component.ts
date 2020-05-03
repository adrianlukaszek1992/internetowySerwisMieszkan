import {Component, OnInit} from '@angular/core';
import {FlatService} from '../flatService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng4-validators';

@Component({
  selector: 'app-register-point',
  templateUrl: './register-flat.component.html',
  styleUrls: ['./register-flat.component.css']
})
export class RegisterFlatComponent implements OnInit {

   latitude: number;
   longitude: number;
  form: FormGroup;
  submitted = false;
  ownerName: string;
  pricePerDay: number;
  fullAdress: string;


  constructor(private bannerRegisterService: FlatService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.latitude = this.bannerRegisterService.latitude;
    this.longitude = this.bannerRegisterService.longitude;
    this.fullAdress = this.bannerRegisterService.fullAdress;
    console.log(this.fullAdress);
  }

  private _createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      ownerName: [null, Validators.required],
      pricePerDay: [null, Validators.required]
    });
  }

}
