import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';












const routes: Routes = [
{
  path:"",
  component:MainLayoutComponent,
  children:[
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"hakkimizda",
      component:AboutUsComponent
    },
    {
      path:"iletisim",
      component:ContactComponent
    }
  ]

},
{
path:"admin",
component:AdminLayoutComponent
}

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
