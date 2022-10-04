import { Injectable } from '@angular/core';
import { CONTACTS } from '../mocks/contact.mocks';
import { IContact } from '../models/interfaces/contact.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContact(): IContact[]{
    return CONTACTS
  }
}
