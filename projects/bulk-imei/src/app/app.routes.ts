import { Routes } from '@angular/router';
import { BlockUnblockPageComponent } from './block-unblock/block-unblock-page/block-unblock-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: LoginPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'block-unblock',
        component: BlockUnblockPageComponent,
        pathMatch: 'full'
      },
];
