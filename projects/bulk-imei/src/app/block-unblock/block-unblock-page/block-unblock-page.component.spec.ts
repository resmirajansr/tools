import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { BlockUnblockPageComponent } from './block-unblock-page.component';

describe('BlockUnblockPageComponent', () => {
  let component: BlockUnblockPageComponent;
  let fixture: ComponentFixture<BlockUnblockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule ],      
      declarations: [ BlockUnblockPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnblockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
