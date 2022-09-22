import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  msg: string = '';
  showerrormsg: boolean = false;
  LoginUserData: any = [];
  accountDetailsForm!: FormGroup;
  submitted = false;
  authError = false;
  authErrorMsg: string;

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.validate();
  }

  validate() {
    this.accountDetailsForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.compose([
          Validators.required,
          Validators.minLength(7)
        ])
      ])),
    });
  }

  loginUser() {
    this.showerrormsg = false;
    let data = Object.assign({}, this.LoginUserData);

    this.submitted = true;
    
    //this.loginService.userLogin(data).subscribe(response=>{         
    //  if(response == 'SUCCESS'){
    //   if(response['jwtToken']){
    // this.loginService.tokendata(response['jwtToken']);
    // this.showerrormsg=false;
    this.router.navigate(['block-unblock']);
    // }else{
    // this.showerrormsg=true;     
    // this.msg="Invalid Credentials!"
    // this.authError = true;
    // this.authErrorMsg = this.msg;
    //}      
    //  }
    // })
  }


  

}
