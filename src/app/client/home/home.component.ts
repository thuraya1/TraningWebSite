import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/service/home.service';
import {MatDialog} from '@angular/material/dialog';
import { NewcourseComponent } from '../newcourse/newcourse.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
numberActive:number=0;
  constructor(private router:Router,public homeService:HomeService,public toster:ToastrService,private spinner:NgxSpinnerService,public dialog: MatDialog) { 
   
  }

  ngOnInit(): void {
    console.log('started');
    this.AlertActiveCourse();
    setInterval(()=>{
      this.homeService.numberOfActiveCourse.next(this.homeService.numberOfActiveCourse.value+1)
    },3000)
    this.toster.success('the data retrive:)')
    this.getAll();
    // this.getNumberOfCustomer();
    this .toster.success("Welcome to first toast ");
  
  }
  AlertActiveCourse()
  {
    this.homeService.numberOfActiveCourse.subscribe((value)=>{
      this.numberActive=value;
    })
  }
  goToProfile(){
    this.router.navigate(['client/profile']);
  }
getAll()
{
  this.spinner.show();
  this.homeService.getAll().subscribe((res:any)=>{
    this.homeService.data=res;
    this.spinner.hide();
    this.toster.success("Data Retrived !!!")
  },err=>{
    this.spinner.hide();
    this.toster.error('worring!!')
  })
}
// getNumberOfCustomer()
// {
//   this.spinner.show();
//   this.homeService.getNumberOfCustomer().subscribe((result:any)=>{
//     this.homeService.data=result;
//     this.spinner.hide();
//     this.toster.success("Data Retrived  !!!")
//   },err=>{
//     this.spinner.hide();
//     this.toster.error('something worring!!')
//   })
// }

CreateNewCourse()
{
this.dialog.open(NewcourseComponent)
}
}
