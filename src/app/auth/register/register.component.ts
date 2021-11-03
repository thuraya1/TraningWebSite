import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup=new FormGroup({
  fullName : new FormControl('',Validators.required),
  email:new FormControl('',[Validators.email,Validators.required]),
  password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  address: new FormControl('',Validators.required),
  phoneNumber: new FormControl('')

})



  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    // console.log(this.registerForm.value);
    console.log(this.registerForm.controls.email.value);

  }
  goTlogin(){
    this.router.navigate(['']);
  }

}
