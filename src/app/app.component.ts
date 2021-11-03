import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainingWebSite';
  name='Dana Kanaan';
  salary=200;
  email='DanaKAnaan125@gmail.com'
  currentYear:Date|any=new Date().getFullYear();//2021
  constructor(){
    setTimeout(() => {
      this.title='Updated Project '
    }, 3000);
  }
  HandleInput(e:any){

    if(this.name.length>15)
    {
      this.name=this.name.substr(0,15);
      alert('you are writting a long name ');
    }
  }
  clear(){
    this.name='';
    this.email='';
    this.salary=0;
  }
}
