import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsectionRoutingModule } from './textsection-routing.module';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { TextSectionContainerComponent } from './components/text-section-container/text-section-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddressDetailsComponent,
    ReviewDetailsComponent,
    PersonalDetailsComponent,
    TextSectionContainerComponent
  ],
  imports: [
    CommonModule,
    TextsectionRoutingModule,
    SharedModule
  ]
})
export class TextsectionModule { }
