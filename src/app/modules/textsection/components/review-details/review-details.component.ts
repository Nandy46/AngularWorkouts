import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  GetPersonaldata : any = []
  GetAddressData : any = []

  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {
    this.GetPersonaldata = this._sharedService.GetPersonaldata()
    this.GetAddressData = this._sharedService.GetAddressData()
  }
}
