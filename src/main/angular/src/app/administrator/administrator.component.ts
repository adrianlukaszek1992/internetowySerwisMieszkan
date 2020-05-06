import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdministratorService} from '../administrator.service';
import {User} from '../_models/User';
import {Observable} from 'rxjs';
import {Administrator} from '../_models/administrator';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  users: Observable<User>;
  administratorForm: FormGroup;
  formBuilder: FormBuilder;
  submitted = false;
  administartor: Administrator;
  error: string;

  constructor(private administratorService: AdministratorService) {
  }

  ngOnInit() {
    this.administratorService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    this.formBuilder = new FormBuilder();
    this.administratorForm = this.formBuilder.group({
      City: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      streetNumber: ['', [Validators.required]],
      localNumber: ['', [Validators.required]],
      Postcode: ['', [Validators.required]],
      Pesel: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.administratorForm);
    if (this.administratorForm.invalid) {
      return;
    }
    this.tryEdit();
  }

  tryEdit() {
    this.administartor = new Administrator(this.administratorForm.value);
    this.administratorService.editAdministrator(
      this.administartor
    ).subscribe(
      res => {
        if (res.error) {
          this.error = res.error;
        } else {
          window.alert(res.message);
        }
      },
      res => {
        this.error = res.error.error;
      });
  }
}
