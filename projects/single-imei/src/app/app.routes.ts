import { Routes } from '@angular/router';
import { BlockUnblockPageComponent } from './block-unblock/block-unblock-page/block-unblock-page.component';

export const APP_ROUTES: Routes = [
   
    { path: '',
     component: BlockUnblockPageComponent, 
     pathMatch: 'full'}
];
