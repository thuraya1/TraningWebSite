import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-cours-cards',
  templateUrl: './cours-cards.component.html',
  styleUrls: ['./cours-cards.component.css']
})
export class CoursCardsComponent implements OnInit {
@Input() couresid :number |undefined
@Input() coursename :string='N/A'
@Input() price :number |undefined
@Input() startdate :string |undefined='N/A'
@Input() enddate :string |undefined='N/A'
@Input() levelid :number |undefined
@Input() employeeCourse :string |undefined='N/A'
@Input() studentCourses :string |undefined='N/A'
@Input() levels :string |undefined='N/A'
@Input() number_Of_Users :number |undefined
@Output() openProfile=new EventEmitter();
  constructor(public homeservice:HomeService,private router:Router) { }
  
  ngOnInit(): void {
    this.homeservice.getAll();
    // this.homeservice.getNumberOfCustomer();
  }
  showProfile(){
    
    if(this.couresid){
      debugger
      this.homeservice.getCourseById(this.couresid);
    }
    
    if(this.coursename){
      debugger
      this.homeservice.getCourseByName(this.coursename);
    }
   // this.openProfile.emit();

  }
  
  deleted()
    {
if(this.couresid){
  this.homeservice.deleteById(this.couresid);

}
    }
  
}
