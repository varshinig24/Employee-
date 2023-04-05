import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { SubComponentComponent } from './my-component/sub-component/sub-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyComponentComponent,
    SubComponentComponent
  ],
  exports: [
    MyComponentComponent
  ]
})
export class MyModuleModule { }
