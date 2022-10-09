import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public AddressData : any = []
  public PersonalData : any = []

  public PersonalDataCheckbox : Boolean = false
  public AddressDataCheckbox : Boolean = false

  constructor() { }

  GetPersonaldata() {
    return this.PersonalData
  }

  GetAddressData() {
    return this.AddressData
  }

  AddPersonalData(e : any) {
    this.PersonalData.pop()
    this.PersonalData.push(e)
  }

  AddAddressData(e : any) {
    this.AddressData.pop()
    this.AddressData.push(e)
  }

  PersonalDataValidation() {
    if((this.PersonalData.FirstName && this.PersonalData.LastName  && this.PersonalData.Email && this.PersonalData.Phone) == '' || (this.PersonalData.FirstName && this.PersonalData.LastName  && this.PersonalData.Email && this.PersonalData.Phone) == undefined) {
      this.PersonalDataCheckbox = false
      return this.PersonalDataCheckbox
    }
    else if((this.PersonalData.FirstName && this.PersonalData.LastName && this.PersonalData.Email && this.PersonalData.Phone) != '') {
      this.PersonalDataCheckbox = true
      return this.PersonalDataCheckbox
    }
    else {
      this.PersonalDataCheckbox = false
      return this.PersonalDataCheckbox
    }
  }
  
  AddressDataValidation() {
    if((this.AddressData.Street && this.AddressData.City  && this.AddressData.State) == '' || (this.AddressData.Street && this.AddressData.City  && this.AddressData.State) == undefined) {
      this.AddressDataCheckbox = false
      return this.AddressDataCheckbox
    }
    else if((this.AddressData.Street && this.AddressData.City  && this.AddressData.State) != '') {
      this.AddressDataCheckbox = true
      return this.AddressDataCheckbox
    }
    else {
      this.AddressDataCheckbox = false
      return this.AddressDataCheckbox
    }
  }
}
