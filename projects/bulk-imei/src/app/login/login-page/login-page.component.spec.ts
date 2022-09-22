import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
 
  beforeEach(async () => {  
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [   LoginPageComponent  ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
    })
    .compileComponents();
  });

  beforeEach(() => {    
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.accountDetailsForm).toBeDefined();
    expect(component.accountDetailsForm.invalid).toBeTruthy();
    expect(component.authError).toBeFalsy();
    expect(component.authErrorMsg).toBeUndefined();
  });

  it('submitted should be true when LoginUser()', () => {
    component.loginUser();
    expect(component.submitted).toBeTruthy();
    expect(component.authError).toBeFalsy();
  });  
});
