import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  public AddressData : any = []

  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {
    this.AddressData = this._sharedService.AddressData
    console.log(this.AddressData);
    
  }

  AddressDataValidation(e : any) {

  }

  EmitAddressData(e : any) {
    this._sharedService.AddAddressData(e)
    console.log(this._sharedService.AddressData)
  }
}
