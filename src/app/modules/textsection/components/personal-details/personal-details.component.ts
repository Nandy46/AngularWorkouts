import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  public PersonalData : any = []

  constructor(private _sharedService : SharedService) { }

  ngOnInit(): void {
    this.PersonalData = this._sharedService.PersonalData
    console.log(this.PersonalData);
  }

  EmitPersonalData(e : any) {
    this._sharedService.AddPersonalData(e)
    console.log(this._sharedService.PersonalData)
  }
}
