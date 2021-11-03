import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';
@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
formGroup=new FormGroup({
  coursename : new FormControl(''),
  price:new FormControl('',Validators.required),
  startdate : new FormControl('',Validators.required),
  enddate: new FormControl('',Validators.required),
  levelid:new FormControl('',Validators.required)
})
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
  }
  cname:any;
  cprice:any;
  csd:any;
  ced:any;
  cl:any
create()
{
this.cname=this.formGroup.value.coursename;
this.cprice=this.formGroup.value.price;
this.csd=this.formGroup.value.startdate;
this.ced=this.formGroup.value.enddate;
this.cl=this.formGroup.value.levelid;

const data2={
  coursename:this.cname.toString(),
  price:parseFloat(this.cprice),
  startdate:this.csd.toString(),
  enddate:this.ced.toString(),
  levelid:this.cl
}
this.homeService.create(data2);
}

}
