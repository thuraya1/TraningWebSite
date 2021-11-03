import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  showMessage = false;
  showLoader=false;
  toggleShowMessage() {
  this.showMessage = !this.showMessage;
 
  }
  
  constructor(private spinner: NgxSpinnerService,private router:Router,public home:HomeService,public auth:AuthService) { }

  ngOnInit(): void {
  }
  // submit(){
  //  this.auth.submit(this.emailFormControl,this.passwordFormControl);
  // }

  gotToRegister(){
      this.router.navigate(['register']);
  }
}
