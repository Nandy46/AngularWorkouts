import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedContainerComponent } from './components/shared-container/shared-container.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent,
    SharedContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedContainerComponent,
    FormsModule
  ]
})
export class SharedModule { }
