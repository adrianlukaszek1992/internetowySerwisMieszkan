import {Component, OnInit} from '@angular/core';
import {BannerRegisterService} from '../banner-register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng4-validators';

@Component({
  selector: 'app-register-point',
  templateUrl: './register-point.component.html',
  styleUrls: ['./register-point.component.css']
})
export class RegisterPointComponent implements OnInit {

   latitude: number;
   longitude: number;
  form: FormGroup;
  submitted = false;
  ownerName: string;
  pricePerDay: number;
  fullAdress: string;


  constructor(private bannerRegisterService: BannerRegisterService, private formBuilder: FormBuilder) {
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
