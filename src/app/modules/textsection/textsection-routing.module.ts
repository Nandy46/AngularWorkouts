import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { TextSectionContainerComponent } from './components/text-section-container/text-section-container.component';

const routes: Routes = [
  {
    path : '',
    component : TextSectionContainerComponent,
    children : [
      {
        path : '',
        component : PersonalDetailsComponent
      },
      {
        path : 'Address',
        component : AddressDetailsComponent
      },
      {
        path : 'Review',
        component : ReviewDetailsComponent
      },
      // {
      //   path : '**',
      //   redirectTo : '',
      //   pathMatch : 'full'
      // }
    ]
  },
  // {
  //   path : '**',
  //     redirectTo : '',
  //     pathMatch : 'full'
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextsectionRoutingModule { }
