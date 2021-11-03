import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emailFormControl= new FormControl('',[Validators.required,Validators.email]);
  passwordFormControl= new FormControl('',[Validators.required,Validators.minLength(8)]);
  constructor(private spinner:NgxSpinnerService,private router:Router) { }

  submit(){
    console.log(this.emailFormControl.value,this.passwordFormControl.value);
    // this.showLoader=true;
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      //this.home.message='you are logged In !!'
      this.router.navigate(['client'])
    },3000)
  }
}
