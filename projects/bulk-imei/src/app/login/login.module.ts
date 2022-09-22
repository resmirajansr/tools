
import { LoginPageComponent } from './login-page/login-page.component';
import { LOGIN_ROUTES } from './login.routes';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,     
    RouterModule.forChild(LOGIN_ROUTES)
  ] ,
  exports: [
    LoginPageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class LoginModule { }
