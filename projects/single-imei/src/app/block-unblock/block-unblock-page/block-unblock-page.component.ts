import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-block-unblock-page',
  templateUrl: './block-unblock-page.component.html',
  styleUrls: ['./block-unblock-page.component.css']
})
export class BlockUnblockPageComponent implements OnInit {
  blockdataModel:any=[];
  bForm!: FormGroup; 
  BlockUnblockList:any=[];
  UpdatedImeiList:any=[];
 
  constructor() { }

  ngOnInit(): void {
    this.bForm = new FormGroup({
      Reason: new FormControl('', Validators.compose([
        Validators.required      
      ])),
      ImeiList: new FormControl('', Validators.compose([
        Validators.required      
      ])),
    });
  }

  getReasonlist(value:any ){
   let key= value;
  //  this.loginService.getBlockUnblockDetails(key).subscribe(response=>{         
  //   if(response ){
  //     this.BlockUnblockList = response && response ? response:null;
  //   }
  //   })   
  }

  UpdateImeiList(){
    let data = Object.assign({}, this.blockdataModel);
    // this.loginService.UpdateIMEIdata(data).subscribe(response=>{         
    //   if(response ){
    //   this.UpdatedImeiList = response && response ? response: null
    //   }
    //   })  
  }

}
