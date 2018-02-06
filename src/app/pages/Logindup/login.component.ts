import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  message: string;
  username: string;
  password: string;
  returnUrl: string;
  public form:FormGroup;
  public email:AbstractControl;
  /*public password:AbstractControl;*/
  public submitted:boolean = false;

  constructor(public LoginService: LoginService,
    public router: Router,
              fb:FormBuilder) {}
    
      /*'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    /*this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }*/
  onSubmit() {
    this.LoginService.login(this.username, this.password).subscribe(() => {
      if (this.LoginService.isLoggedIn) {
        this.router.navigate([this.returnUrl]);
      }
      else
      {
        this.message = 'Login failed! Try again';
      }
    });
  }
}
