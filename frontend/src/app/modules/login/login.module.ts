import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginModalComponent } from '@modules/login/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '@modules/login/services/login/login.service';

@NgModule({
  declarations: [LoginComponent, LoginModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {}
