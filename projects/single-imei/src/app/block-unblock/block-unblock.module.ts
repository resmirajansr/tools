import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUnblockPageComponent } from './block-unblock-page/block-unblock-page.component';
import { RouterModule } from '@angular/router';
import { BLOCK_ROUTES } from './block-unblock.routes';

@NgModule({
  declarations: [
    BlockUnblockPageComponent
  ],
  imports: [
    CommonModule,   
    RouterModule.forChild(BLOCK_ROUTES)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ]
})
export class BlockUnblockModule { }
