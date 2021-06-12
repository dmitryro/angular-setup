import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';


const routes: Routes = [
  { 
      path: '',
      component: HomeComponent
  },
  { 
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'admin',
      loadChildren: () =>
      import('@modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
      path: 'login',
      loadChildren: () =>
      import('@modules/login/login.module').then(m => m.LoginModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
