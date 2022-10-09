import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements DoCheck {

  public PersonalDataStatus : any
  public AddressDataStatus : any

  constructor(private _router: Router, private _Sharedservice : SharedService) { }

  ngDoCheck(): void {
    this.PersonalDataStatus = this._Sharedservice.PersonalDataValidation()
    this.AddressDataStatus = this._Sharedservice.AddressDataValidation()

    // console.log(this.PersonalDataStatus);
    // console.log(this.AddressDataStatus);
  }

  public navigate(url: string) {
    this._router.navigateByUrl(url);
  }

  
}
