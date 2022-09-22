import { Routes } from '@angular/router';
import { BlockUnblockPageComponent } from './block-unblock-page/block-unblock-page.component';


export const BLOCK_ROUTES: Routes = [   
    {
      path: 'block-unblock',
      component: BlockUnblockPageComponent,
      pathMatch: 'full'
    },
];

