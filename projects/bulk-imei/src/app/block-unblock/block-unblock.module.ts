import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUnblockPageComponent } from './block-unblock-page/block-unblock-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BLOCK_ROUTES } from './block-unblock.routes';

@NgModule({
  declarations: [ BlockUnblockPageComponent  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,   
    RouterModule.forChild(BLOCK_ROUTES)
  ],
  exports: [  BlockUnblockPageComponent ]
})

export class BlockUnblockModule { }
