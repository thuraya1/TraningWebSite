import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    // http://localhost:4200/
  path:'about',
  component:AboutusComponent
},{
  path:'contactus',
  component:ContactusComponent
},{
  path:'',
  loadChildren:()=>AuthModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
