import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginModule } from './login/login.module';
import { BlockUnblockModule } from './block-unblock/block-unblock.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [    
    BrowserModule,
    HttpClientModule,  
    RouterModule.forRoot(APP_ROUTES),
    LoginModule , 
    BlockUnblockModule,    
  ],
  providers: [],  
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class AppModule { }
