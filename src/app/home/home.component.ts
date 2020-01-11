import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface IFormError {
  usernameError: () => {};
  passwordError: () => {};
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hide: boolean = <boolean>true;

  public signin: FormGroup;
  public formDetails: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  public submit(): void {
    this.formDetails = this.signin.getRawValue();

    console.log({ d: this.formDetails });
  }

  public get status() {
    return this.signin.controls;
  }

  public get getErrorMessage(): IFormError {
    return {
      passwordError: () => {
        if (this.status.password.hasError) {
          return this.status.password.hasError('required')
            ? 'a password is required'
            : '';
        }
      },
      usernameError: () => {
        if (this.status.username.hasError) {
          return this.status.username.hasError('required')
            ? 'username is required'
            : this.status.username.hasError('pattern')
            ? 'Invalid username'
            : '';
        }
      }
    };
  }

  private initForm(): void {
    this.signin = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(
          // tslint:disable-next-line:max-line-length
          /[a-zA-Z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/
        )
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$'
        )
      ])
    });
  }
}
