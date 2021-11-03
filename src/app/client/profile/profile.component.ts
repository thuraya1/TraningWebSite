import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public home:HomeService) { }
  numberActive=0;
  ngOnInit(): void {
    
    
    
      this.home.numberOfActiveCourse.subscribe((value)=>{
        this.numberActive=value;
        this.home.getAll();
        // this.home.getNumberOfCustomer();
  })
    
  }
 
}
