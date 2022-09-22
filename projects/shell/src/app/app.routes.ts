
import { Routes } from '@angular/router';
import { BlockUnblockPageComponent } from 'projects/bulk-imei/src/app/block-unblock/block-unblock-page/block-unblock-page.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'block-unblock',
      component: BlockUnblockPageComponent,
      pathMatch: 'full'
    },
];
