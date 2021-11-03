import { HttpClient } from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  message:string='This is from home Service ';
  selectedCourse:any={};
  numberOfActiveCourse=new BehaviorSubject(0);
 
  data : any =[{}]
  constructor(private http:HttpClient,public toster:ToastrService,private spinner:NgxSpinnerService,private router:Router) { }
    getAll()
    {
      return this.http.get('https://localhost:44313/api/Course/')
    }

    // getNumberOfCustomer(){
    //   return this.http.get('https://localhost:44373/api/Users/NumberOfUsers/')
    // }
    deleteById(id:number)
    {
      this.spinner.show();
      this.http.delete('https://localhost:44313/api/Course/deletecourse/'+id).subscribe((data:any)=>{
        this.spinner.hide();
        this.toster.success("deleted");
      })

    }

    getCourseById(id:number)
    {
      this.spinner.show();
      debugger
      this.http.get('https://localhost:44313/api/Course/getcoursebyid/'+id).subscribe((res:any)=>{
        debugger
        this.selectedCourse=res;
        this.spinner.hide();
        this.router.navigate(['client/profile']);
        this.toster.success("Data return success")
      },err=>{
        this.spinner.hide();
        this.toster.error("error")
      })
    }
  getCourseByName(name:string)
  {
    this.spinner.show();
    debugger
    this.http.get('https://localhost:44313/api/Course/SearchCourse/'+name).subscribe((data:any)=>{
      debugger
      this.selectedCourse=data;
      this.spinner.hide();
      this.router.navigate(['client/profile']);
      this.toster.success("Data return success")

    },err=>{
      this.spinner.hide();
      this.toster.error("error")
    })
  }

  create(data:any)
  {
    this.spinner.show();
    this.http.post('https://localhost:44313/api/Course/',data).subscribe((res:any)=>{
      this.toster.success('Created');
      this.spinner.hide();
    },err=>{
      this.spinner.hide();
      this.toster.error("error create")
    })
  }
}
