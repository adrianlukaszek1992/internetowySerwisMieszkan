import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../_models/user';
import {Administrator} from "../_models/administrator";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  formBuilder: FormBuilder;
  submitted = false;
  user: User;
  error: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.formBuilder = new FormBuilder();
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required]],
      createdDate: ['', [Validators.required]],
      balance: ['', [Validators.required]],
    });

  }
  onSubmit() {
    this.submitted = true;
    console.log(this.userForm);
    if (this.userForm.invalid) {
      return;
    }
    this.tryUpsert();
  }

  tryUpsert() {
    this.user = new User(this.userForm.value);
    this.userService.upsertUser(
      this.user
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
